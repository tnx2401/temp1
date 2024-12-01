import React from "react";
import classes from "./Staff.module.scss";
import Course from "../../../assets/Course/Course";
import { cards, videoCards, staffCards } from "./data.js";
import useVisibleSections from "../../../assets/useVisibleSections";
import { useOutletContext } from "react-router-dom";

export const Staff = () => {
  const { courseRef } = useOutletContext();
  const { visibleSections, sectionRefs } = useVisibleSections([
    "context00",
    "context01",
    "context02",
    "context03",
  ]);
  return (
    <div className={classes.container}>
      <div className={classes.hero_img}></div>
      <div className={classes.content}>
        <div
          className={`${classes.context_00} ${
            visibleSections.context00 ? classes.visible : ""
          }`}
          ref={sectionRefs.context00}
          id="context00"
        >
          <h1>500+ giáo viên truyền cảm hứng</h1>
          <div className={classes.card_wrapper}>
            {cards.map((card, idx) => (
              <div className={classes.card} key={idx}>
                <img src={card.imgPath} alt="" />
                <h2>{card.title}</h2>
                <p>{card.content}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`${classes.context_01} ${
            visibleSections.context01 ? classes.visible : ""
          }`}
          ref={sectionRefs.context01}
          id="context01"
        >
          {videoCards.map((videoCard, idx) => (
            <div key={idx} className={classes.card}>
              <iframe
                src={videoCard.link}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <h1>{videoCard.title}</h1>
            </div>
          ))}
        </div>

        <div
          className={`${classes.context_02} ${
            visibleSections.context02 ? classes.visible : ""
          }`}
          ref={sectionRefs.context02}
          id="context02"
        >
          {staffCards.map((card, idx) => (
            <div className={classes.card} key={idx}>
              <div
                className={classes.card_img}
                style={{ backgroundImage: `url(${card.img})` }}
              ></div>
              <div className={classes.line}>
                <div className={classes.icon}></div>
              </div>
              <ul>
                {card.content.map((content, idx) => (
                  <li key={idx}>{content}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className={`${classes.context_03} ${
            visibleSections.context03 ? classes.visible : ""
          }`}
          ref={sectionRefs.context03}
          id="context03"
        >
          <div ref={courseRef}>
            <Course />
          </div>
        </div>
      </div>
    </div>
  );
};
