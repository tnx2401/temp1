import React from "react";
import classes from "./Course.module.scss";
import { Link } from "react-router-dom";

export default function Course() {
  const courses = [
    {
      name: "course1",
      title: "Khóa IELTS mất gốc",
      description: 'Học từ con số "0" lộ trình tinh gọn',
      image:
        "https://w.ladicdn.com/s600x500/5b57f38472976020da8e5611/mat-goc-3-20211223081418.jpg",
      signUpLink: "/mat-goc",
    },
    {
      name: "course2",
      title: "Khóa IELTS 1-1",
      description: "Giảng viên 8.0+ IELTS kèm cặp riêng",
      image:
        "https://w.ladicdn.com/s550x550/5b57f38472976020da8e5611/lan-phuong-lop-hoc-5-20201005153705.jpg",
      signUpLink: "/one-on-one",
    },
    {
      name: "course3",
      title: "Khóa IELTS cấp tốc",
      description: "Đột phá 1 band trong 1-2 tháng",
      image:
        "https://w.ladicdn.com/s550x500/5b57f38472976020da8e5611/manh-tuong-ielts-fighter-20201127075355.jpg",
      signUpLink: "/cap-toc",
    },
    {
      name: "course4",
      title: "Khóa IELTS 7.0+",
      description: "Nghe nói đọc viết trên 6.5",
      image:
        "https://w.ladicdn.com/s700x600/5b57f38472976020da8e5611/hoc-ielts-o-dau-quan-8-trung-tam-luyen-thi-ielts-fighter-quan-8-4-20230515080230-hltkd.jpg",
      signUpLink: "/aim-7-5",
    },
    {
      name: "course5",
      title: "Khóa IELTS 6.0-6.5",
      description: "Không kỹ năng nào dưới 6.0",
      image:
        "https://w.ladicdn.com/s700x600/5b57f38472976020da8e5611/65-nen70-20211223084706.jpg",
      signUpLink: "aim-6-5",
    },
    {
      name: "course6",
      title: "Khóa IELTS 5.0-5.5",
      description: "Toàn diện 4 kỹ năng trên 5.0",
      image:
        "https://w.ladicdn.com/s650x600/5b57f38472976020da8e5611/lop-hoc-ielts-25-20201005153013.jpg",
      signUpLink: "aim-5-5",
    },
  ];

  return (
    <div className={classes.container}>
      <h1>Các khóa học của IELTS Fighter</h1>
      <div className={classes.card_container}>
        {courses.map((course) => (
          <div className={classes.course} key={course.name}>
            <div style={{ backgroundImage: `url(${course.image})` }}></div>
            <h2>{course.title}</h2>
            <h5>{course.description}</h5>
            <Link to={course.signUpLink}>Đăng ký ngay</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
