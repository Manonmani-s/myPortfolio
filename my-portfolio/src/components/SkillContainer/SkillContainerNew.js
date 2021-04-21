import React from "react";
import { Element } from "react-scroll";
import skillImage from "../../assets/skills.jpg";
import "./SkillContainer.css";

const skillContainer = () => {
  return (
    <div>
      <Element className="skillContainer" id="skills">
        <div className="skillContainer__image">
          <img src={skillImage} alt="" />
        </div>
        <div className="skillContainer__text">
          <h2>SKILLSET</h2>
        </div>
      </Element>
    </div>
  );
};

export default skillContainer;
