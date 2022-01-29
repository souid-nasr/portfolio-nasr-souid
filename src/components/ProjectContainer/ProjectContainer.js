import React from "react";
import Project from "./Project/Project";
import "./ProjectContainer.css";
import { Element } from "react-scroll";
import img1 from "../../assets/project1.png";
import img2 from "../../assets/project2.png";
import img3 from "../../assets/project3.png";


const ProjectContainer = () => {
  const client_projects = [
    {
      img: img1,
      title: 
      "Artificial Intelligence React News Application",
      desc:
        "An Artificial Intelligence React News Application using Alan AI. It allows user to control absolutely everything in the app using your voice.",
      tech:" #ReactJS #ViteJS #Alan AI  #React Bootsrap  #CSS #Material UI #News API",
      link: "https://github.com/souid-nasr/news-app",
    },
    {
      img: img2,
      title: "Admin Dashboard for employees management",
      desc:
        "This system can manage employee activities and introduce reliable methods for attendance logs for the administrator.",
      tech:"ReactJs #ViteJS #React Bootsrap  #CSS #SCSS #Material UI #NodeJS #ExpressJS #MongoDB", 
      link: "https://github.com/souid-nasr/employees-managemant",
    },
    {
      img: img3,
      title: "Nasr Academy",
      desc:
        "This platform facilitates communication between teachers and students, both inside and outside the school. It also saves time and paper, facilitates the creation of lessons or the distribution of projects and simplifies the organisation of school work.It is used in city corporations to handle complaints for particular areas corporation.",
      tech:"ReactJs #React Bootsrap  #CSS #SCSS #Material UI #NodeJS #ExpressJS #MongoDB",
      link: "https://nasr-academy-nasr-souid.vercel.app",
    }
  ];

  return (
    <Element className="projectContainer" id="projects">
      <h1>Last Projects</h1>
      <p>
      “Your website is the center of your digital ecosystem, like a brick and mortar location, 
      the experience matters once a customer enters, 
      just as much as the perception they have of you before they walk through the door.” - Leland Dieno
      </p>
        <div className="projectContainer__projects">
          {client_projects.map((project, index) => (
            <Project
              key={index}
              img={project.img}
              desc={project.desc}
              tech={project.tech}
              title={project.title}
              link={project.link}
            />
          ))}
        </div>
    </Element>
  );
};

export default ProjectContainer;
