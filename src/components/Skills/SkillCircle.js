import React from "react";
import "./SkillCircle.css";

function SkillCircle({ skill, percent }) {
  return (
    <div className="skill-circle">
      <svg viewBox="0 0 36 36" className="circular-chart">
        <path
          className="circle-bg"
          d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="circle"
          strokeDasharray={`${percent}, 100`}
          d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <text x="18" y="20.35" className="percentage">{percent}%</text>
      </svg>
      <p className="skill-name">{skill}</p>
    </div>
  );
}

export default SkillCircle;