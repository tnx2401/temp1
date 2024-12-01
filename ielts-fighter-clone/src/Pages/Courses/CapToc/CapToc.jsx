import { useState, useEffect } from "react";
import classes from "./CapToc.module.scss";
import SignUpForm from "../../../assets/SignUpForm/SignUpForm";
import Course from "../../../assets/Course/Course";
import useVisibleSections from "../../../assets/useVisibleSections";
import { useOutletContext } from "react-router-dom";
import { Element, scroller } from "react-scroll";
import FacebookSocialPlugin from "../../../assets/FacebookSocialPlugin/FacebookSocialPlugin";
import axios from "axios";

const CapToc = () => {
  const { courseRef, setIsOpenConsultancy } = useOutletContext();
  const { visibleSections, sectionRefs } = useVisibleSections([
    "context_01",
    "context_02",
    "context_03",
    "context_04",
    "context_05",
    "context_06",
    "context_07",
    "context_08",
  ]);

  const [course, setCourse] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://determined-freedom-production.up.railway.app/api/v1/khoahoc/2"
      )
      .then((res) => {
        setCourse(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const scrollToSignUp = () => {
    scroller.scrollTo("signup", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -300,
    });
  };

  const list = [
    {
      id: 1,
      title: "Lợi ích của việc học IELTS",
      content: [
        "Được miễn thi tiếng anh THPT",
        "Chuẩn bị tốt cho ước mơ du học, IELTS càng cao cơ hội sẵn học bổng càng lớn",
        "Cơ hội bước vào các trường THPT chuyên dễ dàng hơn ",
        "Cơ hội vào trường Đại học TOP đầu, danh tiếng như Ngoại thương, FPT, Ngân Hàng...",
        "Nâng cao khả năng tiếng Anh và rèn luyện tư duy giúp phát triển toàn diện ",
      ],
      video: "https://www.youtube.com/embed/PfuvLt_TDXI?si=fwc767hFsnQEEnQE",
    },
    {
      id: 2,
      title: "Bạn đang gặp phải vấn đề gì?",
      image:
        "https://w.ladicdn.com/s850x700/5b57f38472976020da8e5611/khoa-hoc-cap-toc-ielts-1559718855.png",
      content: [
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="rgba(255, 183, 0, 1.0)"
            >
              {" "}
              <path d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M15.5,8C16.3,8 17,8.7 17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M12,14C13.75,14 15.29,14.72 16.19,15.81L14.77,17.23C14.32,16.5 13.25,16 12,16C10.75,16 9.68,16.5 9.23,17.23L7.81,15.81C8.71,14.72 10.25,14 12,14Z"></path>{" "}
            </svg>
          ),
          text: "Bạn mới bắt đầu và đang gặp nhiều khó khăn, dễ chán nản khi học IELTS?",
        },
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="rgba(255, 183, 0, 1.0)"
            >
              {" "}
              <path d="M15,19L9,16.89V5L15,7.11M20.5,3C20.44,3 20.39,3 20.34,3L15,5.1L9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21C3.55,21 3.61,21 3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3Z"></path>{" "}
            </svg>
          ),
          text: "Bạn không biết bắt đầu từ đâu? Bạn cần lộ trình học IELTS chi tiết?",
        },
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="rgba(255, 183, 0, 1.0)"
            >
              {" "}
              <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,17V16H9V14H13V13H10A1,1 0 0,1 9,12V9A1,1 0 0,1 10,8H11V7H13V8H15V10H11V11H14A1,1 0 0,1 15,12V15A1,1 0 0,1 14,16H13V17H11Z"></path>{" "}
            </svg>
          ),
          text: "Bạn muốn học IELTS nhưng ngại học phí quá cao? Những khóa học 80 - 100 triệu làm bạn sợ?",
        },
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="rgba(255, 183, 0, 1.0)"
            >
              {" "}
              <path d="M15,4A8,8 0 0,1 23,12A8,8 0 0,1 15,20A8,8 0 0,1 7,12A8,8 0 0,1 15,4M15,6A6,6 0 0,0 9,12A6,6 0 0,0 15,18A6,6 0 0,0 21,12A6,6 0 0,0 15,6M14,8H15.5V11.78L17.83,14.11L16.77,15.17L14,12.4V8M2,18A1,1 0 0,1 1,17A1,1 0 0,1 2,16H5.83C6.14,16.71 6.54,17.38 7,18H2M3,13A1,1 0 0,1 2,12A1,1 0 0,1 3,11H5.05L5,12L5.05,13H3M4,8A1,1 0 0,1 3,7A1,1 0 0,1 4,6H7C6.54,6.62 6.14,7.29 5.83,8H4Z"></path>{" "}
            </svg>
          ),
          text: "Bạn mong muốn đạt band đểm cao trong thời gian ngắn nhất nhưng không biết làm sao?",
        },
      ],
    },
  ];

  const card = [
    {
      title: "7.0",
      text: "Là điểm số mà IELTS Fighter cam kết đầu ra bằng văn bản, không kỹ năng nào dưới 6.0! Học lại miễn phí nếu không đạt đầu ra.",
    },
    {
      title: "24/7",
      text: "Là thời gian bạn được hỗ trợ học tập khi trở thành học viên của chúng tôi từ các giờ học trên lớp đến online tại nhà.",
    },
    {
      title: "100%",
      text: "MIỄN PHÍ các tài liệu, sách, giáo trình học. Lộ trình học tinh gọn, bạn sẽ bứt phá điểm số nhanh nhất.",
    },
  ];

  const reason = [
    {
      id: 1,
      title: "Đội ngũ giáo viên",
      text: 'Đội ngũ giáo viên chuyên môn giỏi, giàu kinh nghiệm và truyền cảm hứng. Thầy cô sẽ truyền lửa giúp bạn học IELTS "dễ như ăn bánh".',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="rgba(255,193,7,1)"
        >
          <path d="M9,5A3.5,3.5 0 0,1 12.5,8.5A3.5,3.5 0 0,1 9,12A3.5,3.5 0 0,1 5.5,8.5A3.5,3.5 0 0,1 9,5M9,13.75C12.87,13.75 16,15.32 16,17.25V19H2V17.25C2,15.32 5.13,13.75 9,13.75M17,12.66L14.25,9.66L15.41,8.5L17,10.09L20.59,6.5L21.75,7.91L17,12.66Z"></path>{" "}
        </svg>
      ),
    },
    {
      id: 2,
      title: "Lộ trình tinh gọn",
      text: "Lộ trình học thiết kế tinh gọn với giáo trình biên soạn đầy đủ, giúp các bạn ở các trình độ khác nhau tham gia học tập.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="rgba(255,193,7,1)"
        >
          {" "}
          <path d="M14.19,14.19L6,18L9.81,9.81L18,6M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,10.9A1.1,1.1 0 0,0 10.9,12A1.1,1.1 0 0,0 12,13.1A1.1,1.1 0 0,0 13.1,12A1.1,1.1 0 0,0 12,10.9Z"></path>{" "}
        </svg>
      ),
    },
    {
      id: 3,
      title: "HỌC PHÍ CHỈ TỪ 89K/H",
      text: "IELTS Fighter cung cấp khóa học cấp tốc với học phí chỉ từ 89k/h, tặng kèm các ấn phẩm sách và tài liệu chất do đội ngũ giáo viên, chuyên môn biên soạn.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          version="1.0"
          fit=""
          height="100%"
          width="100%"
          preserveAspectRatio="xMidYMid meet"
          fill="rgba(255,193,7,1)"
        >
          <path d="M315 303c3 10 5 19 5 29 0 21-5 38-14 53s-20 26-35 35-31 17-50 21c-10 2-19 3-29 4v35h-64v-35c-9-1-19-4-28-6-20-5-36-12-51-23s-26-24-35-41c-8-16-13-34-14-55h69c0 12 2 24 7 33 5 10 12 17 21 23s20 11 31 14V270c-8-2-18-4-27-6-17-4-30-9-41-16s-20-15-27-23-11-17-14-26-4-18-4-28c0-18 4-34 12-48s19-25 33-34 29-16 46-20c7-2 15-3 22-4V32h64v33c9 1 16 4 24 6 18 5 34 12 48 22s25 22 33 37c7 13 11 28 12 46h-69c-3-21-12-37-26-46-7-4-13-8-22-10v106c9 2 16 4 25 6 12 3 22 6 27 7 13 4 23 9 33 15 10 7 18 14 24 22s11 17 14 27zm-187-93v-92c-7 2-15 4-21 7-7 4-12 9-17 15s-7 14-7 23c0 13 4 24 13 31 8 7 20 12 32 16zm119 149c3-7 4-13 4-20 0-14-3-24-10-31s-15-11-23-14-16-5-26-8v107c6-1 10-2 14-3 11-3 20-8 27-13s11-11 14-18z"></path>
        </svg>
      ),
    },
    {
      id: 4,
      title: "GIỜ HỌC LINH HOẠT",
      text: "Khóa học với nhiều khung giờ học từ sáng đến tối, giúp các bạn lựa chọn thời gian phù hợp với lịch trình của bản thân. Lịch học có thể linh hoạt thay đổi",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 404 512"
          version="1.0"
          fit=""
          height="100%"
          width="100%"
          preserveAspectRatio="xMidYMid meet"
          fill="rgba(255,193,7,1)"
        >
          <path d="M385 192l-55-52-9 9c35 32 57 79 57 130 0 44-16 83-43 114l37 45-13 10-35-43c-32 30-75 49-122 49s-90-19-122-49l-35 43-12-10 36-45c-27-31-43-70-43-114 0-51 22-98 57-130l-9-9-54 52C8 178 0 160 0 140c0-44 35-80 80-82h5c20 0 39 7 54 18l-54 53 11 10c26-19 56-32 90-35 0-8 8-16 16-16s15 8 15 16c34 3 65 16 91 35l11-11-54-52c15-11 34-18 54-18h5c45 2 80 38 80 82 0 20-7 38-19 52zM218 304V160h-16v128h-96v16h112z"></path>
        </svg>
      ),
    },
    {
      id: 5,
      title: "HỖ TRỢ 24/24",
      text: "IELTS Fighter hỗ trợ học tập tại cơ sở và online 24/24. Cung cấp tài liệu và sách biên soạn giúp bạn ôn luyện hiệu quả.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 416 512"
          version="1.0"
          fit=""
          height="100%"
          width="100%"
          preserveAspectRatio="xMidYMid meet"
          fill="rgba(255,193,7,1)"
        >
          <path d="M344 64c4 0 7 4 7 8v214c0 4-3 9-7 9H157l-90 89v-89H10c-4 0-10-5-10-9V72c0-4 6-8 10-8h334zm64 63c4 0 8 5 8 9v214c0 4-4 9-8 9h-57v89l-90-89H131l39-39h181c18 0 25-10 25-26V127h32z"></path>
        </svg>
      ),
    },
    {
      id: 6,
      title: "60+ CƠ SỞ TRÊN TOÀN QUỐC",
      text: "Với 60 cơ sở, các bạn có thể lựa chọn địa chỉ học tập gần nhất, thuận tiện. Các địa chỉ học đều tạo môi trường học thoải mái nhất!",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="rgba(255,193,7,1)"
        >
          {" "}
          <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"></path>{" "}
        </svg>
      ),
    },
  ];

  const roadmap = [
    {
      id: 1,
      title: "Basic IELTS",
      text: [
        "Xây dựng nền tảng từ vựng, ngữ pháp, thực hành phát âm chuẩn",
        "Cam kết đầu ra 2.5 IELTS",
      ],
    },
    {
      id: 2,
      title: "Level 3.0 - 3.5 IELTS",
      text: [
        "Làm quen bài thi IELTS, nắm được các kiến thức cơ bản",
        "Cam kết đầu ra 3.0 - 3.5 IELTS",
      ],
    },
    {
      id: 3,
      title: "Level 4.0 - 4.5 IELTS",
      text: [
        "Nắm chắc ngữ pháp, từ vựng cơ bản và bắt đầu chinh phục 4 kỹ năng",
        "Cam kết đầu ra 4.0 - 4.5 IELTS",
      ],
    },
    {
      id: 4,
      title: "Level 5.0 - 5.5 IELTS",
      text: [
        "Nâng cao kiến thức, bắt đầu luyện đề chuyên sâu để các bạn phát triển kỹ năng làm bài hiệu quả, bứt phá điểm số",
        "Cam kết đầu ra 5.0 - 5.5 IELTS",
      ],
    },
    {
      id: 5,
      title: "Level 6.0 - 7.0+ IELTS",
      text: [
        "Thiết kế khóa học với các bài giảng nâng cấp, luyện Viết - Speaking, chữa đề, tìm lỗi sai để nâng cao kỹ năng",
        "Bạn được cam kết đầu ra 7.0, không kỹ năng nào dưới 6.0.",
      ],
    },
  ];

  const teacher = [
    {
      id: 1,
      name: "Ms.Nhi",
      skill: "8.5 IELTS",
      image:
        "https://w.ladicdn.com/s600x600/5b57f38472976020da8e5611/will-vo-giao-vien-ielts-fighter-8-0-ielts-1-20220923081830-tccub.jpg",
      description: [
        "IELTS 8.5 overall",
        "Tốt nghiệp loại: The University of Melbourne/Master of Financial Management",
        "Kinh nghiệm giảng dạy tiếng Anh 5 năm tại IELTS Fighter",
      ],
    },
    {
      id: 2,
      name: "Mr. Nam",
      skill: "8.0 IELTS",
      image:
        "https://w.ladicdn.com/s600x600/5b57f38472976020da8e5611/thay-hoang-nam-3-20220923080456-msrwm.jpg",
      description: [
        "Tốt nghiệp: Loại giỏi Học viện Ngoại Giao",
        "8.0 IELTS Speaking",
        "Ngôn ngữ tiếng Anh và tiếng Hàn Quốc",
        "Nguyên Phó Chủ tịch Hội Sinh viên Học viện Ngoại Giao",
      ],
    },
    {
      id: 3,
      name: "Ms.Thương",
      skill: "8.0 IELTS",
      image:
        "https://w.ladicdn.com/s500x500/5b57f38472976020da8e5611/ms-thuong-20220923083033-5yh7q.jpg",
      description: [
        "IELTS 8.0 overall",
        "Từng đạt 70% học bổng THPT Hoa Kỳ IDC",
        "Giải Đồng cuộc thi Hùng biện Tiếng Anh TP Hà Nội",
        "Tham gia các chương trình: AIESEC, IM Venture, VietAbroader, VYMUN",
      ],
    },
    {
      id: 4,
      name: "Ms.Trang",
      skill: "8.0 IELTS",
      image:
        "https://w.ladicdn.com/s600x600/5b57f38472976020da8e5611/ms-trang-1558803889.jpg",
      description: [
        "Cô giáo có giọng Anh - Anh ngọt ngào, còn giỏi tiếng Nhật, TBN",
        "Kinh nghiệm 5 năm",
        'Cô giáo với sự hài hước, "lầy", luôn biến những giờ học vui vẻ và hứng khởi để học tập tốt nhất',
      ],
    },
  ];

  const feedback_videos = [
    "https://www.youtube.com/embed/ymHcsj_a11o?si=LjDowynnJ1ubO-uB",
    "https://www.youtube.com/embed/HCEZJv4KAmA?si=PSWghParxf7IT7_C",
  ];
  const feedback_cards = [
    {
      id: 1,
      title: "Hoàng Long - 7.5 IELTS",
      job: "Học sinh lớp 9",
      image:
        "https://w.ladicdn.com/s550x550/5b57f38472976020da8e5611/hv-hoang-long-1558795336.jpg",
      text: "Khi chọn học IELTS để du học, em và mẹ chọn IELTS Fighter. Thời gian học ở đây cùng thầy cô rất vui, giờ em du học rồi nhưng em sẽ luôn nhớ!",
    },
    {
      id: 2,
      title: "Lý Mỹ Hà - 8.0 IELTS",
      job: "Học sinh lớp 12",
      image:
        "https://w.ladicdn.com/s550x550/5b57f38472976020da8e5611/hv-my-ha-1558795424.jpg",
      text: "Học tại IELTS Fighter rất vui vì thầy cô luôn tạo không khí, đan xen những chia sẻ hài hước, giúp mình cảm giác thoải mái khi học, không bị áp lực",
    },
    {
      id: 3,
      title: "Nhật Minh - 8.0 IELTS",
      job: "Sinh viên năm nhất",
      image:
        "https://w.ladicdn.com/s550x550/5b57f38472976020da8e5611/hv-nhat-minh-1558795440.jpg",
      text: "Từ nền tảng từ cấp 3, mình đến với IELTS mà chưa biết gì về kỳ thi này. Học tại trung tâm, có được sự giúp đỡ của thầy cô, tài liệu,... đã giúp mình tự tin hơn rất nhiều!",
    },
    {
      id: 4,
      title: "Thu Hà - 7.5 IELTS",
      job: "Nhân viên marketing",
      image:
        "https://w.ladicdn.com/s550x550/5b57f38472976020da8e5611/thu-ha-1558794675.jpg",
      text: "Mình tham gia học tại IELTS Fighter và sau 2 tháng học, mình đi thi lần đầu đạt 7.5 luôn. Nhờ vậy mà mình xin được công việc như mong ước.",
    },
  ];

  return (
    <div className={classes.container}>
      <div className={classes.hero_img}> </div>
      <div className={classes.content}>
        <div className={classes.context_00}>
          <div className={classes.left}>
            <div className={classes.paragraph_01}></div>
            <div className={classes.paragraph_02}>IELTS</div>
            <div className={classes.paragraph_03}>
              Luyện thi IELTS với đội ngũ giảng viên xuất sắc giúp bạn bứt phá
              trong thời gian ngắn nhất
            </div>
            <button className={classes.btn_00} onClick={scrollToSignUp}>
              Đăng ký ngay
            </button>
          </div>
          <div className={classes.right}>
            <div className={classes.img_00}></div>
            <div className={classes.img_01}></div>
          </div>
        </div>

        <div
          className={`${classes.context_01} ${
            visibleSections.context_01 ? classes.visible : ""
          }`}
          ref={sectionRefs.context_01}
          id="context_01"
        >
          {list.map((item) => (
            <div className={classes.item} key={item.id}>
              <div
                className={`${classes.body} ${
                  item.id === 1 ? classes.reverse : ""
                }`}
              >
                {item.video ? (
                  <>
                    <iframe
                      width="600"
                      height="240"
                      src="https://www.youtube.com/embed/PfuvLt_TDXI?si=IzrT-jNkkLVD8YO6"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                    <div className={classes.text}>
                      <div className={classes.title}>{item.title}</div>
                      {item.content.map((subItem, index) => (
                        <div key={index} className={classes.subItem}>
                          <ul>
                            <li> {subItem} </li>
                          </ul>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      className={classes.image}
                      style={{
                        backgroundImage: `url(${item.image})`,
                      }}
                    ></div>
                    <div className={classes.text}>
                      <div className={classes.title}>{item.title}</div>

                      {item.content.map((subItem, index) => (
                        <div key={index} className={classes.subItem}>
                          <div className={classes.icon}>{subItem.icon}</div>
                          <p>{subItem.text}</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <div
          className={`${classes.context_02} ${
            visibleSections.context_02 ? classes.visible : ""
          }`}
          ref={sectionRefs.context_02}
          id="context_02"
        >
          <div className={classes.wrapper}>
            <h1>Khóa học IELTS cấp tốc sẽ giúp bạn</h1>
            <p>IELTS Fighter thiết kế khóa học cấp tốc với học phí rẻ nhất</p>
            <p>giúp bạn sớm đạt mục tiêu chinh phục IELTS</p>

            <div className={classes.card_wrapper}>
              {card.map((item, index) => (
                <div className={classes.card} key={index}>
                  <div className={classes.title}>{item.title}</div>
                  <div className={classes.text}>{item.text}</div>
                </div>
              ))}
            </div>
            <div className={classes.btn_wrapper}>
              <button
                className={classes.btn_01}
                onClick={() => setIsOpenConsultancy(true)}
              >
                Nhận tư vấn về khóa học
              </button>
            </div>
          </div>
        </div>

        <div
          className={`${classes.context_03} ${
            visibleSections.context_03 ? classes.visible : ""
          }`}
          ref={sectionRefs.context_03}
          id="context_03"
        >
          <h1>6 lý do bạn nên tham gia khóa học này</h1>
          <div className={classes.img_02}></div>
          <div className={classes.reason_wrapper}>
            {reason.map((item, index) => (
              <div
                className={`${classes.reason} ${
                  item.id === 1 || item.id === 3 || item.id === 5
                    ? classes.reverse
                    : ""
                }`}
                key={index}
              >
                <div className={classes.icon}>{item.icon}</div>
                <div className={classes.text}>
                  <div className={classes.title}>{item.title}</div>
                  <div className={classes.text}>{item.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`${classes.context_04} ${
            visibleSections.context_04 ? classes.visible : ""
          }`}
          ref={sectionRefs.context_04}
          id="context_04"
        >
          <div className={classes.wrapper}>
            <div className={classes.img_03}></div>
            <h1>Lộ trình học thần tốc theo level</h1>
            <p>
              Khi tham gia khóa học, bạn sẽ được test thử trình độ và chọn lớp
              phù hợp theo mức điểm đầu vào của mình
            </p>
            <p>Theo từng level cũng có mực học phí và tài liệu khác nhau</p>
            <div className={classes.roadmap_wrapper}>
              <div className={classes.shape}></div>
              <div className={classes.shape_01}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="none"
                  viewBox="0 0 416.07 97.96"
                  class=""
                  fill="rgba(255, 194, 8, 1.0)"
                >
                  <path d="M415.93,69.33c-8.52,0-18.6.57-28,.57,0-1,2.1-2.42,2.87-3,1.16-.85,3.13-.63,4.56-3.17.44-.77-1.24-1.84,0-3.23.74-.84,2-1,2.56-1.48.74-.61,7.84-4.58,2-4.58.39-2.15,7.7-1,7.44-3-.08-.65-19.25-1-21.17-1,0-2.35,5.1,0,5.72-1.14.83-1.52-7.66-1.12-8.57-1.91.82-2.44.88.25-.62-2.46,5.08-4.78,11.85-2.2,17.75-5.61-1.82-1.61-8.17.68-10.5.82-4.22.26-13.52,1.43-16.36-1.42,1.42-1.48,9.88-.82,10.19-1.63.73-1.91-10.36.43-10.77-2.1.89.27,1.44-1.74.81-2.28.77.66-4.6,0-4.25-1.15.93.41,1.5.22,1.74-.56,0-1.2-6.2-1.73-6.89-1.73,0-3,12.9-4.62,14.82-4.87,3.53-.44,8.16-1.21,11.51-1.42,1.6-.11,4-.51,5.15-.58,2.11-.12,4,.2,5.79-.45,1-.36-.2-1.26-.64-1.26,0-.68,4.94-3.21,5.72-3.44,2.43-.7,6.7.53,8.51-1.39-1-1.1-10.83-.83-12.38-.9-4.3-.19-8.14-.07-12.08-.57-7.41-.94-14.46-1.16-21.82-2.29-12.21-1.87-24.64-4.48-37.49-5.72C317,5,302,3.93,287.31,3.09,271,2.15,253.49.31,236.68.09,213-.23,190.44.39,167.56.66c-14.71.17-31.73-.19-46.35,1.71-28,3.65-57.48,3-85.56,8-4.31.77-27.23,6.23-18.34,12,1.34.87,4,.65,4.9,1.43.68.58,2.71,4.31,2.58,5.43-.21,1.85,1,.89-.67,2.87-.43.52-3.82-.58-4.2,0-1.48,2.29,4.52,1.15,5.72,1.15,0,2.69-5.88.59-6.78,2.49-.11.25,13-1.16,11.72,2.43-.73,2.1-6-1.26-7.13,1-.17.34,5.7,1.1,6.2,1-.07.43-10.8,1.15-12,1.15-.25.82,1.77,1.47,2.3,1.91-.3,3.19-8.21-1.11-5.61,3.81,1.79,3.38,6,1.51,8.46,3.16-1.94,2.67-1.87.74-1.49,4.28.18,1.64,3.44.37.55,2.87-1.38,1.19-7.46,1.19-9.65,1.14-3.48-.08-7.22-1-10,.84a12.6,12.6,0,0,0-2,2c-.34.67-.23,4,.57,4.58,1.1.85,3.37-.19,4.29.57,2.25,1.84-.16,3.44.88,5.15.55.89,3.59,3.73,4.27,4.58.52.64,1.88,1.87,2.6,2.91,1,1.43.62,2.44,1.89,3.56,2.24,2,5.66,2.22,8.12,4.14,1.86,1.45,2.29,2.41,4.5,4,2.76,1.95-.82,2,4.43,2.48,0,0,.82-1.06,1-1,2.33.2,13.82,2.29,13.57,2.56.65.87,2.27.06,2.27-.85,2.81,0,5.37,1.4,8.29,1.72,1.28.14,2.28-.36,4,.58.81-.92,5.69.54,7.11.56,2.77,0,20.54.82,20,.85,2.29-.15,10.53-1,11.12.31,1.52-1.44,11.37-1.44,13.78-1.73,3.7-.45,7.47-.13,10.3-.58,5-.77,9.58,0,13.73.58,2.6.33,143.42-.78,168.09-1.72,10.88-.42,25.81,0,36.28,0,3.54,0,34,1.06,34,0,0-.48-7.66-1.17-8.11-1.15a24.85,24.85,0,0,1-5.85.09,51.74,51.74,0,0,0-7.23-.37,35.42,35.42,0,0,1-4.83.29,26.57,26.57,0,0,1-2.8-1.06c-1-.21-1.16,1.34-2.1,1.06a.9.9,0,0,0-.57-1.15c.43-2.17,24.68-.6,26.33-.57,1.29,0,2.64-.5,4.22-.5a66.55,66.55,0,0,1,6.67.2,164.81,164.81,0,0,0,18.55-.27c1,0,19.52-4.74,16-7.44h-4.28C411.35,82.05,416.34,69.33,415.93,69.33Z"></path>
                </svg>
              </div>
              <div className={classes.paragraph_04}>Beginner</div>
              {roadmap.map((item) => (
                <div
                  className={`${classes.roadmap} ${
                    item.id === 2 || item.id === 4 ? classes.right : ""
                  }`}
                  key={item.id}
                >
                  <div className={classes.title}>{item.title}</div>
                  <div className={classes.text}>
                    {item.text.map((text, index) => (
                      <ul>
                        <li key={index}>{text}</li>
                      </ul>
                    ))}
                  </div>
                </div>
              ))}
              <button
                className={classes.btn_02}
                onClick={() => setIsOpenConsultancy(true)}
              >
                Tư vấn thêm về khóa học
              </button>
            </div>
          </div>
        </div>

        <div
          className={`${classes.context_05} ${
            visibleSections.context_05 ? classes.visible : ""
          }`}
          ref={sectionRefs.context_05}
          id="context_05"
        >
          <h1>
            <span style={{ color: `red` }}>300+</span> Giáo viên xuất sắc
          </h1>
          <h2>
            Giàu nhiệt huyết và kinh nghiệm sẵn sàng cùng bạn chinh phục đỉnh
            IELTS
          </h2>

          <div className={classes.teacher_wrapper}>
            {teacher.map((item) => (
              <div className={classes.teacher} key={item.id}>
                <img src={item.image} alt="" />
                <div className={classes.body}>
                  <h3>
                    {item.name} - <span>{item.skill}</span>
                  </h3>
                  {item.description.map((text, index) => (
                    <ul>
                      <li key={index}>{text}</li>
                    </ul>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`${classes.context_06} ${
            visibleSections.context_06 ? classes.visible : ""
          }`}
          ref={sectionRefs.context_06}
          id="context_06"
        >
          <div className={classes.wrapper}></div>
          <div className={classes.body}>
            <h1>Cảm nhận của học viên sau khóa học</h1>

            <div className={classes.feedback_video_wrapper}>
              {feedback_videos.map((item, index) => (
                <div className={classes.feedback_video} key={index}>
                  <iframe
                    src={item}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </div>

            <div className={classes.feedback_card_wrapper}>
              {feedback_cards.map((item, index) => (
                <div className={classes.feedback_card} key={index}>
                  <img src={item.image} alt="" />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
            <button
              className={classes.btn_03}
              onClick={() => setIsOpenConsultancy(true)}
            >
              Nhận tư vấn khóa học
            </button>
          </div>
        </div>

        <Element name="signup" className="element"></Element>

        <div
          className={`${classes.context_07} ${
            visibleSections.context_07 ? classes.visible : ""
          }`}
          ref={sectionRefs.context_07}
          id="context_07"
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
          className={`${classes.context_08} ${
            visibleSections.context_08 ? classes.visible : ""
          }`}
          ref={sectionRefs.context_08}
          id="context_08"
        >
          <Course />
        </div>

        <div className={classes.context_09}>
          <FacebookSocialPlugin />
        </div>
      </div>
    </div>
  );
};

export default CapToc;
