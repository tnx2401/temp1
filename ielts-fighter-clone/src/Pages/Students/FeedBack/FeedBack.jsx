import React from "react";
import classes from "./FeedBack.module.scss";
import Slider from "react-slick";
import Course from "../../../assets/Course/Course";
import { useOutletContext } from "react-router-dom";

const FeedBack = () => {
  const { courseRef } = useOutletContext();
  const images = [
    { className: classes.img_00 },
    { className: classes.img_01 },
    { className: classes.img_02 },
    { className: classes.img_03 },
    { className: classes.img_04 },
    { className: classes.img_05 },
  ];

  const feedback_images = [
    "https://w.ladicdn.com/s750x600/5b57f38472976020da8e5611/tam-thu-hoc-vien-ielts-fighter-6-20231121094658-wfdbb.jpg",
    "https://w.ladicdn.com/s750x600/5b57f38472976020da8e5611/tam-thu-hoc-vien-ielts-fighter-7-20231121094659-g2351.jpg",
    "https://w.ladicdn.com/s750x600/5b57f38472976020da8e5611/tam-thu-hoc-vien-ielts-fighter-4-20231121094657-uyaf2.jpg",
    "https://w.ladicdn.com/s750x600/5b57f38472976020da8e5611/tam-thu-hoc-vien-ielts-fighter-3-20231121094655-x41s0.jpg",
    "https://w.ladicdn.com/s750x600/5b57f38472976020da8e5611/tam-thu-hoc-vien-ielts-fighter-8-20231121094659-eauak.jpg",
    "https://w.ladicdn.com/s750x600/5b57f38472976020da8e5611/tam-thu-hoc-vien-ielts-fighter-2-20231121094654-8oklt.jpg",
  ];

  const videos = [
    {
      src: "https://www.youtube.com/embed/_CNtNRQp0Zc?si=_8Q1O0x2QQgYRmse",
      title:
        "Sinh viên năm cuối cán đích 8.5 IELTS ấn tượng, chia sẻ bí quyết học IELTS hiệu quả",
    },
    {
      src: "https://www.youtube.com/embed/hfkJUsuaslo?si=JkHoI9tmyLhM9J23",
      title: "Học IELTS 1-1, cán đích 7.5 sau 30 buổi",
    },
    {
      src: "https://www.youtube.com/embed/BzQjbh4rHFg?si=3XS3-anZ9JxdEJ1J",
      title: "17 tuổi đạt 8.0 IELTS, niềm vui của con, sự tự hào của mẹ",
    },
    {
      src: "https://www.youtube.com/embed/hqeXa-L05ts?si=Pc1s2guMEysGS3ad",
      title: "Học viên 9x và 8.0 IELTS phục vụ sự nghiệp",
    },
    {
      src: "https://www.youtube.com/embed/ntSE2zViRU4?si=CLIfT1aSpyRv4CpD",
      title:
        "Chọn học IELTS trực tuyến, chinh phục 7.5 - xét tuyển NEU thành công",
    },
  ];

  const cards = [
    {
      imgURL:
        "https://w.ladicdn.com/s450x450/5b57f38472976020da8e5611/bao-tram-20231004102614-h3atd.png",
      title: "BẢO TRÂM - 8.5 IELTS",
      job: "Học sinh cấp 3",
      content:
        "Nhờ có sự trợ giúp của IF và thầy Lộc, mình đã đạt được điểm IELTS cao hơn cả mong đợi (ban đầu mình chỉ aim 8.0 thui). Mình tin là giờ đây mình đã phát triển toàn diện ở cả 4 kỹ năng Nghe Nói Đọc Viết).",
    },
    {
      imgURL:
        "https://w.ladicdn.com/s400x400/5b57f38472976020da8e5611/thuy-chi-20231004102704-arefs.png",
      title: "Thùy Chi - 7.5 IELTS",
      job: "Học sinh cấp 3",
      content:
        "Mình học ONL và được 7.5 IELTS. Nhờ tấm bằng này, mình đã xét tuyển thành công NEU rồi!! Từ đầu mình thực sự rất sợ Writing và luôn mất nhiều thời gian cho mỗi lần viết, nhờ có thầy cô mà khi đi thi, mình thậm chí còn dư thêm thời gian check lại bài.",
    },
    {
      imgURL:
        "https://w.ladicdn.com/s500x450/5b57f38472976020da8e5611/kim-thanh-bang-diem-20231004102656-dcuhr.jpg",
      title: "MS. KIM THANH - 7.0 IELTS",
      job: "Người đi làm",
      content:
        "Mình đã là người đi làm rồi nên việc vừa học vừa làm, cân bằng thời gian là rất quan trọng. Để rút ngắn thời gian, mình chọn học tại IELTS Fighter, sẽ có giáo viên, giáo trình, lộ trình bài bản, mình tin tưởng và follow theo.",
    },
    {
      imgURL:
        "https://w.ladicdn.com/s450x450/5b57f38472976020da8e5611/tran-huu-20231004102704-q4e86.jpg",
      title: "TRẦN HỮU - 8.5 IELTS",
      job: "Sinh viên đại học",
      content:
        "Tuy thời gian học của mình tại IELTS Fighter chỉ vỏn vẹn 10 buổi, nhưng nó vẫn đủ để cho mình những xúc cảm và sự trân trọng kì lạ dành cho những con người nơi đây. Và mình nghĩ chính những điều này, phần nào đó đã đưa về kết quả cho mình ngay từ lần thi đầu tiên: 8.5 Overall.",
    },
    {
      imgURL:
        "https://w.ladicdn.com/s450x450/5b57f38472976020da8e5611/minh-triet-20231004102656-ffep-.jpg",
      title: "MINH TRIỆT - 7.5 IELTS",
      job: "Học sinh cấp 3",
      content:
        "Gia đình cảm ơn trung tâm IELTS Fighter rất nhiều. Phụng đang giới thiệu cho con của một số người bạn đến luyện ở trung tâm của mình. Chúc trung tâm ngày càng đào tạo ra nhiều học viên giỏi và thi đạt kết quả cao làm rạng danh Thầy Cô và cả trung tâm ❤️❤️❤️",
    },
    {
      imgURL:
        "https://w.ladicdn.com/s400x400/5b57f38472976020da8e5611/duy-anh-20231004102655-_n4jf.jpg",
      title: "DUY ANH - 7.5 IELTS",
      job: "Học sinh cấp 3",
      content:
        '"Học IELTS rất áp lực đấy", "Học IELTS khó lắm", ... Đó là suy nghĩ không của riêng ai mà là ngay cả mình cũng từng nghĩ vậy, đó là khi mình mới chỉ bước chân vào cấp 3. Chính vì vậy mình đã từng nghĩ bỏ học IELTS để thi tốt nghiệp THPT theo cách truyền thống, nhưng sau khi đọc qua một post về IELTS của một chị cũng là một học viên của IELTS Fighter mà đã khiến phải thay đổi suy nghĩ "Tại sao lại không nhỉ"?',
    },
  ];

  const CustomPrevArrow = (props) => (
    <div
      className={`${classes.customArrow} ${classes.prevArrow}`}
      onClick={props.onClick}
    >
      <span>&#10094;</span>
    </div>
  );

  const CustomNextArrow = (props) => (
    <div
      className={`${classes.customArrow} ${classes.nextArrow}`}
      onClick={props.onClick}
    >
      <span>&#10095;</span>
    </div>
  );

  const baseSettings = {
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const settings = [
    { ...baseSettings, slidesToShow: 3, autoplaySpeed: 2000 },
    { ...baseSettings, slidesToShow: 3, autoplaySpeed: 5000 },
    { ...baseSettings, slidesToShow: 2, autoplaySpeed: 5000 },
  ];

  const handleImageClick = (e) => {
    const url = e.target.src;
    window.open(url, "_blank");
  };

  return (
    <div className={classes.container}>
      <div className={classes.hero_img}></div>
      <div className={classes.content}>
        <div className={classes.wrapper}>
          {images.map((image, index) => (
            <div key={index} className={image.className}></div>
          ))}
          <div className={classes.context_00}>
            <p>
              Mỗi học viên cầm trên tay <span> tấm bằng IELTS</span> đều là một
              đại sứ mang theo niềm <span>tự hào</span> và <span>niềm tin</span>{" "}
              cháy bỏng của IELTS Fighter, đồng thời cũng là{" "}
              <span>động lực</span> lớn lao để{" "}
              <span>đội ngũ IELTS Fighter </span>
              không ngừng tiến bước. Cảm ơn các bạn đã lựa chọn IELTS Fighter là
              người đồng hành trên hành trình <span>chinh phục IELTS.</span>
            </p>
          </div>
        </div>

        <div className={classes.gap_fill}></div>
        <div className={classes.context_01}>
          <Slider {...settings[0]}>
            {feedback_images.map((image, index) => (
              <img key={index} src={image} alt="" onClick={handleImageClick} />
            ))}
          </Slider>
        </div>

        <div className={classes.context_02}>
          <div className={classes.wrapper}>
            <div className={classes.paragraph_00}>
              <h1>99% học viên</h1>
            </div>
            <div className={classes.paragraph_01}>
              <h2>đạt kết quả đầu ra cho kỳ vọng</h2>
            </div>
            <div className={classes.paragraph_02}>
              <p>
                IELTS không chỉ là 1 chứng chỉ, mà là bước đầu của một hành
                trình dài.
              </p>
            </div>
            <div className={classes.paragraph_03}></div>
            <Slider {...settings[1]}>
              {videos.map((video, index) => (
                <div className={classes.video_item} key={index}>
                  <iframe
                    width="90%"
                    height="70%"
                    src={video.src}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </Slider>
            <Slider {...settings[2]}>
              {cards.map((card, index) => (
                <div className={classes.card_item} key={index}>
                  <div className={classes.card_img}>
                    <img src={card.imgURL} alt={card.title} />
                  </div>
                  <div className={classes.card_content} key={index}>
                    <div className={classes.card_head}>
                      <div className={classes.card_info}>
                        <h3>{card.title}</h3>
                        <p>{card.job}</p>
                      </div>
                    </div>
                    <div className={classes.card_body}>
                      <p>{card.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className={classes.context_03}>
          <div className={classes.wrapper}>
            <div ref={courseRef}>
              <Course />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
