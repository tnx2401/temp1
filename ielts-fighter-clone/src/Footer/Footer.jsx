import classes from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={classes.container}>
      <div className={classes.footer}>
        <div className={classes.context_00}>
          <div className={classes.logo}></div>
          <p className={classes.text_00}>
            IELTS Fighter - trung tâm luyện thi IELTS số 1 Việt Nam. Với sứ mệnh
            giúp hàng triệu người Việt đạt 6.5-7.0 IELTS, IELTS Fighter nỗ lực
            mỗi ngày để cùng các bạn học IELTS dễ như ăn bánh, chinh phục được
            đỉnh cao IELTS!
          </p>
          <ul className={classes.text_01}>
            <li>Đào tạo 70.000 học viên IELTS mỗi năm</li>
            <li>Đối tác Bạch kim của IDP Việt Nam</li>
            <li>Đối tác uy tín lâu năm của VnExpress, Viettel, Panasonic...</li>
          </ul>
        </div>
        <div className={classes.context_01}>
          <h2>Thông tin</h2>
          <ul className={classes.text_01}>
            <li>
              <a href="#">Về chúng tôi</a>
            </li>
            <li>
              <a href="#">Đội ngũ giảng viên</a>
            </li>
            <li>
              <a href="#">Hệ thống 60+ cơ sở</a>
            </li>
            <li>
              <a href="#">Phương pháp đào tạo</a>
            </li>
            <li>
              <a href="#">Hoạt động tiêu biểu</a>
            </li>
            <li>
              <a href="#">Học viên điểm cao</a>
            </li>
            <li>
              <a href="#">Feedback của học viên</a>
            </li>
            <li>
              <a href="#">Thi thử IELTS miễn phí</a>
            </li>
          </ul>
        </div>
        <div className={classes.context_01}>
          <h2>Khóa học</h2>
          <ul className={classes.text_01}>
            <li>
              <a href="#">Khóa IELTS online</a>
            </li>
            <li>
              <a href="#">Khóa IELTS mất gốc</a>
            </li>
            <li>
              <a href="#">Khóa IELTS cấp tốc</a>
            </li>
            <li>
              <a href="#">Khóa IELTS 1 kèm 1</a>
            </li>
            <li>
              <a href="#">Khóa IELTS 7.0+</a>
            </li>
            <li>
              <a href="#">Khóa IELTS 6.0-6.5</a>
            </li>
            <li>
              <a href="#">Khóa IELTS 5.0-5.5</a>
            </li>
          </ul>
        </div>
        <div className={classes.context_01}>
          <h2>Liên hệ</h2>
          <ul className={classes.text_01}>
            <li>
              Hotline: <a href="#">0903 411 666</a>
            </li>
            <li>
              Email: <a href="#">chienbinh@ielts-fighter.com</a>
            </li>
          </ul>
          <div className={classes.contact_logo}>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="rgba(227,227,227,1)"
              >
                {" "}
                <path d="M10,16.5V7.5L16,12M20,4.4C19.4,4.2 15.7,4 12,4C8.3,4 4.6,4.19 4,4.38C2.44,4.9 2,8.4 2,12C2,15.59 2.44,19.1 4,19.61C4.6,19.81 8.3,20 12,20C15.7,20 19.4,19.81 20,19.61C21.56,19.1 22,15.59 22,12C22,8.4 21.56,4.91 20,4.4Z"></path>{" "}
              </svg>
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="rgba(227,227,227,1)"
              >
                {" "}
                <path d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z"></path>{" "}
              </svg>
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="rgba(227,227,227,1)"
              >
                {" "}
                <path d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path>{" "}
              </svg>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
