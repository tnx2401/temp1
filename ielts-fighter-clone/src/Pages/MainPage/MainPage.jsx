import React, { lazy, Suspense, useEffect, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import classes from "./MainPage.module.scss";
import ImageGroup from "../../assets/ImageGroup/ImageGroup";
import useVisibleSections from "../../assets/useVisibleSections";
import FacebookSocialPlugin from "../../assets/FacebookSocialPlugin/FacebookSocialPlugin";

const Course = lazy(() => import("../../assets/Course/Course.jsx"));
const Card = lazy(() => import("./Card"));

export default function MainPage() {
  const { courseRef } = useOutletContext();

  const { visibleSections, sectionRefs } = useVisibleSections([
    "videoSection",
    "context00",
    "context01",
    "context02",
    "context03",
    "context04",
  ]);

  const videoLinks = [
    "https://www.youtube.com/embed/appy_Hcs7lQ?si=xgnPw9rduUd8EnTW",
    "https://www.youtube.com/embed/z9XpXhy4W6o?si=KWu097QhzdoNfwo3",
    "https://www.youtube.com/embed/CaRIKBYU3lM?si=hNm5lgP9Hot22d7J",
    "https://www.youtube.com/embed/TP3rnNDX9nw?si=SwONMv0J-2OfD9A_",
  ];

  const cardInfo = [
    {
      name: "Đội ngũ giáo viên",
      description:
        'Đội ngũ giáo viên "xịn xò" 8.0+ với hơn 5 năm kinh nghiệm giảng dạy và đầy nhiệt huyết',
      imageLink:
        "https://w.ladicdn.com/5b57f38472976020da8e5611/242-20220224105742.jpg",
    },
    {
      name: "Nhiều hoạt động thú vị",
      description:
        'Luyện tập qua brainstorming, teamwork, outdoor ... giúp nhanh chóng "ngấm kiến thức" ',
      imageLink:
        "https://w.ladicdn.com/5b57f38472976020da8e5611/dn-1-20220227102608.png",
    },
    {
      name: "Online/Offline",
      description:
        "Linh hoạt chuyển đổi giữa việc học offline trực tiếp tại trung tâm và học online tại nhà",
      imageLink:
        "https://st.ebomb.edu.vn/src/ielts-fighter/2020/04/15/workshop-truc-tuyen-ielts-fighter-3.jpg",
    },
    {
      name: "Cam kết đầu ra",
      description:
        "Nếu sau khóa học bạn vẫn không đạt được target thì sẽ được học lại 100% miễn phí",
      imageLink:
        "https://w.ladicdn.com/5b57f38472976020da8e5611/30b11c5b-c8a3-4632-a481-4ce53f873209-20221017082126-mfwro.jpg",
    },
    {
      name: "89k/h",
      description:
        "Học phí rẻ nhất hệ mặt trời chỉ từ 89k/h là đã có thể học IELTS chất lượng cao",
      imageLink:
        "https://w.ladicdn.com/5b57f38472976020da8e5611/hoc-ielts-o-dau-quan-8-trung-tam-luyen-thi-ielts-fighter-quan-8-4-20220310072423.jpg",
    },
  ];

  return (
    <div className={classes.main_page}>
      <div className={classes.hero_img}></div>
      <div className={classes.container}>
        <div className={classes.headline_group_00}>
          <div className={classes.headline_01}>
            <h3>Trung tâm anh ngữ</h3>
          </div>
          <div className={classes.headline_02}>
            <h3>IELTS Fighter</h3>
          </div>
        </div>

        <div className={classes.headline_group_01}>
          <div className={classes.headline_03}>
            <h3>Luyện thi</h3>
          </div>
          <div className={classes.headline_04}>
            <h3>IELTS Hà Nội</h3>
          </div>
        </div>

        <div className={classes.headline_group_02}></div>
        <div className={classes.responsive_gap_fill}></div>
        <div
          className={`${classes.video_section} ${
            visibleSections.videoSection ? classes.visible : ""
          }`}
          ref={sectionRefs.videoSection}
          id="videoSection"
        >
          {videoLinks.map((link, idx) => (
            <div className={classes.video_background} key={idx}>
              <iframe
                src={link}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>

        <div className={classes.gap_fill}></div>

        <div
          className={`${classes.context_00} ${
            visibleSections.context00 ? classes.visible : ""
          }`}
          ref={sectionRefs.context00}
          id="context00"
        >
          <div className={classes.paragraph_00}>
            <h3>Tại sao nên học ielts tại</h3>
          </div>
          <div className={classes.paragraph_01}>
            <h4> ielts fighter ?</h4>
          </div>
          <div className={classes.line}></div>
          <div className={classes.paragraph_02}>
            <p>
              Bạn đang muốn tìm một nơi học IELTS chất lượng, không nhàm chán
              với giá cả phải chăng?
            </p>
          </div>
          <div className={classes.paragraph_03}>
            <h5>Các khóa học IELTS tại IELTS Fighter sẽ giúp bạn điều đó</h5>
          </div>

          <div className={classes.cards}>
            {cardInfo.map((card, idx) => (
              <Suspense key={idx} fallback={<div>Loading...</div>}>
                <Card
                  name={card.name}
                  description={card.description}
                  imageLink={card.imageLink}
                />
              </Suspense>
            ))}
          </div>
        </div>

        <div
          className={`${classes.context_01} ${
            visibleSections.context01 ? classes.visible : ""
          }`}
          ref={sectionRefs.context01}
          id="context01"
        >
          <div className={classes.img_container}></div>
          <div className={classes.text_container}>
            <div className={classes.paragraph_04}>
              <h3>Lộ trình học tinh gọn</h3>
            </div>
            <div className={classes.paragraph_05}>
              <h4>Từ 0 - 7.0+</h4>
            </div>
            <div className={classes.line}></div>
            <div className={classes.paragraph_06}>
              <p>
                Giáo trình biên soạn độc quyền, nội dung bám sát các dạng đề thi
                IELTS
              </p>
            </div>
          </div>
        </div>

        <div
          className={`${classes.context_02} ${
            visibleSections.context02 ? classes.visible : ""
          }`}
          ref={sectionRefs.context02}
          id="context02"
        >
          <img
            src="https://w.ladicdn.com/s1300x950/5b57f38472976020da8e5611/banggia2-20240520081955-sxjs8.png"
            alt=""
          />
          <div className={classes.paragraph_07}>
            <p>Bật mí nè...</p>
            <p>
              Đây chính là Lộ trình mà IELTS Fighter đã áp dụng để giúp hàng
              nghìn bạn học viên xuất sắc vượt vũ môn thành công trong suốt 7
              năm qua.
            </p>
          </div>

          <ImageGroup />
        </div>

        <div
          className={`${classes.context_03} ${
            visibleSections.context03 ? classes.visible : ""
          }`}
          ref={sectionRefs.context03}
          id="context03"
        >
          <Suspense fallback={<div>Loading...</div>}>
            <div ref={courseRef}>
              <Course />
            </div>
          </Suspense>
        </div>

        <div
          className={`${classes.context_04} ${
            visibleSections.context04 ? classes.visible : ""
          }`}
          ref={sectionRefs.context04}
          id="context04"
        >
          <FacebookSocialPlugin />
        </div>
      </div>

      <div className={classes.context_05}>
        <span>Hẹn gặp bạn tại lớp học ✌️</span>
      </div>
    </div>
  );
}
