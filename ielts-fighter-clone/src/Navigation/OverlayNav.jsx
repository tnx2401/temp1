import classes from "./OverlayNav.module.scss";
import { Link } from "react-router-dom";

export default function OverlayNav({ setIsOpenNavTab }) {
  const introductions = [
    {
      name: "Về Ielts Fighter",
      link: "/about",
    },
    {
      name: "Đội ngũ giảng viên",
      link: "/staff",
    },
    {
      name: "Phương pháp đào tạo",
      link: "/teaching-method",
    },
  ];
  const courses = [
    {
      name: "Khóa IELTS mất gốc",
      link: "/mat-goc",
    },
    {
      name: "Khóa IELTS cấp tốc",
      link: "/cap-toc",
    },
    {
      name: "Khóa IELTS 1 kèm 1",
      link: "/one-on-one",
    },
    {
      name: "Khóa IELTS 7.0+",
      link: "/aim-7-5",
    },
    {
      name: "Khóa IELTS 6.0-6.5",
      link: "/aim-6-5",
    },
    {
      name: "Khóa IELTS 5.0-5.5",
      link: "/aim-5-5",
    },
  ];
  const students = [
    {
      name: "Học viên điểm cao",
      link: "/high-grade-students",
    },
    {
      name: "Feedback của học viên",
      link: "/feedback",
    },
  ];
  const information = [
    {
      name: "Hệ thống cơ sở",
      link: "/",
    },
    {
      name: "Thi IELTS Free",
      link: "/",
    },
    {
      name: "Đăng nhập",
      link: "/login",
    },
  ];

  return (
    <div
      className={classes.container}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className={classes.context}>
        <div className={classes.vertical_line}></div>
        <h1>Giới thiệu</h1>
        <ul>
          {introductions.map((introduction, idx) => (
            <li
              onClick={() => {
                setIsOpenNavTab(false);
              }}
              key={idx}
            >
              <Link to={`${introduction.link}`}>{introduction.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.context}>
        <h1>Khóa học</h1>
        <ul>
          {courses.map((course, idx) => (
            <li
              onClick={() => {
                setIsOpenNavTab(false);
              }}
              key={idx}
            >
              <Link to={`${course.link}`}>{course.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.context}>
        <h1>Học viên</h1>
        <ul>
          {students.map((student, idx) => (
            <li
              onClick={() => {
                setIsOpenNavTab(false);
              }}
              key={idx}
            >
              <Link to={`${student.link}`}>{student.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.context}>
        <h1>Thông tin</h1>
        <ul>
          {information.map((info, idx) => (
            <li
              onClick={() => {
                setIsOpenNavTab(false);
              }}
              key={idx}
            >
              <Link to={`${info.link}`}>{info.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
