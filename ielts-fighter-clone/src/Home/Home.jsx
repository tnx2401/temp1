import { useState, useRef, useEffect } from "react";
import classes from "./Home.module.scss";
import Nav from "../Navigation/Nav";
import OverlayNav from "../Navigation/OverlayNav";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import Consultancy from "../assets/Consultancy/Consultancy";
import { ScrollRestoration } from "react-router-dom";

export default function Home() {
  const [isOpenNavTab, setIsOpenNavTab] = useState(false);
  const [isOpenConsultancy, setIsOpenConsultancy] = useState(false);
  const courseRef = useRef(null);

  useEffect(() => {
    window.fbAsyncInit = function () {
      FB.init({
        appId: "1644659749724335",
        autoLogAppEvents: true,
        xfbml: true,
        version: "v20.0",
      });
    };
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);

  const scrollToCourses = () => {
    if (courseRef.current) {
      const yOffset = -200;
      const element = courseRef.current;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      {isOpenNavTab && (
        <div
          className={classes.overlay_nav}
          onClick={() => setIsOpenNavTab(false)}
        >
          <OverlayNav setIsOpenNavTab={setIsOpenNavTab} />
        </div>
      )}
      {isOpenConsultancy && (
        <div
          className={classes.overlay_consultancy}
          onClick={() => setIsOpenConsultancy(false)}
        >
          <Consultancy setIsOpenConsultancy={setIsOpenConsultancy} />
        </div>
      )}
      <div className={classes.navigation}>
        <Nav
          handleOpenNavTab={setIsOpenNavTab}
          handleOpenConsultancy={setIsOpenConsultancy}
          scrollToCourses={scrollToCourses}
        />
      </div>
      <ScrollRestoration />
      <Outlet context={{ courseRef, setIsOpenConsultancy }} />
      <Footer />
    </>
  );
}
