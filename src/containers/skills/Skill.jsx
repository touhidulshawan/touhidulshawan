import React from "react";
import "./Skill.scss";

const Skill = (props) => {
  return (
    <div className="skill__list__container">
      <span>{props.icon}</span>
      <p>{props.skillText}</p>
    </div>
  );
};

export default Skill;
