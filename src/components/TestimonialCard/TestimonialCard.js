import React, { useState } from "react";
import "./TestimonialCard.css";
import TestImg from "../../assets/images/testi-1.jpg";

const TestimonialCard = ({ withoutImg, readMore }) => {
  return (
    <div className="card">
      {!withoutImg && <img src={TestImg} alt="" />}
      <h5 className="name">Adon Musk</h5>
      <ReadMore>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </ReadMore>
      <div className="round"></div>
    </div>
  );
};

export default TestimonialCard;

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="description">
      {isReadMore ? text.slice(0, 150) : text}
      <span
        onClick={toggleReadMore}
        className="read-or-hide"
        style={{ color: "black", cursor: "pointer" }}
      >
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};
