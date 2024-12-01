import classes from "./Card.module.scss";
import React from "react";

export default function Card({ name, description, imageLink }) {
  return (
    <div className={classes.card}>
      <div className={classes.inner_card}>
        <div className={classes.text}>
          <h2>{name}</h2>
          <h4>{description}</h4>
        </div>

        <img src={imageLink} alt="" />
      </div>
    </div>
  );
}
