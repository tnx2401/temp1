import classes from "./Nav.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Nav({
  handleOpenNavTab,
  handleOpenConsultancy,
  scrollToCourses,
}) {
  const handleNavClick = () => {
    handleOpenNavTab(true);
  };

  const handleConsultancy = () => {
    handleOpenConsultancy(true);
  };

  return (
    <div className={classes.container}>
      <Link>
        <div className={classes.logo}></div>
      </Link>
      <div className={classes.nav_links}>
        <a onClick={handleNavClick}>Về chúng tôi</a>
        <a onClick={handleNavClick}>Giảng viên</a>
        <a onClick={handleNavClick}>Học viên</a>
        <a onClick={handleNavClick}>Khóa học</a>
      </div>
      <div className={classes.nav_buttons}>
        <button className={classes.btn_tuvan} onClick={handleConsultancy}>
          Tư vấn
        </button>
        <button className={classes.btn_dangky} onClick={scrollToCourses}>
          Đăng kí học
        </button>
      </div>
      <div
        className={classes.nav_management}
        id={classes.nav_management}
        onClick={handleNavClick}
      >
        <FontAwesomeIcon icon={faBars} />
      </div>
      <Link id={classes.login} to="/login">
        Đăng nhập
      </Link>
    </div>
  );
}
