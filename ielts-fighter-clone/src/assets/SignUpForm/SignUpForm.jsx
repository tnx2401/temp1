import React, { useState, useEffect } from "react";
import classes from "./SignUpForm.module.scss";
import Flatpickr from "react-flatpickr";
import axios from "axios";

const SignUpForm = ({ courseName, discount, endDate }) => {
  const [submitData, setSubmitData] = useState({
    hoten: "",
    ngaysinh: null,
    gioitinh: "",
    sdt: "",
    tenkhoahoc: "",
    diachi: "",
    email: "",
    ngaygui: new Date().toISOString(),
    trangthai: "Chờ Xét Duyệt",
  });

  useEffect(() => {
    setSubmitData((prev) => ({ ...prev, tenkhoahoc: courseName }));
  }, [courseName]);

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    if (endDate) {
      setTimeLeft(calculateTimeLeft()); // Calculate time left once endDate is available
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);

      return () => clearInterval(timer); // Clean up the timer on component unmount
    }
  }, [endDate]); // Only run when endDate is availables

  function calculateTimeLeft() {
    if (!endDate) return {}; // Handle case where endDate is not provided

    const difference = new Date(endDate) - new Date();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }; // Countdown expired
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://determined-freedom-production.up.railway.app/api/v1/formnhaphoc",
        {
          hoten: submitData.hoten,
          ngaysinh: submitData.ngaysinh,
          tenkhoahoc: submitData.tenkhoahoc,
          gioitinh: submitData.gioitinh,
          sdt: submitData.sdt,
          diachi: submitData.diachi,
          email: submitData.email,
          ngaygui: submitData.ngaygui,
          trangthai: submitData.trangthai,
        }
      )
      .then(() => {
        alert("Đơn đăng ký học đã được nộp thành công");
        setSubmitData(null);
      })
      .catch((error) => {
        console.log("Error submitting form: ", error);
      });
  };

  console.log(endDate);

  return (
    <div className={classes.container}>
      <div className={classes.img_04}>
        <div className={classes.left}>
          <h1>
            Ưu đãi <span>{discount}%</span> khóa học
          </h1>
          <h2>Cơ hội chỉ còn</h2>
          <div className={classes.time}>
            {endDate && (
              <React.Fragment>
                {(() => {
                  return (
                    <>
                      <div className={classes.day}>
                        <h4>{timeLeft.days}</h4>
                        <h5>Ngày</h5>
                      </div>
                      <div className={classes.hour}>
                        <h4>{timeLeft.hours}</h4>
                        <h5>Giờ</h5>
                      </div>
                      <div className={classes.minute}>
                        <h4>{timeLeft.minutes}</h4>
                        <h5>Phút</h5>
                      </div>
                      <div className={classes.second}>
                        <h4>{timeLeft.seconds}</h4>
                        <h5>Giây</h5>
                      </div>
                    </>
                  );
                })()}
              </React.Fragment>
            )}
          </div>
          <div className={classes.shape}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 409.03 150.2"
              fill="rgba(50, 49, 49, 1.0)"
            >
              <polygon points="0 27.31 18 148.96 368.06 150.21 409.03 0 0 27.31"></polygon>
            </svg>
          </div>
          <div className={classes.img_05}></div>
        </div>
        <div className={classes.right}>
          <form className={classes.form} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Họ và tên"
              required
              className={classes.input}
              onChange={(e) => {
                setSubmitData((prev) => ({ ...prev, hoten: e.target.value }));
              }}
            />
            <select
              className={classes.input}
              required
              onChange={(e) =>
                setSubmitData((prev) => ({ ...prev, gioitinh: e.target.value }))
              }
            >
              <option value="">Chọn giới tính</option>
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
            </select>
            <input
              type="tel"
              required
              placeholder="Số điện thoại"
              className={classes.input}
              onChange={(e) => {
                setSubmitData((prev) => ({ ...prev, sdt: e.target.value }));
              }}
            />
            <Flatpickr
              options={{ mode: "single", dateFormat: "Y-m-d" }}
              required
              onChange={(date) => {
                setSubmitData((prev) => ({
                  ...prev,
                  ngaysinh: date[0].toISOString(),
                }));
              }}
              placeholder="Ngày sinh"
              className={classes.input}
            />
            <input
              type="text"
              placeholder="Địa chỉ"
              required
              className={classes.input}
              onChange={(e) => {
                setSubmitData((prev) => ({ ...prev, diachi: e.target.value }));
              }}
            />
            <input
              type="email"
              placeholder="Email"
              required
              className={classes.input}
              onChange={(e) => {
                setSubmitData((prev) => ({ ...prev, email: e.target.value }));
              }}
            />
            <button type="submit" className={classes.submit}>
              Đăng ký ngay
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
