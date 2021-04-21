import React from "react";
import Particles from "react-particles-js";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-scroll";
import CV from "../../assets/Manonmani.pdf";
import "./TopContent.css";

const TopContent = () => {
  return (
    <div className="topContent">
      <Particles
        params={{
          particles: {
            number: {
              value: 40,
            },
            size: {
              value: 3,
            },
          },
          move: {
            speed: 0.2,
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
      <div className="topContent__container">
        <div className="typewriter">
          <h1>Manonmani Selvakumar</h1>
        </div>
        <div>
          <Zoom>
            {" "}
            <p>Full Stack Web Developer</p>
          </Zoom>
        </div>

        <a href={CV}>
          <button className="topContent__downloadButton">View CV</button>
        </a>
        <Link to="projects" smooth={true} duration={500}>
          <button className="topContent__workButton"> My Work</button>
        </Link>
      </div>
    </div>
  );
};

export default TopContent;
