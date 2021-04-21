import React from "react";
import Bootstrap from "../../assets/SkillsImages/bootstrap.svg";
import CSS3 from "../../assets/SkillsImages/css3.svg";
import GitHub from "../../assets/SkillsImages/github.svg";
import HTML5 from "../../assets/SkillsImages/html5.svg";
import JavaScript from "../../assets/SkillsImages/javascript.svg";
import Material from "../../assets/SkillsImages/material-ui.svg";
import MongoDB from "../../assets/SkillsImages/mongodb.svg";
import Node from "../../assets/SkillsImages/nodejs.svg";
import ReactJS from "../../assets/SkillsImages/react.svg";
import Sass from "../../assets/SkillsImages/sass.svg";
import "./Skills.css";

const Skills = () => {
  const logos = [
    HTML5,
    CSS3,
    JavaScript,
    ReactJS,
    Sass,
    Bootstrap,
    GitHub,
    Material,
    MongoDB,
    Node,
  ];
  return (
    <section className="skills" data-aos="fade-right">
      <h1>Skills</h1>
      <div className="skills-flex-container">
        {logos.map((value, index) => {
          return <Skill key={index} skill={value} />;
        })}
      </div>
    </section>
  );
};

const Skill = ({ skill }) => (
  <img className="skill-logo skill-transition" src={skill} alt="" />
);

export default Skills;
