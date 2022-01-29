import { IconButton } from "@material-ui/core";
import { GitHub, LinkedIn } from "@material-ui/icons";
import React from "react";
import { Element } from "react-scroll";
import "./Contact.css";

const Contact = () => {
  return (
    <Element className="contact" id="contact">
      <h1>Contact</h1>
      <div className="contact__container">
        <p>
          Email : <span>nasr.souid1995@gmail.com</span>
        </p>
        <p>
          Phone : <span>+216 58 140 352</span>
        </p>
        <div className="contact__icons">
          <a
            href="https://www.linkedin.com/in/nasr-souid-b3b799172"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <LinkedIn />
            </IconButton>
          </a>
          <a
            href="https://github.com/souid-nasr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <GitHub />
            </IconButton>
          </a>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
