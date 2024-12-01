import React, { useEffect, useRef } from "react";
import classes from "./FacebookSocailPlugin.module.scss";

const FacebookSocialPlugin = () => {
  const commentsRef = useRef(null);

  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse(commentsRef.current);
    }
  }, []);
  return (
    <div className={classes.container}>
      <h1>Để lại câu hỏi của bạn ở đây</h1>
      <div
        className="fb-comments"
        data-href="https://english-center-management.vercel.app/"
        data-width="100%"
        data-height="100%"
        data-numposts="5"
      ></div>
    </div>
  );
};

export default FacebookSocialPlugin;
