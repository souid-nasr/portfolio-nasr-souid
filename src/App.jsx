import React, { useState } from "react";
import "./App.css";
import ProjectContainer from "./components/ProjectContainer/ProjectContainer";
import SkillContainer from "./components/SkillContainer/SkillContainer";
import TopContainer from "./components/TopContainer/TopContainer";
import Navbar from "./components/Navbar/Navbar";
import ExperienceContainer from "./components/ExperienceContainer/ExperienceContainer";
import Contact from "./components/Contact/Contact";
import TransitionsModal from "./components/Modal/Modal";
import Cursor from "./components/Cursor/Cursor.jsx";

function App() {
  const [selected, setSelected] = useState("about");
  const [open, setOpen] = useState(false);
  return (
    <div className="app">
      <Navbar selected={selected} setSelected={setSelected} setOpen={setOpen} />
      <TransitionsModal open={open} setOpen={setOpen} />
      <TopContainer setSelected={setSelected} />
      <SkillContainer />
      <ProjectContainer />
      <ExperienceContainer />
      <Contact />
      <Cursor/>
    </div>
  );
}

export default App;
