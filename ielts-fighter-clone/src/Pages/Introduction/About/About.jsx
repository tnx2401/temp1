import React from "react";
import classes from "./About.module.scss";
import Course from "../../../assets/Course/Course";
import useVisibleSections from "../../../assets/useVisibleSections";
import { useOutletContext } from "react-router-dom";

export const About = () => {
  const { courseRef } = useOutletContext();
  const { visibleSections, sectionRefs } = useVisibleSections([
    "context_00",
    "context_01",
    "context_02",
    "context_03",
    "context_04",
    "context_05",
  ]);

  const cards = [
    {
      header: "Về IELTS Fighter",
      img: "https://w.ladicdn.com/s650x550/5b57f38472976020da8e5611/screenshot-2023-11-10-115202-20231110045225-1ms0w.png",
      title: "Hành trình thắp lửa chiến binh",
      content:
        "Chúng tôi đã, đang và mãi đam mê, cống hiến hết mình vì sứ mệnh chắp cánh ước mơ IELTS cho hàng triệu người Việt Nam vươn tầm thế giới. Hệ thống 60+ cơ sở học IELTS Online/ Offline là cầu nối giúp các bạn học viên trên mọi miền tổ quốc cùng nỗ lực chinh phục IELTS.",
    },
    {
      header: "Về giáo viên",
      img: "https://w.ladicdn.com/s650x550/5b57f38472976020da8e5611/screenshot-2023-11-10-115545-20231110045650-ykiv5.png",
      title: "Đồng hành theo đuổi ước mơ",
      content:
        "Đội ngũ giáo viên tài năng, nhưng không hướng tới trở thành “thần tượng” của học trò mà dành tâm huyết để ‘’biến học trò trở thành thần tượng của chính mình”. Mỗi giây mỗi phút thầy cô IELTS Fighter luôn nỗ lực sáng tạo, mang tới những giờ giảng chất lượng nhất cho các bạn học viên.",
    },
    {
      header: "Về phương pháp đào tạo",
      img: "https://w.ladicdn.com/s650x550/5b57f38472976020da8e5611/screenshot-2023-11-10-115736-20231110045756-7adpi.png",
      title: "Học IELTS toàn diện, bứt phá",
      content:
        "Phương pháp đào tạo RIPL đề cao tính trải nghiệm, sự tương tác, thực hành ngôn ngữ liên tục giữa thầy và trò, giúp hơn 300.000 học viên chinh phục tiếng Anh bằng con đường ngắn nhất và tràn đầy cảm hứng, tự tin.",
    },
  ];

  const alsoCards = [
    {
      type: "video",
      link: "https://www.youtube.com/embed/appy_Hcs7lQ?si=QRWGbo1Sl1U8oCC-",
      title: "Hành trình 7 năm hoạt động",
    },
    {
      type: "video",
      link: "https://www.youtube.com/embed/ruJwulpKYT4?si=moFO6mxrz8HOSbmq",
      title: "Đối tác bạch kim của IDP Việt Nam",
    },
    {
      type: "video",
      link: "https://www.youtube.com/embed/FWeuFdwo8bU?si=GtdqqCgZ9w4hJivq",
      title: "Khai trương phòng thi IELTS trên máy chuẩn IDP",
    },
    {
      type: "img",
      link: "https://w.ladicdn.com/s650x500/5b57f38472976020da8e5611/screenshot-2023-11-10-141235-20231110071302-qx7zy.png",
      to: "https://www.youtube.com/c/IELTSFighter/videos",
      title: "Kênh Youtube hơn 1000+ video bài giảng",
    },
    {
      type: "img",
      link: "https://w.ladicdn.com/s650x500/5b57f38472976020da8e5611/screenshot-2023-11-10-141410-20231110071431-ttwof.png",
      to: "",
      title: "Website 1000000 lượt truy cập mỗi tháng",
    },
    {
      type: "img",
      link: "https://w.ladicdn.com/s650x500/5b57f38472976020da8e5611/screenshot-2023-11-10-141532-20231110071549--ymj3.png",
      to: "https://www.facebook.com/ieltsfighter/",
      title: "Fanpage 1000000 người theo dõi",
    },
  ];

  const handleClick = (link) => {
    if (link === "") {
      return;
    } else {
      window.location.href = link;
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.hero_img}></div>
      <div className={classes.content}>
        <div
          className={`${classes.context_00} ${
            visibleSections.context_00 ? classes.visible : ""
          }`}
          ref={sectionRefs.context_00}
          id="context_00"
        >
          <h1>Chào mừng bạn đến với IELTS Fighter!</h1>
          <div className={classes.wrapper}>
            <div className={classes.text}>
              <p>
                Trước khi chúng ta có cơ hội gặp gỡ, cảm ơn bạn đã sẵn lòng tìm
                hiểu tại đây. Đội ngũ IELTS Fighter rất vui được cùng bạn chia
                sẻ những câu chuyện đằng sau thương hiệu đáng tự hào.
              </p>

              <p>
                <span className={classes.text_bold}>
                  IELTS Fighter - Chiến binh IELTS
                </span>{" "}
                là thương hiệu trực thuộc Công ty Cổ phần Giáo dục và Đào tạo{" "}
                <span className={classes.text_bold}>IMAP Việt Nam</span> - đơn
                vị đi đầu trong lĩnh vực đào tạo tiếng Anh tại Việt Nam.
              </p>

              <p>
                Trải qua gần <span className={classes.text_bold}>7 năm</span>{" "}
                thành lập và phát triển, IELTS Fighter tự hào được hàng trăm
                nghìn học viên tin tưởng lựa chọn đồng hành tại hơn{" "}
                <span className={classes.text_bold}>60 cơ sở</span> luyện thi
                trên toàn quốc cũng như hệ thống học trực tuyến.
              </p>

              <p>
                IELTS Fighter sở hữu đội ngũ{" "}
                <span className={classes.text_bold}>500+ giáo viên</span> chuyên
                môn cao, nghiệp vụ giỏi, với kinh nghiệm giảng dạy nhiều năm và
                tinh thần nhiệt huyết trong nghề. Các giáo viên tại đã truyền
                cảm hứng, động lực cho{" "}
                <span className={classes.text_bold}>300.000+ học viên</span>{" "}
                IELTS Fighter cán đích IELTS thành công với tỷ lệ đạt/vượt band
                IELTS cam kết lên đến 94%.
              </p>

              <p>
                Bên cạnh 60+ cơ sở luyện thi IELTS toàn quốc, IELTS Fighter hiện
                cũng đang sở hữu hệ sinh thái học tập ONLINE: website, fanpage,
                group hỗ trợ học tập hoàn toàn miễn phí giúp các bạn học viên có
                thể tự ôn luyện tại nhà.
              </p>
            </div>
            <div className={classes.img}>
              <div id={classes.img_1}></div>
              <div id={classes.img_2}></div>
              <div id={classes.img_3}></div>
            </div>
          </div>
        </div>

        <div
          className={`${classes.context_01} ${
            visibleSections.context_01 ? classes.visible : ""
          }`}
          ref={sectionRefs.context_01}
          id="context_01"
        >
          <h1>Câu chuyện IELTS Fighter</h1>
          <div className={classes.wrapper}>
            <p>
              Từ khát khao lan tỏa tình yêu IELTS tới hành trình 7 năm - 60 cư
              sở - chắp cánh cho hàng triệu người chinh phục ước mơ...
            </p>
            <div className={classes.video}>
              <iframe
                width="500"
                height="300"
                src="https://www.youtube.com/embed/appy_Hcs7lQ?si=lsHSr5f9uWaBEnr6"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <div
          className={`${classes.context_02} ${
            visibleSections.context_02 ? classes.visible : ""
          }`}
          ref={sectionRefs.context_02}
          id="context_02"
        >
          {cards.map((card) => (
            <div key={card.header}>
              <h1>{card.header}</h1>
              <div className={classes.card}>
                <div style={{ backgroundImage: `url(${card.img})` }}></div>
                <h3>{card.title}</h3>
                <p>{card.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`${classes.context_03} ${
            visibleSections.context_03 ? classes.visible : ""
          }`}
          ref={sectionRefs.context_03}
          id="context_03"
        >
          {alsoCards.map((card) => {
            if (card.type === "video") {
              return (
                <div className={classes.card} key={card.title}>
                  <iframe
                    src={card.link}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                  <h1>{card.title}</h1>
                </div>
              );
            } else {
              return (
                <div className={classes.card} key={card.title}>
                  <div
                    style={{ backgroundImage: `url(${card.link})` }}
                    onClick={() => handleClick(card.to)}
                  ></div>
                  <h1>{card.title}</h1>
                </div>
              );
            }
          })}
        </div>

        <div
          className={`${classes.context_04} ${
            visibleSections.context_04 ? classes.visible : ""
          }`}
          ref={sectionRefs.context_04}
          id="context_04"
        >
          <div className={classes.background_01}></div>
          <div className={classes.background_02}></div>
        </div>

        <div
          className={`${classes.context_05} ${
            visibleSections.context_05 ? classes.visible : ""
          }`}
          ref={sectionRefs.context_05}
          id="context_05"
        >
          <div ref={courseRef}>
            <Course />
          </div>
        </div>
      </div>
    </div>
  );
};
