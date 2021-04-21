import { IconButton } from "@material-ui/core";
import { LinkedIn } from "@material-ui/icons";
import GitHubIcon from "@material-ui/icons/GitHub";
import React from "react";
import { Element } from "react-scroll";
import "./Contact.css";

const Contact = () => {
  return (
    <Element className="contact" id="contact">
      <h1>Contact</h1>
      <div className="contact__container">
        <p>
          E-Mail:<span>mano.hicet@gmail.com</span>
        </p>
        <p>
          Github Username : <span>@Manonmani-s</span>
        </p>
        <div className="contact__icons">
          <a href="http://www.linkedin.com/in/Manonmani-Selvakumar">
            <IconButton>
              <LinkedIn />
            </IconButton>
          </a>
          <a href="https://github.com/Manonmani-s">
            <IconButton>
              <GitHubIcon />
            </IconButton>
          </a>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
