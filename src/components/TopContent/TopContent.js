import React from "react";
import "./TopContent.css";
import { fadeInLeft } from "react-animations";
import Radium, { StyleRoot } from "radium";
import { Link } from "react-scroll";

const styles = {
  fadeInLeft: {
    animation: "x 2s",
    animationName: Radium.keyframes(fadeInLeft, "fadeInLeft"),
  },
};

const TopContent = ({ setSelected }) => {
  return (
    <StyleRoot>
      <div className="topContent" style={styles.fadeInLeft}>
        <div className="topContent__container">
          <h1>Mr.Nasr Souid</h1>
          <p>Full Stack Web  Developer</p>
          <a
            href="https://drive.google.com/file/d/1GOO_DmyOLw-pxsy6-i2qFrslHaPUhxVC/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="topContent__downloadButton">Download CV</button>
          </a>
          <Link to="projects" smooth={true} duration={500}>
            <button
              className="topContent__workButton"
              onClick={() => setSelected("projects")}
            >
              My Work
            </button>
          </Link>
        </div>
      </div>
    </StyleRoot>
  );
};

export default TopContent;
