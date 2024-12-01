import React, { useState } from "react";
import classes from "./ClassDetail.module.scss";
import Cookies from "js-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ClassDetail = ({ detail, setIsClassDetail }) => {
  const [detailState, setDetailState] = useState(detail);
  const [isMarking, setIsMarking] = useState(false);
  const [changeMark, setChangeMark] = useState(null);
  const [dqt, setDqt] = useState(null);
  const [dck, setDck] = useState(null);

  const role = Cookies.get("role");

  const convertDate = (date) => {
    const newDate = new Date(date);

    // Extract day, month, and year
    const day = String(newDate.getDate()).padStart(2, "0"); // Ensures two digits
    const month = String(newDate.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = newDate.getFullYear();

    // Format in dd-mm-yyyy
    return `${day}-${month}-${year}`;
  };

  const handleUpdateMark = async () => {
    try {
      const response = await axios.put(
        `https://determined-freedom-production.up.railway.app/api/v1/nguoidung/suadiemhocvien/${changeMark.manguoidung}`,
        {
          diemkiemtra: dqt ?? changeMark.diemkiemtra,
          diemdiemcuoiki: dck ?? changeMark.diemdiemcuoiki,
        }
      );
      setDetailState((prev) => ({
        ...prev,
        hocvien: prev.hocvien.map((student) =>
          student.manguoidung === changeMark.manguoidung
            ? {
                ...student,
                diemkiemtra: dqt ?? student.diemkiemtra,
                diemdiemcuoiki: dck ?? student.diemdiemcuoiki,
              }
            : student
        ),
      }));
      toast.success("Cập nhật thành công");
      setChangeMark(null);
      setDqt(null);
      setDck(null);
      // Optionally update local data or fetch updated data
    } catch (error) {
      console.error("Error updating marks:", error);
      alert("Có lỗi xảy ra khi cập nhật điểm.");
    }
  };

  const handleFilter = (choice) => {
    if (choice === "asc") {
      setDetailState((prev) => ({
        ...prev,
        hocvien: prev.hocvien.sort((a, b) => {
          // Calculate the average marks for both students
          const avgA =
            (parseFloat(a.diemkiemtra) + parseFloat(a.diemdiemcuoiki)) / 2;
          const avgB =
            (parseFloat(b.diemkiemtra) + parseFloat(b.diemdiemcuoiki)) / 2;
          return avgA - avgB; // For ascending order
        }),
      }));
    } else if (choice === "des") {
      setDetailState((prev) => ({
        ...prev,
        hocvien: prev.hocvien.sort((a, b) => {
          const avgA =
            (parseFloat(a.diemkiemtra) + parseFloat(a.diemdiemcuoiki)) / 2;
          const avgB =
            (parseFloat(b.diemkiemtra) + parseFloat(b.diemdiemcuoiki)) / 2;
          return avgB - avgA; // For descending order
        }),
      }));
    }
  };

  return (
    <div className={classes.container}>
      {isMarking ? (
        <>
          {changeMark && (
            <div
              className={classes.overlay}
              onClick={() => {
                setChangeMark(null);
                setDck(null);
                setDqt(null);
              }}
            >
              <div
                className={classes.wrapper}
                onClick={(e) => e.stopPropagation()}
              >
                <div className={classes.header}>
                  <h1>Học viên: {changeMark.hoten}</h1>
                </div>
                <div className={classes.mark}>
                  <label htmlFor="dqt">Điểm quá trình</label>
                  <input
                    type="number"
                    step="0.1"
                    value={dqt ?? changeMark?.diemkiemtra ?? ""}
                    name="dqt"
                    max="10"
                    min="0"
                    onChange={(e) => setDqt(e.target.value)}
                  />
                  <label htmlFor="dqt">Điểm cuối kì</label>
                  <input
                    type="number"
                    step="0.1"
                    value={dck ?? changeMark?.diemdiemcuoiki ?? ""}
                    name="dqt"
                    max="10"
                    min="0"
                    onChange={(e) => setDck(e.target.value)}
                  />
                </div>
                <div className={classes.function}>
                  <button onClick={handleUpdateMark}>Lưu</button>
                </div>
              </div>
            </div>
          )}
          <div className={classes.header}>
            <h1>Bảng điểm của lớp</h1>
            <ToastContainer />
            <button onClick={() => setIsMarking(false)}>Quay lại</button>
          </div>
          <div className={classes.filter}>
            <h1>Sắp xếp: </h1>
            <button id={classes.asc} onClick={() => handleFilter("asc")}>
              Tăng dần
            </button>
            <button id={classes.des} onClick={() => handleFilter("des")}>
              Giảm dần
            </button>
          </div>
          <table id={classes.bangdiem}>
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên</th>
                <th>Điểm quá trình</th>
                <th>Điểm cuối kì</th>
                <th>Điểm tổng kết</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {detailState.hocvien.map((hv, index) => (
                <tr
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setChangeMark(hv);
                  }}
                >
                  <td>{index + 1}</td>
                  <td>{hv.hoten}</td>
                  <td>{hv.diemkiemtra ? hv.diemkiemtra : "Chưa có điểm"}</td>
                  <td>
                    {hv.diemdiemcuoiki ? hv.diemdiemcuoiki : "Chưa có điểm"}
                  </td>
                  <td>
                    {hv.diemkiemtra && hv.diemdiemcuoiki
                      ? (parseFloat(hv.diemkiemtra) +
                          parseFloat(hv.diemdiemcuoiki)) /
                        2
                      : "Chưa có điểm"}
                  </td>
                  <td>
                    {hv.diemkiemtra && hv.diemdiemcuoiki
                      ? (parseFloat(hv.diemkiemtra) +
                          parseFloat(hv.diemdiemcuoiki)) /
                          2 >
                        4
                        ? "Đạt"
                        : "Chưa đạt"
                      : "Đang học"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <>
          <div className={classes.header}>
            <h1>{detailState.tenlophoc}</h1>
            <button onClick={() => setIsClassDetail(null)}>Quay lại</button>
          </div>

          <h2>
            <span>Khóa</span> {detailState.tenkhoahoc}
          </h2>
          <h2>
            <span>Phòng học: </span> {detailState.tenphonghoc}
          </h2>
          <h2>
            <span>Ca: </span> {detailState.cahoc}
          </h2>
          <h2>
            <span>Số buổi: </span> {detailState.thoigianhoc}
          </h2>
          <h2>
            <span>Ngày khai giảng: </span>{" "}
            {convertDate(detailState.ngaykhaigiang)}
          </h2>

          <h2>
            <span>Giáo viên</span>:{" "}
            {`${detailState.giangVien[0].hoten} / ${detailState.giangVien[0].sdt} / ${detailState.giangVien[0].email}`}
          </h2>

          {role !== "Học Viên" && (
            <>
              <button
                id={classes.xemdiem_btn}
                onClick={() => setIsMarking(true)}
              >
                Xem điểm
              </button>
              <table>
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Họ và tên</th>
                    <th>Giới tính</th>
                    <th>Email</th>
                    <th>Số điện thoại</th>
                    <th>Địa chỉ</th>
                  </tr>
                </thead>
                <tbody>
                  {detailState.hocvien.map((hv, index) => (
                    <tr
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <td>{index + 1}</td>
                      <td>{hv.hoten}</td>
                      <td>{hv.gioitinh}</td>
                      <td>{hv.email}</td>
                      <td>{hv.sdt}</td>
                      <td>{hv.diachi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </>
      )}
    </div>
  );
};
