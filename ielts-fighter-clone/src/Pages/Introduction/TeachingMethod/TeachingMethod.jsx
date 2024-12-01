import React from "react";
import classes from "./TeachingMethod.module.scss";
import { useState } from "react";
import Course from "../../../assets/Course/Course";
import useVisibleSections from "../../../assets/useVisibleSections";
import { useOutletContext } from "react-router-dom";

const TeachingMethod = () => {
  const { courseRef } = useOutletContext();
  const { visibleSections, sectionRefs } = useVisibleSections([
    "context00",
    "context01",
    "context02",
    "context03",
    "context04",
  ]);
  const [currentMethod, setCurrentMethod] = useState("refined knowledge");

  const methods = [
    {
      name: "refined knowledge",
      title: "Chắt lọc kiến thức, nâng band hiệu quả",
      content:
        "Tính chắt lọc kiến thức thể hiện ở 4 điểm nổi bật chỉ có duy nhất tại IELTS Fighter: Học những gì học viên cần, không học tất cả những gì tiếng Anh có. Khoá đào tạo tinh gọn, lộ trình cá nhân hóa cho từng học viên. Công cụ giảng dạy Slide hiện đại, giáo trình chuyên sâu, thiết kế riêng biệt theo level. Giảng viên chuyên môn giỏi, truyền thụ kiến thức dễ hiểu, dễ nhớ.",
      card: "https://w.ladicdn.com/s800x550/5b57f38472976020da8e5611/screenshot-2023-11-17-145556-20231117075612-lxpy2.png",
    },
    {
      name: "practice",
      title: "Đẩy mạnh tương tác, tối đa hóa thực hành",
      content:
        'Quan niệm "Ngôn ngữ là một bộ môn thiên về kỹ năng, ta ghi nhớ kiến thức, nhưng thực hành kỹ năng" nên ở bất kỳ level nào, học viên đều được dành tối đa thời gian để khám phá, luyện tập và thực hành các kỹ năng tiếng Anh theo quy tắc 3 bước S-K-S (Skills - Knowledge - Skills). Tính thực hành được đẩy lên cao nhất với các hoạt động trong giờ học chính, lớp gia sư nhóm nhỏ, bổ trợ cuối tuần hay luyện tại nhà với bài tập được chắt lọc. "Practice makes perfect" là điều quan trọng khi học bất kỳ ngôn ngữ nào nên tại IELTS Fighter, đây chính là mảnh ghép quan trọng làm nên phương pháp RIPL chuẩn mực, toàn diện.',
      card: "https://w.ladicdn.com/s750x600/5b57f38472976020da8e5611/screenshot-2023-11-17-151550-20231117081606-leoej.png",
    },
    {
      name: "inspiration",
      title: "Cảm hứng dẫn dắt thành công",
      content:
        'Sứ mệnh của đội ngũ giáo viên là "sứ giả truyền cảm hứng". Mỗi giáo viên luôn tâm niệm cần xóa bỏ những định kiến, sợ hãi, rụt rè của người học với bộ môn này, truyền tải năng lượng tích cực, khai phá tiềm năng học viên, giúp người học nhận ra giá trị bản thân và mỗi giờ học luôn tràn đầy niềm vui. Giáo viên kết nối, tương tác thường xuyên với học viên để thấu hiểu, trở thành người bạn đồng hành đáng tin cậy, cùng học viên bứt phá điểm số.',
      card: "https://w.ladicdn.com/s750x550/5b57f38472976020da8e5611/screenshot-2023-11-17-151226-20231117081249-noer9.png",
    },
    {
      name: "logic",
      title: "Tiếp cận kiến thức thực hành kỹ năng theo cách logic dễ nhớ",
      content:
        "Học viên được tiếp cận kiến thức – thực hành kỹ năng theo các bước cụ thể: Đặt vấn đề (Nêu rõ ngữ cảnh áp dụng, tầm quan trọng, tính ứng dụng của chủ điểm kiến thức) -> Phân tích vấn đề (Phân tich cơ sở ngôn ngữ, lý giải công thức ngữ pháp, giúp học viên hiểu sâu vào bản chất) -> Chốt vấn đề (Chốt lại nội dung cần ghi nhớ) -> Mở rộng vấn đề ( Liên hệ thực tế, mở rộng các kiến thức liên quan) -> Luyện tập (Thực hành chủ điểm vừa học)",
      card: "https://w.ladicdn.com/s750x550/5b57f38472976020da8e5611/screenshot-2023-11-17-151505-20231117081523-cfl4t.png",
    },
  ];

  return (
    <div className={classes.container}>
      <div className={classes.hero_img}>
        <div className={classes.wrapper}>
          <div className={classes.text}>
            <h1>Phương pháp đào tạo RIPL độc quyền</h1>
            <h2>Cùng 300.000+ học viên phát triển toàn diện</h2>
          </div>
          <div className={classes.video}>
            <iframe
              width="600"
              height="315"
              src="https://www.youtube.com/embed/-6JJR8a2CNY?si=qUBvWoJ-1kBEBsL4&autoplay=1&mute=1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className={classes.content}>
        <div
          className={`${classes.context_00} ${
            visibleSections.context00 ? classes.visible : ""
          }`}
          ref={sectionRefs.context00}
          id="context00"
        >
          <h1 className={classes.paragraph_00}>
            7 năm <span>Không ngừng hoàn thiện</span>
          </h1>
          <h2 className={classes.paragraph_01}>Phương pháp đào tạo</h2>
          <div className={classes.line}></div>

          <div className={classes.container}>
            <div className={classes.left_img}></div>

            <div className={classes.child_container}>
              <div className={classes.paragraph_02}>
                <h1>
                  RIPL - Phương pháp đào tạo toàn diện độc quyền IELTS Fighter
                </h1>
                <p>
                  RIPL là phương pháp đào tạo đẩy mạnh năng lực nắm bắt và sử
                  dụng ngôn ngữ tiếng Anh của học viên nhờ tính truyền cảm hứng,
                  tính thực hành, luyện thi tinh gọn và logic.
                </p>
              </div>
              <div className={classes.right_img}></div>
            </div>
          </div>
        </div>

        <div
          className={`${classes.context_01} ${
            visibleSections.context01 ? classes.visible : ""
          }`}
          ref={sectionRefs.context01}
          id="context01"
        >
          <div className={classes.paragraph_03}>
            <h1>Phương pháp đào tạo RIPL độc quyền</h1>
            <div className={classes.shape}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                preserveAspectRatio="none"
                viewBox="0 0 416.07 97.96"
                fill="rgba(242, 144, 84, 1.0)"
              >
                <path d="M415.93,69.33c-8.52,0-18.6.57-28,.57,0-1,2.1-2.42,2.87-3,1.16-.85,3.13-.63,4.56-3.17.44-.77-1.24-1.84,0-3.23.74-.84,2-1,2.56-1.48.74-.61,7.84-4.58,2-4.58.39-2.15,7.7-1,7.44-3-.08-.65-19.25-1-21.17-1,0-2.35,5.1,0,5.72-1.14.83-1.52-7.66-1.12-8.57-1.91.82-2.44.88.25-.62-2.46,5.08-4.78,11.85-2.2,17.75-5.61-1.82-1.61-8.17.68-10.5.82-4.22.26-13.52,1.43-16.36-1.42,1.42-1.48,9.88-.82,10.19-1.63.73-1.91-10.36.43-10.77-2.1.89.27,1.44-1.74.81-2.28.77.66-4.6,0-4.25-1.15.93.41,1.5.22,1.74-.56,0-1.2-6.2-1.73-6.89-1.73,0-3,12.9-4.62,14.82-4.87,3.53-.44,8.16-1.21,11.51-1.42,1.6-.11,4-.51,5.15-.58,2.11-.12,4,.2,5.79-.45,1-.36-.2-1.26-.64-1.26,0-.68,4.94-3.21,5.72-3.44,2.43-.7,6.7.53,8.51-1.39-1-1.1-10.83-.83-12.38-.9-4.3-.19-8.14-.07-12.08-.57-7.41-.94-14.46-1.16-21.82-2.29-12.21-1.87-24.64-4.48-37.49-5.72C317,5,302,3.93,287.31,3.09,271,2.15,253.49.31,236.68.09,213-.23,190.44.39,167.56.66c-14.71.17-31.73-.19-46.35,1.71-28,3.65-57.48,3-85.56,8-4.31.77-27.23,6.23-18.34,12,1.34.87,4,.65,4.9,1.43.68.58,2.71,4.31,2.58,5.43-.21,1.85,1,.89-.67,2.87-.43.52-3.82-.58-4.2,0-1.48,2.29,4.52,1.15,5.72,1.15,0,2.69-5.88.59-6.78,2.49-.11.25,13-1.16,11.72,2.43-.73,2.1-6-1.26-7.13,1-.17.34,5.7,1.1,6.2,1-.07.43-10.8,1.15-12,1.15-.25.82,1.77,1.47,2.3,1.91-.3,3.19-8.21-1.11-5.61,3.81,1.79,3.38,6,1.51,8.46,3.16-1.94,2.67-1.87.74-1.49,4.28.18,1.64,3.44.37.55,2.87-1.38,1.19-7.46,1.19-9.65,1.14-3.48-.08-7.22-1-10,.84a12.6,12.6,0,0,0-2,2c-.34.67-.23,4,.57,4.58,1.1.85,3.37-.19,4.29.57,2.25,1.84-.16,3.44.88,5.15.55.89,3.59,3.73,4.27,4.58.52.64,1.88,1.87,2.6,2.91,1,1.43.62,2.44,1.89,3.56,2.24,2,5.66,2.22,8.12,4.14,1.86,1.45,2.29,2.41,4.5,4,2.76,1.95-.82,2,4.43,2.48,0,0,.82-1.06,1-1,2.33.2,13.82,2.29,13.57,2.56.65.87,2.27.06,2.27-.85,2.81,0,5.37,1.4,8.29,1.72,1.28.14,2.28-.36,4,.58.81-.92,5.69.54,7.11.56,2.77,0,20.54.82,20,.85,2.29-.15,10.53-1,11.12.31,1.52-1.44,11.37-1.44,13.78-1.73,3.7-.45,7.47-.13,10.3-.58,5-.77,9.58,0,13.73.58,2.6.33,143.42-.78,168.09-1.72,10.88-.42,25.81,0,36.28,0,3.54,0,34,1.06,34,0,0-.48-7.66-1.17-8.11-1.15a24.85,24.85,0,0,1-5.85.09,51.74,51.74,0,0,0-7.23-.37,35.42,35.42,0,0,1-4.83.29,26.57,26.57,0,0,1-2.8-1.06c-1-.21-1.16,1.34-2.1,1.06a.9.9,0,0,0-.57-1.15c.43-2.17,24.68-.6,26.33-.57,1.29,0,2.64-.5,4.22-.5a66.55,66.55,0,0,1,6.67.2,164.81,164.81,0,0,0,18.55-.27c1,0,19.52-4.74,16-7.44h-4.28C411.35,82.05,416.34,69.33,415.93,69.33Z"></path>
              </svg>
            </div>
          </div>

          <div className={classes.container}>
            <div className={classes.video}>
              <iframe
                width="460"
                height="315"
                src="https://www.youtube.com/embed/l53r-rse7F8?si=Hdo7I64aYPWewxtR"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            <div className={classes.methods}>
              <div className={classes.ripl_box}>
                <h1>RIPL</h1>
              </div>
              <button
                onClick={() => {
                  setCurrentMethod("refined knowledge");
                }}
              >
                Refined Knowledge
              </button>
              <button
                onClick={() => {
                  setCurrentMethod("practice");
                }}
              >
                Practice
              </button>
              <button
                onClick={() => {
                  setCurrentMethod("inspiration");
                }}
              >
                Inspiration
              </button>
              <button
                onClick={() => {
                  setCurrentMethod("logic");
                }}
              >
                Logic
              </button>
            </div>
          </div>

          <div className={classes.method_paragraph_container}>
            {methods.map((method) => {
              if (method.name === currentMethod) {
                return (
                  <div className={classes.card} key={method.name}>
                    <div className={classes.paragraph_04}>
                      <h1>{method.name}</h1>
                      <h2>{method.title}</h2>
                      <p>{method.content}</p>
                    </div>

                    <div
                      className={classes.img}
                      style={{ backgroundImage: `url(${method.card})` }}
                    ></div>
                  </div>
                );
              }
            })}
          </div>
        </div>

        <div
          className={`${classes.context_02} ${
            visibleSections.context02 ? classes.visible : ""
          }`}
          ref={sectionRefs.context02}
          id="context02"
        >
          <div className={classes.paragraph_05}>
            <h1>
              Chúng tôi <span>tặng cho học viên</span>
            </h1>
          </div>
          <div className={classes.paragraph_06}>
            <h1>Dịch vụ bổ trợ tối đa, phát huy kỹ năng</h1>
          </div>
          <div className={classes.paragraph_07}>
            <h1>Triệt để</h1>
          </div>
          <div className={classes.container}>
            <div className={classes.left}>
              <p>
                Ngoài lịch học chính thức, đội ngũ IELTS Fighter xây dựng nhiều
                lớp học bổ trợ nhằm củng cố kiến thức trên lớp, tạo môi trường
                thực hành tiếng Anh cũng như phát triển các kỹ năng thiết thực
                cho học viên.
              </p>
              <div className={classes.img_00}></div>
            </div>

            <div className={classes.right}>
              <div className={classes.img_01}></div>
            </div>
          </div>
        </div>

        <div
          className={`${classes.context_03} ${
            visibleSections.context03 ? classes.visible : ""
          }`}
          ref={sectionRefs.context03}
          id="context03"
        >
          <div className={classes.left}>
            <h1>Lớp học bổ trợ hàng tuần</h1>
            <p>
              Tại IELTS Fighter, bên cạnh những giờ học trên lớp, bạn sẽ được
              đào tạo chuyên sâu 2 kỹ năng Writing và Speaking “khó nhằn” của
              bài thi IELTS. Lớp bổ trợ MIỄN PHÍ tổ chức mỗi cuối tuần và được
              giảng dạy bởi những thầy cô giàu kinh nghiệm luyện thi nhất. Tại
              lớp học, bạn được tiếp cận những tài liệu độc quyền dành riêng cho
              2 kỹ năng nói và viết do đội ngũ học thuật IELTS Fighter biên
              soạn. Đặc biệt, các lớp bổ trợ được chia theo trình độ, thầy cô
              xây dựng bài học phù hợp với từng level khác nhau nên hành trình
              luyện tập đễ dàng đạt hiệu quả cao nhất.
            </p>
          </div>

          <div className={classes.right}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/z9XpXhy4W6o?si=WdDK2fbk_VShouEd"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div
          className={`${classes.context_04} ${
            visibleSections.context04 ? classes.visible : ""
          }`}
          ref={sectionRefs.context04}
          id="context04"
        >
          <div ref={courseRef}>
            <Course />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachingMethod;
