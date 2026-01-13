import React from "react";
import { TypeAnimation } from "react-type-animation";
import Header from "./Header";
import "./Home.css";
import SkillsCarousel from "./Skills/SkillsCarousel";
import SkillCircle from "./Skills/SkillCircle";
import ProjectsSection from "./Projects/ProjectsSection";



function Home() {
  return (
    <div id="home" className="home-container">

      <Header />
<div className="content">
  <div className="text-section">
    <h1 className="h1">Welcome All In My Portfolio</h1>
    <h2>Hi! I'm Logain Hussain Al-Dakhil,</h2>

    <TypeAnimation
      sequence={[
        "React JS Developer", 1000,
        "Web Developer", 1000,
        "Web Designer", 1000,
        "FrontEnd Developer", 1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="typing"
    />

    <p style={{ color: "#787878", fontSize: "0.9rem", marginTop: "50px" }}>
      Hello everyone! I have 8 months of hands-on experience in web development.
    </p>
    <button className="connectt-button">
  Let's Connect
  <span className="arrow-circle">
    <span className="arrow">→</span>
  </span>
</button>
  </div>
  

  <div className="robot-section">
    <img src="/falcon.png" alt="Falcon" className="robot" />
  </div>
</div>

      {/* ✅ سكشن المهارات */}
      < div id="skills" className="skills-wrapper">
        <SkillsCarousel />
        <ProjectsSection />
      </div>


      

    </div>
  );
}

export default Home;