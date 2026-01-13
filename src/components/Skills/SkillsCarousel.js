

import React, { useState } from "react";
import SkillCircle from "./SkillCircle";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./SkillsCarousel.css";

const skills = [
  { skill: "HTML5", percent: 95 },
  { skill: "CSS3", percent: 95 },
    { skill: "JavaScript(ES6+)", percent: 85 },
  { skill: "Responsive Design", percent: 90 },
  { skill: "JavaScript", percent: 90 },
  { skill: "React JS", percent: 85 },
  { skill: "Bootstrap", percent: 90 },
  { skill: "frontEnd Development", percent: 90 },
  
];

function SkillsCarousel() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleSkills = skills.slice(startIndex, startIndex + 3);

  const next = () => {
    if (startIndex + 3 < skills.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="skills-section">
              <h1 className="skills-titlee">Skills </h1>
      <h2 className="skills-title">You Can See My Skills Here</h2>
      <div className="skills-carousel">
        <button onClick={prev} className="arrow-btn"><FaArrowLeft /></button>
        <div className="skills-list">
          {visibleSkills.map((item, index) => (
            <SkillCircle key={index} skill={item.skill} percent={item.percent} />
          ))}
        </div>
        <button onClick={next} className="arrow-btn"><FaArrowRight /></button>
      </div>
    </div>
  );
}

export default SkillsCarousel;