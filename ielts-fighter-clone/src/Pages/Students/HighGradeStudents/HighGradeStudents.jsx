import React, { useState } from "react";
import classes from "./HighGradeStudents.module.scss";
import { studentCards } from "./data.js";
import { useOutletContext } from "react-router-dom";
import Courses from "../../../assets/Course/Course.jsx";

const HighGradeStudents = () => {
  const { courseRef } = useOutletContext();
  const [isOpenStudentCard, setIsOpenStudentCard] = useState(false);
  const [currentStudentInfo, setCurrentStudentInfo] = useState();

  const handleStudentCard = () => {
    setIsOpenStudentCard((state) => !state);
  };

  const handleCurrentStudent = (
    img,
    certificationImg,
    title,
    content1,
    content2
  ) => {
    const info = { img, certificationImg, title, content1, content2 };
    setCurrentStudentInfo(info);
  };

  const formartedParagraph = (paragraph) => {
    return paragraph
      .split("\n")
      .map((line, index) => <p key={index}>{line}</p>);
  };

  return (
    <div className={classes.container}>
      {isOpenStudentCard && (
        <div className={classes.overlay} onClick={handleStudentCard}>
          <div
            className={classes.overlay_content}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <h1>{currentStudentInfo.title}</h1>
            <p>{currentStudentInfo.content1}</p>
            <div className={classes.image}>
              <img src={currentStudentInfo.img} alt="" />
              <img src={currentStudentInfo.certificationImg} alt="" />
            </div>
            <p>{formartedParagraph(currentStudentInfo.content2)}</p>
          </div>
        </div>
      )}
      <div className={classes.hero_img}></div>

      <div className={classes.content}>
        <div className={classes.logo}></div>
        <div className={classes.paragraph_00}>
          <h1>99% HỌC VIÊN ĐẠT KẾT QUẢ ĐẦU RA CHO KỲ VỌNG</h1>
        </div>

        <div className={classes.paragraph_01}>
          <h2>
            IELTS không chỉ là một chứng chỉ, mà là bước khởi đầu của một hành
            trình dài.
          </h2>
        </div>

        <div className={classes.img_00}></div>

        <div className={classes.quote_block}>
          <p className={classes.paragraph_02}>
            Mỗi học viên cầm trên tay tấm bằng IELTS đều là một đại sứ mang theo
            niềm tự hào và niềm tin cháy bỏng của IELTS Fighter, đồng thời cũng
            là động lực lớn lao để đội ngũ IELTS Fighter không ngừng tiến bước.
            Cảm ơn các bạn đã lựa chọn IELTS Fighter là người đồng hành trên
            hành trình chinh phục IELTS.
          </p>
        </div>

        <div className={classes.certification_display}>
          <div className={classes.img_01}></div>
          <div className={classes.img_02}></div>
          <div className={classes.img_03}></div>
        </div>

        <div className={classes.gap_fill}></div>

        <div className={classes.context_00}>
          {studentCards.map((card) => (
            <div
              key={card.title}
              className={classes.card}
              onClick={() => {
                handleStudentCard();
                handleCurrentStudent(
                  card.img,
                  card.certificationImg,
                  card.title,
                  card.content1,
                  card.content2
                );
              }}
            >
              <div
                className={classes.img_04}
                style={{ backgroundImage: `url(${card.img})` }}
              ></div>
              <h1>{card.title}</h1>
            </div>
          ))}
        </div>

        <div ref={courseRef}>
          <Courses />
        </div>
      </div>
    </div>
  );
};

export default HighGradeStudents;
