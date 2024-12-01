import React, { useState } from "react";
import classes from "./Consultancy.module.scss";
import axios from "axios";

const Consultancy = ({ setIsOpenConsultancy }) => {
  const [hoten, setHoten] = useState("");
  const [sdt, setSdt] = useState("");
  const [nghenghiep, setNghenghiep] = useState("");
  const [cauhoituvan, setCauhoituvan] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://determined-freedom-production.up.railway.app/api/v1/tuvan",
        {
          hoten,
          sdt,
          nghenghiep,
          cauhoituvan,
          ngaygui: new Date().toISOString(),
          trangthai: "Chờ tư vấn",
        }
      )
      .then((res) => {
        console.log(res);
        setHoten("");
        setSdt("");
        setNghenghiep("");
        setCauhoituvan("");
        setIsOpenConsultancy(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={classes.container}>
      <div className={classes.content} onClick={(e) => e.stopPropagation()}>
        <h1>Đăng ký tư vấn</h1>
        <p>
          Giải đáp mọi thắc mắt về lộ trình, khóa học, học phí, thời gian học,
          lịch học...
        </p>

        <form>
          <input
            type="text"
            placeholder="Họ và tên"
            required
            onChange={(e) => setHoten(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Số điện thoại"
            required
            onChange={(e) => setSdt(e.target.value)}
          />
          <select
            required
            value={nghenghiep}
            onChange={(e) => setNghenghiep(e.target.value)}
          >
            <option value="" disabled>
              Nghề nghiệp
            </option>
            <option value="Học sinh">Học sinh</option>
            <option value="Sinh viên đại học">Sinh viên đại học</option>
            <option value="Người đi làm">Nhân viên văn phòng</option>
            <option value="Khác">Khác</option>
          </select>
          <textarea
            rows="4"
            placeholder="Câu hỏi của bạn"
            required
            onChange={(e) => setCauhoituvan(e.target.value)}
          ></textarea>
          <button type="submit" onClick={handleSubmit}>
            Tư vấn cho tôi
          </button>
        </form>
      </div>
    </div>
  );
};

export default Consultancy;
