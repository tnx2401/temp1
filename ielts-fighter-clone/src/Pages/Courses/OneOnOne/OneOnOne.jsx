import React from "react";
import classes from "./OneOnOne.module.scss";
import SignUpForm from "../../../assets/SignUpForm/SignUpForm";
import Course from "../../../assets/Course/Course";
import useVisibleSections from "../../../assets/useVisibleSections";
import { useOutletContext } from "react-router-dom";
import { Element, scroller } from "react-scroll";
import FacebookSocialPlugin from "../../../assets/FacebookSocialPlugin/FacebookSocialPlugin";
import { useState, useEffect } from "react";
import axios from "axios";

const OneOnOne = () => {
  const { courseRef, setIsOpenConsultancy } = useOutletContext();
  const [course, setCourse] = useState(null);
  const { visibleSections, sectionRefs } = useVisibleSections([
    "context_00",
    "context_01",
    "context_02",
    "context_03",
    "context_04",
    "context_05",
    "context_06",
  ]);

  useEffect(() => {
    axios
      .get(
        "https://determined-freedom-production.up.railway.app/api/v1/khoahoc/3"
      )
      .then((res) => {
        setCourse(res.data);
      });
  }, []);

  const scrollToSignUp = () => {
    scroller.scrollTo("signup", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -200,
    });
  };

  const list = [
    {
      id: 1,
      img: "https://w.ladicdn.com/s550x500/5b57f38472976020da8e5611/giao-vien-day-truc-tuyen-yen-nhi-1-20200326095046.png",
      title: "Muốn tận dụng tối đa thời gian, nỗ lực hết sức",
      text: "Càng trong thời dịch, ai biết tối đa hóa thời gian để nâng cao giá trị bản thân, sẽ giành ưu thế lớn trong tương lai. Bạn hiểu rằng: Khoản đầu tư cho bản thân đột phá, là khoản đầu tư sinh lời nhất.",
    },
    {
      id: 2,
      img: "https://w.ladicdn.com/s600x500/5b57f38472976020da8e5611/bui-duc-hung-20210726181236.jpg",
      title: 'Thứ bạn đặt lên trên hết là "Chất Lượng"',
      text: 'Bạn không muốn hy sinh thời gian quý giá cho 1 khóa học "bình thường" trên thị trường. Cái bạn cần là 1 lộ trình đạt mục tiêu đúng hạn định, và "học đi đôi với hành", ứng dụng tiếng Anh tốt.',
    },
    {
      id: 3,
      img: "https://w.ladicdn.com/s500x600/5b57f38472976020da8e5611/7b555151-196f-4917-887d-2cd78b1c8f78-20200331191755.jpg",
      title: "Bận rộn, muốn chủ động về thời gian và địa điểm",
      text: "Vì công việc quá bận rộn hoặc bạn có nhiều kế hoạch hay phát sinh bất ngờ, nên khó đáp ứng lịch học cố định tại Trung tâm, cần sự linh hoạt.",
    },
    {
      id: 4,
      img: "https://w.ladicdn.com/s600x500/5b57f38472976020da8e5611/lop-1-20200326050459.jpg",
      title: "Không chỉ 1 người thầy Giỏi, bạn cần hơn thế nữa!",
      text: "Bạn cần 1 ai đó Tận Tâm dẫn đường chỉ lối, và trở thành Người Bạn Đồng Hành đáng tin cậy để bạn có thể học riêng tư, xóa bỏ ám ảnh tâm lý tự-ti-xấu-hổ, cho bạn động lực phát triển mỗi ngày",
    },
  ];

  const pros = [
    {
      img: "https://w.ladicdn.com/s750x550/5b57f38472976020da8e5611/mia-day-truc-tuyen-20210618141728.jpg",
      title: "Tự do về phương pháp học: ONLINE - OFFLINE, chỉ cần bạn muốn!",
      text: [
        "Chưa 1 khoá học nào trên thị trường cho phép bạn tự do lựa chọn phương thức học On/Off như ở IELTS Fighter",
        "Tất cả những gì bạn cần làm là lựa chọn thời gian và địa điểm học theo mong muốn",
      ],
    },
    {
      img: "https://w.ladicdn.com/s600x500/5b57f38472976020da8e5611/z6msogmnap-20201124105655.jpg",
      title: "MÔ HÌNH 3 KÈM 1 TRÒ với phương pháp RIPL độc quyền",
      text: [
        "100% tiết học được tương tác đói đa với Giáo viên kèm riêng",
        "Ngoài ra, bạn sẽ có Giảng viên và Chuyên viên Tư vấn trợ giúp bất cứ khi nào cần",
        "Yên tâm CHẮC CHẮN GIỎI với lộ trình thiết kế riêng, đảm bảo kế hoạch đầu ra",
      ],
    },
    {
      img: "https://w.ladicdn.com/s650x500/5b57f38472976020da8e5611/gia-su-1-20200801190142.png",
      title: "Tham gia MIỄN PHÍ Khóa Gia sử 1:1 tại cơ sở",
      text: [
        "Hết lo ngại không có điều kiện luyện Speaking với người giỏi",
        "Được chữa bài Writing miễn phí, giải thích cặn kẽ",
        "Bổ trợ lỗ hổng khi chưa theo kịp bài chính...",
        "Gia nhập môi trường lý tưởng để luyện tập giao tiếp nhuần nhuyễn, thường xuyên",
      ],
    },
    {
      img: "https://w.ladicdn.com/s600x500/5b57f38472976020da8e5611/30b11c5b-c8a3-4632-a481-4ce53f873209-20221017082126-mfwro.jpg",
      title: "Cam kết đầu ra bằng Hợp đồng minh bạch",
      text: [
        '"Bye bye" với quá khứ luôn xấu hổ, tự ti, bất lực vì tiếng Anh không bằng bạn, bằng bè',
        "Chỉ sau ít nhất 120h học, bạn sẽ được phát triển kĩ năng đồng bộ và tự tin thể hiện trong mọi môi trường tiếng Anh một cách tự nhiên, bài bản nhất",
      ],
    },
  ];

  const info = [
    {
      img: "https://w.ladicdn.com/s650x650/5b57f38472976020da8e5611/khoa-writing-6-0-20200414173054.png",
      title: "Tài khoản học trực tuyến",
      text: "Chỉ cần có laptop / máy tính để bàn có webcam, bạn có thể học IELTS thỏa thích dù ở bất cứ đâu: tại nhà, quán cà phê, khi đi du lịch,...",
    },
    {
      img: "https://w.ladicdn.com/s650x650/5b57f38472976020da8e5611/landing-page-khoa-truc-tuyen-phone-ipad-20200322183501.png",
      title: "Thư viện video bài giảng + tài liệu IELTS miễn phí",
      text: "Miễn phí hơn 300+ video bài giảng và 5000+ tài liệu luyện thi IELTS tại ielts-fighter.com",
    },
    {
      img: "https://w.ladicdn.com/s600x600/5b57f38472976020da8e5611/student-book-khoa-truc-tuyen-20200323094504.png",
      title: "Student Book + Hướng dẫn lộ trình học + Plan học tập thường ngày",
      text: "Kế hoạch học tập được lên sẵn chi tiết hàng tuần cùng hướng dẫn lộ trình học IELTS giúp bạn ghi nhận lại hành trình từng ngày chinh phục IELTS của bạn",
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

  return (
    <div className={classes.container}>
      <div className={classes.hero_img}></div>
      <div className={classes.content}>
        <div className={classes.img_00}></div>
        <div className={classes.img_01}></div>
        <div className={classes.img_02}></div>
        <div className={classes.img_03}></div>
        <div className={classes.img_04}></div>
        <button className={classes.btn_00} onClick={scrollToSignUp}>
          Đăng ký ngay
        </button>

        <div className={classes.gap_fill}></div>

        <div
          className={`${classes.context_00} ${
            visibleSections.context_00 ? classes.visible : ""
          }`}
          ref={sectionRefs.context_00}
          id="context_00"
        >
          <div className={classes.text_00}>khóa học này</div>
          <div className={classes.text_01}>không dành cho tất cả mọi người</div>
          <div className={classes.text_02}>
            Hãy chắc chắn rằng nó phù hợp với bạn!
          </div>
          <div className={classes.text_03}>
            Vì khóa học này được xây dựng dành riêng cho những ai đang:
          </div>

          <div className={classes.list}>
            {list.map((item) => (
              <div
                className={`${classes.item} ${
                  item.id === 2 || item.id === 4 ? classes.reverse : ""
                }`}
                key={item.id}
              >
                <div className={classes.body}>
                  <div className={classes.title}>{item.title}</div>
                  <div className={classes.text}>{item.text}</div>
                </div>
                <img src={item.img} alt={item.title} />
              </div>
            ))}
          </div>

          <div className={classes.text_04}>
            Bạn muốn học khi người khác ngủ, chuẩn bị khi người khác chơi bời;
            và có IELTS khi người khác ao ước
          </div>

          <div className={classes.text_05}>
            Thế thì đây sẽ là khóa học IELTS 1-1
          </div>
          <div className={classes.text_06}>được thiết kế riêng cho bạn</div>
        </div>

        <div
          className={`${classes.context_01} ${
            visibleSections.context_01 ? classes.visible : ""
          }`}
          ref={sectionRefs.context_01}
          id="context_01"
        >
          <div className={classes.shape_00}></div>
          <div className={classes.shape_01}></div>
          <div className={classes.shape_02}></div>
          <div className={classes.shape_03}></div>
          <div className={classes.background}></div>
          <div className={classes.text_07}>
            4 quyền lợi <span>đỉnh của đỉnh</span>
          </div>
          <div className={classes.text_08}>
            Chỉ tìm thấy ở Khóa học IELTS đặc biệt này!
          </div>

          <div className={classes.list_pros}>
            {pros.map((item) => (
              <div className={classes.item_pros} key={item.id}>
                <img src={item.img} alt={item.title} />
                <div className={classes.body_pros}>
                  <div className={classes.title_pros}>{item.title}</div>
                  <div className={classes.text_pros}>
                    {item.text.map((text, index) => (
                      <div key={index}>{text}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={classes.text_09}>
            Không lãng phí thời gian và tiền bạc vào các kiến thức không cần
            thiết. Phương châm của IELTS Fighter chính là "Không dạy những gì
            tiếng Anh có, chỉ dạy những gì Học viên cần".
          </div>
          <div className={classes.text_10}>Học thực tế - Áp dụng ngay!</div>
          <button
            className={classes.btn_01}
            onClick={() => setIsOpenConsultancy(true)}
          >
            Đăng ký tư vấn
          </button>
        </div>

        <div
          className={`${classes.context_02} ${
            visibleSections.context_02 ? classes.visible : ""
          }`}
          ref={sectionRefs.context_02}
          id="context_02"
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
          className={`${classes.context_03} ${
            visibleSections.context_03 ? classes.visible : ""
          }`}
          ref={sectionRefs.context_03}
          id="context_03"
        >
          <h1>Đăng ký học ngay - Rinh quà cực đã!</h1>

          <div className={classes.list_info}>
            {info.map((item) => (
              <div className={classes.item_info} key={item.id}>
                <img src={item.img} alt={item.title} />
                <div className={classes.body_info}>
                  <div className={classes.title_info}>{item.title}</div>
                  <div className={classes.text_info}>{item.text}</div>
                </div>
              </div>
            ))}
          </div>

          <h2>
            Tất cả những gì bạn cần để chinh phục 7.0 IELTS đều có ngay đây!
          </h2>
          <div className={classes.shape_05}></div>
          <button className={classes.btn_03} onClick={scrollToSignUp}>
            Tôi muốn đăng ký ngay
          </button>
        </div>

        <div
          className={`${classes.context_04} ${
            visibleSections.context_04 ? classes.visible : ""
          }`}
          ref={sectionRefs.context_04}
          id="context_04"
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

        <Element name="signup" />

        <div
          className={`${classes.context_05} ${
            visibleSections.context_05 ? classes.visible : ""
          }`}
          ref={sectionRefs.context_05}
          id="context_05"
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
          className={`${classes.context_06} ${
            visibleSections.context_06 ? classes.visible : ""
          }`}
          ref={sectionRefs.context_06}
          id="context_06"
        >
          <Course />
        </div>

        <div className={classes.context_07}>
          <FacebookSocialPlugin />
        </div>
      </div>
    </div>
  );
};

export default OneOnOne;
