import { useEffect } from "react";
import React, { useState, useRef } from "react";
import "./ProjectsSection.css";
import CTASection from "../CTASection/CTASection";
const tabs = ["1st Section", "2nd Section", "3rd Section"];

const projects = [
  {
    title: "Project 1",
    description: "Simple Design With HTML & CSS",
    // image: "/pro1.jpg"
    image: `${process.env.PUBLIC_URL}/pro1.jpg`
  },
  {
    title: "Project 2",
    description: "Design With HTML & CSS",
    image: `${process.env.PUBLIC_URL}/pro2.jpg`
  },
  {
    title: "Project 3",
    description: "Supermarket in bootstrap",
    image: `${process.env.PUBLIC_URL}/pro3.jpg`  },
  {
    title: "Project 4",
    description: "JavaScript Store",
    image: `${process.env.PUBLIC_URL}/pro4.jpg`  },
  {
    title: "Project 5",
    description: "Password Generator",
    image: `${process.env.PUBLIC_URL}/pro5.jpg`  },
  {
    title: "Project 6",
    description: "Responsive Portfolio",
    image: `${process.env.PUBLIC_URL}/pro6.jpg`  }
];

function ProjectsSection() {
  const [activeTab, setActiveTab] = useState(null);
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  // refs لكل سكشن
  const sectionRefs = {
    0: useRef(null),
    1: useRef(null),
    2: useRef(null)
  };

  // عند الضغط على التاب
  const [prevTab, setPrevTab] = useState(null);
  const handleTabClick = (index) => {
  setPrevTab(activeTab);
  setActiveTab(index);

  setTimeout(() => {
    const element = sectionRefs[index]?.current;
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 180; 
      window.scrollTo({
        top: y,
        behavior: "smooth"
      });
    }
  }, 100);
};

  return (
    <div id="projects" className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <p className="projects-intro">
        My name is Logain Hussain Al-Dakhil, I live in Saudi Arabia and these are some of my projects.
      </p>
      <div className="tabs-wrapper">
  <div className="tabs-group">
    {/* {tabs.map((tab, index) => (
         <button
           key={index}
           className={
          `tab-item 
          ${activeTab === index ? "active animate-left" : ""} 
          ${prevTab === index ? "animate-right" : ""}`
           }
          onClick={() => handleTabClick(index)}
           >
         {tab}
        </button> */}
        {tabs.map((tab, index) => {
  const isActive = activeTab === index;
  const isPrev = prevTab === index;

  return (
    <button
      key={index}
      className={`tab-item 
        ${isActive ? "active animate-left" : ""} 
        ${isPrev && !isActive ? "animate-right" : ""}`}
      onClick={() => handleTabClick(index)}
    >
      {tab}
    </button>
  );
})}
   
       
       </div>
       </div>

      {/* Tab Content */}
      <div className="tab-content">
        {(activeTab === null || activeTab === 2) && (
  <p className="projects-introo">
    My name is Logain Hussain Al-Dakhil, I'm 22 Years old, I live in Saudi Arabia and these are some of my projects.
  </p>
)}

        {/* 1st Section */}
        {activeTab === 0 && (
          <div ref={sectionRefs[0]} className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="overlay">
                  <div className="overlay-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 2nd Section */}
        {activeTab === 1 && (
          <div ref={sectionRefs[1]} className="full-width-section">
            <div className="left-image">
           <img src={`${process.env.PUBLIC_URL}/horse2.png`} alt="Contact Illustration" />            </div>

            <div className="contact-form">
              <h2>Get In Touch</h2>
              <form>
                <div className="form-row">
                  <input type="text" placeholder="First Name" />
                  <input type="text" placeholder="Last Name" />
                </div>
                <input type="email" placeholder="Email Address" />
                <input type="tel" placeholder="Phone No." />
                <textarea placeholder="Message"></textarea>
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        )}

        {/* 3rd Section — نفس سكشن 2 */}
        {activeTab === 2 && (
          <div ref={sectionRefs[2]} className="full-width-section">
            <div className="left-image">
              {/* <img src="/horse2.png" alt="Contact Illustration" /> */}
              <img src={`${process.env.PUBLIC_URL}/horse2.png`} alt="Contact Illustration" />
            </div>

            <div className="contact-form">
              <h2>Get In Touch</h2>
              <form>
                <div className="form-row">
                  <input type="text" placeholder="First Name" />
                  <input type="text" placeholder="Last Name" />
                </div>
                <input type="email" placeholder="Email Address" />
                <input type="tel" placeholder="Phone No." />
                <textarea placeholder="Message"></textarea>
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
          
        )}
                {/* <CTASection /> */}
        <CTASection style={{ marginTop: activeTab === 0 ? "70px" : "-100px" }} />

      </div>
    </div>
    
  );
  
}

export default ProjectsSection;