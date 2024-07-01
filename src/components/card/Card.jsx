import React from "react";
import style from "./Card.module.css";

const Card = ({ title, content, id }) => {
  let slicedAnswer = content.slice(0, 70) + "...";
  return (
    <div className={style.card}>
      <p className={style.question}>{title}</p>
      <p className={style.answer}>{slicedAnswer}</p>
    </div>
  );
};

export default Card;
