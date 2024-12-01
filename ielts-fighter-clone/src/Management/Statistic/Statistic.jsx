import React, { useEffect, useState } from "react";
import classes from "./Statistic.module.scss";
import axios from "axios";
import { Bar, Bubble } from "react-chartjs-2";
import { Loader } from "../../assets/Loader/Loader";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Statistic = () => {
  const [courses, setCourses] = useState({
    ieltsmatgoc: {
      name: "Khóa IELTS mất gốc",
      class: [],
    },
    ieltscaptoc: {
      name: "Khóa IELTS cấp tốc",
      class: [],
    },
    ielts1kem1: {
      name: "Khóa IELTS 1 kèm 1",
      class: [],
    },
    ielts55: {
      name: "Khóa IELTS 5.0 - 5.5",
      class: [],
    },
    ielts65: {
      name: "Khóa IELTS 6.0 - 6.5",
      class: [],
    },
    ielts75: {
      name: "Khóa IELTS 7.0 - 7.5",
      class: [],
    },
  });
  const [classData, setClassData] = useState([]);
  const [income, setIncome] = useState([]);
  const [highScoreStudent, setHighScoreStudent] = useState([]);
  const [noOfStudent, setNoOfStudent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://determined-freedom-production.up.railway.app/api/v1/lophoc")
      .then((res) => {
        setClassData(res.data);
      });

    axios
      .get(
        "https://determined-freedom-production.up.railway.app/api/thongke/doanhthu"
      )
      .then((res) => {
        setIncome(res.data);
      });
    axios
      .get(
        "https://determined-freedom-production.up.railway.app/api/thongke/soluonghocvien"
      )
      .then((res) => {
        setNoOfStudent(res.data);
      });
  }, []);

  useEffect(() => {
    if (classData.length > 0) {
      const updatedCourses = { ...courses };
      classData.forEach((classItem) => {
        const key = Object.keys(courses).find((k) =>
          classItem.tenkhoahoc.includes(courses[k].name)
        );
        if (key) updatedCourses[key].class.push(classItem);
      });
      setCourses(updatedCourses);
    }
  }, [classData]);

  useEffect(() => {
    const highScores = []; // Temporary array to store high-scoring students

    // Create courseArray inside the effect to avoid dependency issues
    const courseArray = Object.values(courses);

    courseArray.forEach((course) => {
      course.class.forEach((item) => {
        item.hocvien.forEach((student) => {
          const averageScore =
            (student.diemkiemtra + student.diemdiemcuoiki) / 2;

          if (averageScore > 9) {
            highScores.push({
              name: student.hoten,
              diem: averageScore,
              course_name: course.name,
              class: item.tenlophoc,
            });
          }
        });
      });
    });

    setHighScoreStudent(highScores);
    setLoading(false);
  }, [courses]);

  const barData = {
    labels: income.map((item) => item.tenKhoaHoc), // X-axis labels
    datasets: [
      {
        label: "Revenue",
        data: income.map((item) => item.doanhThu), // Y-axis data
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ], // Colors for each bar
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ], // Border colors
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Position of the legend
      },
      title: {
        display: true,
        text: "Doanh thu theo khóa học", // Chart title
        font: {
          size: 24,
          weight: "bold",
        },
        padding: {
          top: 20,
          bottom: 20,
        },
      },
    },
  };

  const bubbleData = {
    labels: noOfStudent.map((item) => item.tenKhoaHoc), // X-axis labels (course names)
    datasets: [
      {
        label: "Số lượng học viên",
        data: noOfStudent.map((item) => ({
          x: item.tenKhoaHoc, // X-axis: Course name
          y: item.soLuongHocVien, // Y-axis: Number of students
          r: 10, // Fixed bubble radius (same for all bubbles)
        })),
        backgroundColor: noOfStudent.map(
          () =>
            `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
              Math.random() * 255
            }, 0.6)`
        ), // Random colors for each bubble
      },
    ],
  };

  // Chart options
  const bubbleOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top", // Position of the legend
      },
      title: {
        display: true,
        text: "Số lượng học viên theo khóa học", // Chart title
        font: { size: 24, weight: "bold" },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Khóa học", // X-axis title (course names)
          font: { size: 16, weight: "bold" },
        },
        type: "category", // Ensure course names are displayed as categories
      },
      y: {
        title: {
          display: true,
          text: "Số lượng học viên", // Y-axis title (number of students)
          font: { size: 16, weight: "bold" },
        },
        beginAtZero: true, // Start the Y-axis at 0
      },
    },
  };

  console.log("Number of students: ", noOfStudent);

  return (
    <div className={classes.container}>
      <div className={classes.left_section}>
        <div className={classes.mark_wrapper}>
          <h1>Các học viên đạt điểm số cao: </h1>
          <div>
            <table>
              <tbody>
                {highScoreStudent.map((student, index) => (
                  <>
                    <tr key={index}>
                      <td>{student.name}</td>
                      <td>{`${student.class} - ${student.course_name}`}</td>
                      <td>{student.diem}</td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className={classes.right_section}>
        <Bar data={barData} options={barOptions} />
        <div className={classes.no_of_student}>
          <Bubble data={bubbleData} options={bubbleOptions} />
        </div>
      </div>
    </div>
  );
};

export default Statistic;
