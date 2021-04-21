import React, { useState } from "react";
import "./App.css";
import Contact from "./components/Contact/Contact";
import ExperienceContainer from "./components/ExperienceContainer/ExperienceContainer";
import Header from "./components/Header/Header";
import ProjectContainer from "./components/ProjectContainer/ProjectContainer";
// import SkillContainer from "./components/SkillContainer/SkillContainer";
// import SkillContainerNew from "./components/SkillContainer/SkillContainerNew";
import Skills from "./components/SkillContainer/Skills";
import TopContainer from "./components/TopContainer/TopContainer";

const App = () => {
  const [selected, setSelected] = useState("about");
  return (
    <div>
      <Header selected={selected} setSelected={setSelected} />
      <TopContainer setSelected={setSelected} />
      {/* <SkillContainer /> */}
      {/* <SkillContainerNew /> */}
      <Skills />
      <ProjectContainer />
      <ExperienceContainer />
      <Contact />
    </div>
  );
};

export default App;
