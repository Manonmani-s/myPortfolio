import React from "react";
import { Element } from "react-scroll";
import Clock from "../../assets/clock.jpeg";
import Lavilla from "../../assets/lavilla.jpeg";
import Music from "../../assets/ourStory.jpg";
import Todo from "../../assets/todo.jpg";
import Project from "../Project/Project";
import "./ProjectContainer.css";

const ProjectContainer = () => {
  const projects = [
    {
      img: Clock,
      title: "Analog-Clock-Javasript",
      desc: "Analog-clock using Javascript",
      link: "https://manonmani-s.github.io/analog-clock-javascript/",
    },
    {
      img: Music,
      title: "DrumKit",
      desc: "Drumkit playing Music for the given Keys",
      link: "https://manonmani-s.github.io/Drumkit/",
    },
    {
      img: Lavilla,
      title: "Lavilla",
      desc:
        "Responsive Front End Design for the Interiors and luxury Fabric collections ",
      link: "https://manonmani-s.github.io/la_villa/",
    },
    {
      img: Todo,
      title: "To-Do App",
      desc: "To-Do App using React Components.",
      link: "https://manonmani-s.github.io/to-doApp/",
    },
    /*  {
      img:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
      title: "Final Project",
      desc: "Online selling of the music cds vinyls and digital contents.",
      link: "https://manonmani-s.github.io/la_villa/",
    },
    {
      img:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
      title: "Final Project",
      desc: "Online selling of the music cds vinyls and digital contents.",
      link: "https://manonmani-s.github.io/la_villa/",
    }, */
  ];

  return (
    <div>
      <Element className="projectContainer" id="projects">
        <h1>Projects</h1>
        <p>Glimpse of few Projects during my Web Developemnt Course..</p>
        <div className="projectContainer__projects">
          {projects.map((project, index) => {
            return [
              <Project
                key={index}
                img={project.img}
                title={project.title}
                desc={project.desc}
                link={project.link}
              />,
            ];
          })}
        </div>
      </Element>
    </div>
  );
};

export default ProjectContainer;
