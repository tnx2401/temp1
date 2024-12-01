import React from "react";
import classes from "./Aim65.module.scss";
import SignUpForm from "../../../assets/SignUpForm/SignUpForm";
import Course from "../../../assets/Course/Course";
import useVisibleSections from "../../../assets/useVisibleSections";
import { useOutletContext } from "react-router-dom";
import FacebookSocialPlugin from "../../../assets/FacebookSocialPlugin/FacebookSocialPlugin";
import { useState, useEffect } from "react";
import axios from "axios";

const Aim65 = () => {
  const { courseRef, setIsOpenConsultancy } = useOutletContext();
  const [course, setCourse] = useState(null);
  const { visibleSections, sectionRefs } = useVisibleSections([
    "context00",
    "context01",
    "context02",
    "context03",
    "context04",
    "context05",
    "context06",
    "context07",
  ]);

  useEffect(() => {
    axios
      .get(
        "https://determined-freedom-production.up.railway.app/api/v1/khoahoc/5"
      )
      .then((res) => {
        setCourse(res.data);
      });
  }, []);

  const ifYouAre = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 404 512"
          version="1.0"
          fit=""
          height="100%"
          width="100%"
          preserveAspectRatio="xMidYMid meet"
          style={{
            pointerEvents: "none",
            display: "inline-block",
          }}
          fill="rgba(255, 165, 0, 1.0)"
        >
          <path d="M385 192l-55-52-9 9c35 32 57 79 57 130 0 44-16 83-43 114l37 45-13 10-35-43c-32 30-75 49-122 49s-90-19-122-49l-35 43-12-10 36-45c-27-31-43-70-43-114 0-51 22-98 57-130l-9-9-54 52C8 178 0 160 0 140c0-44 35-80 80-82h5c20 0 39 7 54 18l-54 53 11 10c26-19 56-32 90-35 0-8 8-16 16-16s15 8 15 16c34 3 65 16 91 35l11-11-54-52c15-11 34-18 54-18h5c45 2 80 38 80 82 0 20-7 38-19 52zM218 304V160h-16v128h-96v16h112z"></path>
        </svg>
      ),
      title: "Muốn đạt IELTS 6.5 nhưng...",
      content: "Không ngữ pháp - Không từ vựng\nKhông nghe - Không nói được",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="rgba(255, 165, 0, 1.0)"
        >
          {" "}
          <path d="M14.19,14.19L6,18L9.81,9.81L18,6M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,10.9A1.1,1.1 0 0,0 10.9,12A1.1,1.1 0 0,0 12,13.1A1.1,1.1 0 0,0 13.1,12A1.1,1.1 0 0,0 12,10.9Z"></path>{" "}
        </svg>
      ),
      title: "Không biết bắt đầu từ đâu",
      content:
        "Hoang mang không biết mất gốc học như thế nào? bắt đầu từ đâu...",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="rgba(255, 165, 0, 1.0)"
        >
          {" "}
          <path d="M12,2C15.31,2 18,4.66 18,7.95C18,12.41 12,19 12,19C12,19 6,12.41 6,7.95C6,4.66 8.69,2 12,2M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M20,19C20,21.21 16.42,23 12,23C7.58,23 4,21.21 4,19C4,17.71 5.22,16.56 7.11,15.83L7.75,16.74C6.67,17.19 6,17.81 6,18.5C6,19.88 8.69,21 12,21C15.31,21 18,19.88 18,18.5C18,17.81 17.33,17.19 16.25,16.74L16.89,15.83C18.78,16.56 20,17.71 20,19Z"></path>{" "}
        </svg>
      ),
      title: "Học mãi không lên",
      content:
        "Không phương pháp, định hướng phù hợp, khiến bạn đã đi học rất nhiều nơi mà vẫn dậm chân tại chỗ",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="rgba(255, 165, 0, 1.0)"
        >
          {" "}
          <path d="M13,13C11,13 7,14 7,16V18H19V16C19,14 15,13 13,13M19.62,13.16C20.45,13.88 21,14.82 21,16V18H24V16C24,14.46 21.63,13.5 19.62,13.16M13,11A3,3 0 0,0 16,8A3,3 0 0,0 13,5A3,3 0 0,0 10,8A3,3 0 0,0 13,11M18,11A3,3 0 0,0 21,8A3,3 0 0,0 18,5C17.68,5 17.37,5.05 17.08,5.14C17.65,5.95 18,6.94 18,8C18,9.06 17.65,10.04 17.08,10.85C17.37,10.95 17.68,11 18,11M8,10H5V7H3V10H0V12H3V15H5V12H8V10Z"></path>{" "}
        </svg>
      ),
      title: "Không có lộ trình",
      content:
        "Chưa tìm được lộ trình học phù hợp, lo lắng học phí và ti tỉ điều khác khi học, sợ không được hỗ trợ đầy đủ?",
    },
  ];

  const card = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="rgba(0,0,0,1)"
        >
          {" "}
          <path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z"></path>{" "}
        </svg>
      ),
      title: "Lộ trình học tinh gọn",
      content:
        "Lộ trình IELTS tinh gọn, tiết kiệm 60 % thời gian học theo hướng đi thông thường",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="rgba(0,0,0,1)"
        >
          {" "}
          <path d="M5,16L3,5L8.5,12L12,5L15.5,12L21,5L19,16H5M19,19A1,1 0 0,1 18,20H6A1,1 0 0,1 5,19V18H19V19Z"></path>{" "}
        </svg>
      ),
      title: "Phương pháp học khác biệt",
      content:
        "Phương pháp chỉ có tại IELTS Fighter : Truyền động lực, giúp bạn chinh phục IELTS dễ dàng.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="rgba(0,0,0,1)"
        >
          {" "}
          <path d="M12,8A3,3 0 0,0 15,5A3,3 0 0,0 12,2A3,3 0 0,0 9,5A3,3 0 0,0 12,8M12,11.54C9.64,9.35 6.5,8 3,8V19C6.5,19 9.64,20.35 12,22.54C14.36,20.35 17.5,19 21,19V8C17.5,8 14.36,9.35 12,11.54Z"></path>{" "}
        </svg>
      ),
      title: "Bổ trợ hàng tuần 4 kỹ năng",
      content:
        "Gia tăng gấp 5 – 10 lần thời gian luyện IELTS so với các chương trình khác",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 1128.1586 1896.0833"
          fill="rgba(0,0,0,1)"
        >
          {" "}
          <path d="M978 1185q0 153-99.5 263.5T620 1585v175q0 14-9 23t-23 9H453q-13 0-22.5-9.5T421 1760v-175q-66-9-127.5-31T192 1509.5t-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25T349 948.5t-62.5-31T230 882t-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134V32q0-13 9.5-22.5T453 0h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5T881 302t39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26T537 430q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5T965 1091t13 94z"></path>{" "}
        </svg>
      ),
      title: "Học phí rẻ nhất hiện nay",
      content: "Mức học phí rẻ nhất hệ mặt trời chỉ 89K/h",
    },
  ];

  const list = [
    "CAM KẾT ĐẦU RA 5.5 IELTS CHỈ SAU 8-9 THÁNG",
    "Nắm chắc toàn bộ hệ thống ngữ pháp, từ vựng, Idioms & Collocations phổ biến nhất trong IELTS",
    "Hoàn thiện 4 kỹ năng Nghe - Nói - Đọc - Viết theo format chuẩn IELTS, không kỹ năng nào dưới 5.0",
  ];

  const card_1 = [
    {
      number: "01",
      title: "Đội ngũ giáo viên giỏi\ngiàu kinh nghiệm",
      content:
        "Đội ngũ 300 giáo viên IELTS chất lượng cao. Các chiến binh IELTS của trung tâm là thạc sỹ nước ngoài, du học sinh Mỹ, giảng viên/học viên các trường chuyên Anh (ĐH Hà Nội, ĐH Ngoại Ngữ…) tốt nghiệp loại giỏi... \n\nĐây là lời cam kết chất lượng tuyệt vời của IELTS Fighter.",
      imgURL:
        "https://w.ladicdn.com/s800x800/5b57f38472976020da8e5611/giaovien-20211101090823.jpg",
      hasList: false,
    },
    {
      number: "02",
      title: "Hệ thống cơ sở lớn nhất trải dài từ Bắc vào Nam",
      content:
        "Được thành lập từ tháng 5/2016. Đến nay, IELTS Fighter đã có trên 60 cơ sở tại Hà Nội, Hồ Chí Minh, Đà Nẵng, Hải Phòng, Nghệ An, Bình Dương, Đồng Nai, Bắc Ninh... với hơn 200.000 học viên được đào tạo mỗi năm và con số ngày càng tăng lên.\n\nIELTS Fighter tự hào là địa chỉ đào tạo IELTS số 1 Việt Nam.",
      imgURL:
        "https://w.ladicdn.com/s850x800/5b57f38472976020da8e5611/he-thong-co-so-ielts-fighter-3-20211023150413.jpg",
      hasList: false,
    },
    {
      number: "03",
      title: "Đào tạo nhiều học viên đạt 7.0+ IELTS nhất",
      content:
        "Với chất lượng đào tạo được cam kết, IELTS Fighter tự hào là đơn vị có nhiều học viên đạt trên 7.0 IELTS nhất. Mỗi năm IELTS Fighter đào tạo tới hơn 200.000 học viên từ học sinh, sinh viên đến người đi làm, nhiều bạn đã đạt con số đáng mơ ước như:",
      list: [
        "Nguyễn Thủy Tiên - 8.5 IELTS - HS lớp 11",
        "Nguyễn Nhật Minh - 8.0 IELTS - Sv năm nhất",
        "Phạm Tài Trí - 8.0 IELTS - 30 tuổi, du học NewZealand",
      ],
      hasList: true,
      imgURL:
        "https://w.ladicdn.com/s800x800/5b57f38472976020da8e5611/200-hoc-vien-20211028112328.png",
    },
    {
      number: "04",
      title:
        "Đối tác chính thức của IDP, CIEC, VnExpress, ĐH Thương Mại, ĐH Ngoại Thương, Viettel, Panasonic...",
      hasList: true,
      list: [
        "Từ năm 2017, IELTS FIghter đã trở thành ĐỐI TÁC CHÍNH THỨC của IDP - đơn vị sáng lập và tổ chức kỳ thi IELTS trên toàn thế giới.",
        "Năm 2018, IELTS Fighter chính thức trở thành đơn vị độc quyền của CIEC - đơn vị trực thuộc Bộ Giáo dục, có chuyên môn trong lĩnh vực tư vấn du học, tư vấn giáo dục quốc tế và đào tạo nước ngoài.",
        "IELTS Fighter còn là đối tác ĐỘC QUYỀN chia sẻ về việc học IELTS trên báo VnExpress.",
        "IELTS Fighter còn là đối tác chiến lược của Viettel, Panasonic, ĐH Ngoại Thương, ĐH Thương Mại...cùng đào tạo cho sinh viên, cán bộ, công nhân viên...",
      ],
      imgURL:
        "https://w.ladicdn.com/s800x800/5b57f38472976020da8e5611/doi-tac-1562231715.jpg",
    },
    {
      number: "05",
      title: "Website học IELTS lớn nhất Việt Nam",
      content:
        "Website ielts-fighter.com với hệ thống bài giảng IELTS đầy đủ và toàn diện nhất hiện nay. Đạt 1.000.000 lượt truy cập mỗi tháng.\n\nKênh Youtube hàng trăm video bài giảng + Group Hỗ trợ học tập 24/24, luôn sẵn sàng cùng bạn chinh phục IELTS.",
      hasList: false,
      imgURL:
        "https://w.ladicdn.com/s800x650/5b57f38472976020da8e5611/w2-20191002114521.png",
    },
  ];

  const roadmap = [
    {
      id: 1,
      name: "Lấy đà",
      title: "3.0 - 3.5 IELTS",
      text: "Làm quen bài thi IELTS, xây dựng nền tảng IELTS vững chắc, lấy đà để bứt phá",
    },
    {
      id: 2,
      name: "Tăng tốc",
      title: "4.0 - 4.5 IELTS",
      text: "Nắm chắc ngữ pháp, từ vựng cơ bản và bắt đầu chinh phục 4 kỹ năng",
    },
    {
      id: 3,
      name: "Bứt phá",
      title: "5.0 - 5.5 IELTS",
      text: "Làm quen các dạng bài Listening, Reading, Writing, và luyện phát âm, biết cách triển khai bài Speaking",
    },
    {
      id: 4,
      name: "Về đích",
      title: "6.0 - 7.0+ IELTS",
      text: 'Luyện đề chuyển sâu, chữa đề chi tiết, để tự tin "xông pha" đề thi thực tế',
    },
  ];

  return (
    <div className={classes.container}>
      <div className={classes.hero_img}></div>
      <div className={classes.content}>
        <div className={classes.img_00}></div>
        <div className={classes.paragraph_00}>
          <h3>
            KHÓA HỌC MỤC TIÊU <br /> 6.0-6.5 IELTS
            <br />
            CAM KẾT ĐẦU RA
          </h3>
        </div>
        <div className={classes.paragraph_01}>
          <h3>
            Lộ trình học TINH GỌN, CÁ NHÂN HÓA giúp bạn chinh phục IELTS nhanh
            chóng và dễ dàng
          </h3>
        </div>
        <div className={classes.function}>
          <button onClick={() => setIsOpenConsultancy(true)}>
            NHẬN TƯ VẤN NGAY
          </button>
        </div>
        <div className={classes.gap_fill}></div>
        <div
          className={`${classes.context_00} ${
            visibleSections.context00 ? classes.visible : ""
          }`}
          ref={sectionRefs.context00}
          id="context00"
        >
          <h1>Nếu bạn đang...</h1>
          <div className={classes.wrapper}>
            <div className={classes.list_item}>
              {ifYouAre.map((item, index) => (
                <div className={classes.item} key={index}>
                  <div className={classes.icon}>{item.icon}</div>
                  <div className={classes.title}>{item.title}</div>
                  <div
                    className={classes.body}
                    dangerouslySetInnerHTML={{
                      __html: item.content.replace(/\n/g, "<br>"),
                    }}
                  ></div>
                </div>
              ))}
            </div>
            <div className={classes.img_01}></div>
          </div>
        </div>
        <div
          className={`${classes.context_01} ${
            visibleSections.context01 ? classes.visible : ""
          }`}
          ref={sectionRefs.context01}
          id="context01"
        >
          <div className={classes.wrapper}>
            <div className={classes.left}>
              <h1>
                Hãy để IELTS Fighter giúp bạn "TĂNG TỐC - ĐẠT 6.5 IELTS" CHỈ SAU
                1 KHÓA HỌC!
              </h1>
              <p>
                Với kinh nghiệm 6 năm đào tạo hàng nghìn học viên đạt 7.0 - 8.0
                IELTS, chúng tôi đã thiết kế một lộ trình GIÚP BẠN THÀNH CÔNG
                VỚI IELTS.
              </p>
            </div>
            <div className={classes.right}>
              {card.map((item, index) => (
                <div className={classes.item} key={index}>
                  <div className={classes.header}>
                    <div className={classes.icon}>{item.icon}</div>
                    <div className={classes.title}>{item.title}</div>
                  </div>
                  <div className={classes.body}>{item.content}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className={`${classes.context_02} ${
            visibleSections.context02 ? classes.visible : ""
          }`}
          ref={sectionRefs.context02}
          id="context02"
        ></div>

        <div
          className={`${classes.context_03} ${
            visibleSections.context03 ? classes.visible : ""
          }`}
          ref={sectionRefs.context03}
          id="context03"
        >
          <h1>Cam kết đầu ra</h1>
          <h2>Không đạt học lại miễn phí</h2>

          <div className={classes.body}>
            <div className={classes.img_02}></div>
            <div>
              <div className={classes.list_item}>
                {list.map((item, index) => (
                  <div className={classes.item} key={index}>
                    <div className={classes.icon}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="rgba(244,67,54,1)"
                      >
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                      </svg>
                    </div>
                    <div className={classes.body}>{item}</div>
                  </div>
                ))}
              </div>
              <button onClick={() => setIsOpenConsultancy(true)}>
                Tư vấn khóa học ngay
              </button>
            </div>
          </div>
        </div>

        <div
          className={`${classes.context_04} ${
            visibleSections.context04 ? classes.visible : ""
          }`}
          ref={sectionRefs.context04}
          id="context04"
        >
          <h1>
            <span>Lộ trình 230h</span> đột phá kỹ năng
          </h1>
          <p>Từ mất gốc đến 7.0-8.0 IELTS trở nên dễ dàng hơn bạn tưởng đấy</p>

          <div className={classes.shape_04}></div>

          <div className={classes.roadmap}>
            {roadmap.map((item) => (
              <div className={classes.item_roadmap} key={item.id}>
                <div className={classes.name_roadmap}>{item.name}</div>
                <div className={classes.title_roadmap}>{item.title}</div>
                <div className={classes.text_roadmap}>{item.text}</div>
              </div>
            ))}
          </div>
          <button
            className={classes.btn_02}
            onClick={() => setIsOpenConsultancy(true)}
          >
            Tư vấn chi tiết lộ trình
          </button>
        </div>

        <div
          className={`${classes.context_05} ${
            visibleSections.context05 ? classes.visible : ""
          }`}
          ref={sectionRefs.context05}
          id="context05"
        >
          <div className={classes.paragraph_00}>
            <h1>Tại sao hàng triệu người đã tin tưởng</h1>
            <h1>Lựa chọn IELTS Fighter</h1>
          </div>

          <div className={classes.card1}>
            {card_1.map((item) => (
              <div className={classes.item} key={item.number}>
                <div className={classes.left}>
                  <h1>{item.number}</h1>
                  <h2>{item.title}</h2>
                  <p>{item.content}</p>
                  {item.hasList && (
                    <ul>
                      {item.list.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className={classes.right}>
                  <img src={item.imgURL} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`${classes.context_06} ${
            visibleSections.context06 ? classes.visible : ""
          }`}
          ref={sectionRefs.context06}
          id="context06"
        >
          <div ref={courseRef}>
            <SignUpForm
              courseName={course?.tenkhoahoc}
              discount={course?.uudai}
              endDate={course?.thoigianuudai}
            />
          </div>
        </div>

        <div
          className={`${classes.context_07} ${
            visibleSections.context07 ? classes.visible : ""
          }`}
          ref={sectionRefs.context07}
          id="context07"
        >
          <Course />
        </div>

        <div className={classes.context_08}>
          <FacebookSocialPlugin />
        </div>
      </div>
    </div>
  );
};

export default Aim65;
