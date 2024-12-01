import React, { useState, useEffect } from "react";
import classes from "./Schedule.module.scss";
import axios from "axios";
import Loader from "../../assets/Loader/Loader";
import Calendar from "react-calendar";
import Cookies from "js-cookie";
import "react-calendar/dist/Calendar.css";

const Schedule = () => {
  const [classData, setClassData] = useState([]);
  const [scheduleData, setScheduleData] = useState([]);
  const [isScheduleFetched, setIsScheduleFetched] = useState(false);
  const [schedule, setSchedule] = useState({
    Monday: { morning: [], afternoon: [], night: [] },
    Tuesday: { morning: [], afternoon: [], night: [] },
    Wednesday: { morning: [], afternoon: [], night: [] },
    Thursday: { morning: [], afternoon: [], night: [] },
    Friday: { morning: [], afternoon: [], night: [] },
    Saturday: { morning: [], afternoon: [], night: [] },
  });
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date()); // Selected date state

  const userId = Cookies.get("userId");
  const role = Cookies.get("role");

  if (!userId || !role) {
    navigate("/login");
    return null;
  }

  const classColors = [
    "#641e16",
    "#512e5f",
    "#154360",
    "#145a32",
    "#7e5109",
    "#626567",
    "#17202a",
    "#424949",
    "#784212",
  ];

  const getClassColor = (className) => {
    let index = 0;
    for (let i = 0; i < className.length; i++) {
      index += className.charCodeAt(i);
    }
    return classColors[index % classColors.length];
  };

  useEffect(() => {
    if (role === "Admin") {
      axios
        .get(
          `https://determined-freedom-production.up.railway.app/api/v1/lophoc`
        )
        .then((res) => {
          setClassData(res.data);
        });
    } else {
      axios
        .get(
          `https://determined-freedom-production.up.railway.app/api/v1/nguoidung/personalSchedule/${userId}`
        )
        .then((res) => {
          setScheduleData(res.data);
          setLoading(false);
          console.log(scheduleData);
        });
    }
  }, [role, userId, loading]);

  useEffect(() => {
    if (classData.length > 0 && !isScheduleFetched) {
      const fetchScheduleData = async () => {
        const schedulePromises = classData.map((classItem) =>
          axios
            .get(
              `https://determined-freedom-production.up.railway.app/api/v1/lophoc/${classItem.malop}/thoikhoabieu`
            )
            .then((res) => {
              return res.data.map((item) => ({
                ...item,
                tenlophoc: classItem.tenlophoc, // Include tenlophoc here
                ngaykhaigiang: classItem.ngaykhaigiang,
                thoigianhoc: classItem.thoigianhoc,
              }));
            })
        );

        const schedules = await Promise.all(schedulePromises);
        const scheduleResults = schedules.flat();
        setScheduleData(scheduleResults);
        setIsScheduleFetched(true);
        setLoading(false);
      };

      fetchScheduleData();
    }
  }, [classData, isScheduleFetched]);

  const getDayName = (thuhoc) => {
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[thuhoc - 2]; // Map to weekdays
  };

  const getTimeSlot = (tgbatdau) => {
    const hour = parseInt(tgbatdau.split(":")[0], 10);
    if (hour >= 6 && hour < 12) return "morning";
    if (hour >= 12 && hour < 18) return "afternoon";
    return "night";
  };

  useEffect(() => {
    const newSchedule = {
      Monday: { morning: [], afternoon: [], night: [] },
      Tuesday: { morning: [], afternoon: [], night: [] },
      Wednesday: { morning: [], afternoon: [], night: [] },
      Thursday: { morning: [], afternoon: [], night: [] },
      Friday: { morning: [], afternoon: [], night: [] },
      Saturday: { morning: [], afternoon: [], night: [] },
    };

    scheduleData.forEach((data) => {
      const day = getDayName(data.thuhoc);
      const timeSlot = getTimeSlot(data.tgbatdau);

      const startDate = new Date(data.ngaykhaigiang);

      // Calculate duration in milliseconds
      let durationInMs;
      if (data.thoigianhoc === "36 buổi") {
        durationInMs = 3 * 30.44 * 24 * 60 * 60 * 1000; // Approx. 3 months
      } else if (data.thoigianhoc === "24 buổi") {
        durationInMs = 2 * 30.44 * 24 * 60 * 60 * 1000; // Approx. 2 months
      } else {
        durationInMs = 0; // Default to 0 if duration is unknown
      }

      // Calculate the end date
      const endDate = new Date(startDate.getTime() + durationInMs);

      if (role == "Admin") {
        newSchedule[day][timeSlot].push({
          room: data.tenphonghoc,
          className: data.tenlophoc,
          startTime: data.tgbatdau.slice(0, 5),
          endTime: data.tgketthuc.slice(0, 5),
          ngaykhaigiang: data.ngaykhaigiang,
          ketthuckhoahoc: endDate.toISOString(),
        });
      } else {
        newSchedule[day][timeSlot].push({
          room: data.tenphonghoc,
          className: data.tenlop,
          startTime: data.tgbatdau.slice(0, 5),
          endTime: data.tgketthuc.slice(0, 5),
          ngaykhaigiang: data.ngaykhaigiang,
          ketthuckhoahoc: endDate.toISOString(),
        });
      }
    });

    setSchedule(newSchedule);
  }, [scheduleData]);

  const converShift = (shift) => {
    if (shift === "morning") {
      return "Sáng";
    } else if (shift === "afternoon") {
      return "Chiều";
    } else {
      return "Tối";
    }
  };

  // Function to get Monday of the selected week
  const getMonday = (date) => {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(date.setDate(diff));
  };

  // Get current week's date based on Monday
  const getCurrentDate = (dayOffset) => {
    const monday = getMonday(selectedDate);
    const newDate = new Date(monday);
    newDate.setDate(monday.getDate() + dayOffset);
    return newDate.toLocaleDateString();
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={classes.container}>
      {role === "Học Viên" && <h1>Lịch học:</h1>}
      {role === "Giáo Viên" && <h1>Lịch dạy học:</h1>}
      {role === "Admin" && (
        <h1>Lịch học của toàn bộ các lớp trong trung tâm:</h1>
      )}
      <Calendar
        onChange={setSelectedDate} // Update selected date
        value={selectedDate}
        locale="vi-VN"
      />
      <h2>
        {selectedDate.toLocaleDateString("vi-VN", {
          weekday: "long",
          year: "numeric",
          month: "numeric",
          day: "numeric",
        })}
      </h2>
      <table>
        <thead>
          <tr id={classes.day}>
            <th>Ca học</th>
            <th>Thứ 2 ({getCurrentDate(0)})</th>
            <th>Thứ 3 ({getCurrentDate(1)})</th>
            <th>Thứ 4 ({getCurrentDate(2)})</th>
            <th>Thứ 5 ({getCurrentDate(3)})</th>
            <th>Thứ 6 ({getCurrentDate(4)})</th>
            <th>Thứ 7 ({getCurrentDate(5)})</th>
          </tr>
        </thead>
        <tbody>
          {["morning", "afternoon", "night"].map((shift) => (
            <tr key={shift}>
              <td id={classes.shift}>{converShift(shift)}</td>
              {[
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ].map((day, index) => {
                const currentDate = getCurrentDate(index); // Ensure this returns a Date object

                // Set currentDateTime to midnight
                const currentDateTime = new Date(currentDate);
                currentDateTime.setHours(0, 0, 0, 0); // Set to 00:00:00.000

                return (
                  <td key={index}>
                    {schedule[day][shift].map((data, idx) => {
                      const classStartDate = new Date(data.ngaykhaigiang);
                      const classEndDate = new Date(data.ketthuckhoahoc);

                      classStartDate.setHours(0, 0, 0, 0); // Set to 00:00:00.000
                      classEndDate.setHours(0, 0, 0, 0);

                      if (
                        classStartDate <= currentDateTime &&
                        currentDateTime <= classEndDate
                      ) {
                        return (
                          <p
                            key={idx}
                            style={{
                              backgroundColor: getClassColor(data.className),
                            }}
                          >
                            {`${data.className || "N/A"}`}
                            <span>
                              {data.startTime} - {data.endTime}
                            </span>
                            <span>Phòng học: {data.room}</span>
                          </p>
                        );
                      }
                      return null; // Return null if the condition is not met
                    })}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
