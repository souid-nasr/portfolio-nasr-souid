import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";

const Navbar = ({ selected, setSelected, setOpen }) => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <h1>
          Nasr<span>Souid</span>
        </h1>
      </div>
      <div className="navbar__right">
        <Link to="about" smooth={true} duration={500}>
          <h4
            className={
              selected === "about" ? "navbar__right--active" : undefined
            }
            onClick={() => setSelected("about")}
          >
            About Me
          </h4>
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          <h4
            className={
              selected === "skills" ? "navbar__right--active" : undefined
            }
            onClick={() => setSelected("skills")}
          >
            Skills
          </h4>
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          <h4
            className={
              selected === "projects" ? "navbar__right--active" : undefined
            }
            onClick={() => setSelected("projects")}
          >
            Projects
          </h4>
        </Link>
        <Link to="exp" smooth={true} duration={500}>
          <h4
            className={selected === "exp" ? "navbar__right--active" : undefined}
            onClick={() => setSelected("exp")}
          >
            Experience
          </h4>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <h4
            className={
              selected === "contact" ? "navbar__right--active" : undefined
            }
            onClick={() => setSelected("contact")}
          >
            Contact
          </h4>
        </Link>
        <h4 className="navbar__right--semiactive" onClick={() => setOpen(true)}>
          Join with Me
        </h4>
      </div>
    </div>
  );
};

export default Navbar;
