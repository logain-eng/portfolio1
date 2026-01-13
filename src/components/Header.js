import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import "./Home.css";
function Header() {
  const handleScrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const y = element.getBoundingClientRect().top + window.pageYOffset - 200; // عدّلي 80 حسب ارتفاع الهيدر
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};
  return (
   <header id="home" className="navbar">
  <h1 className="logo">Portfolio</h1>

  <div className="nav-right">
    <ul className="nav-links">
      <li><a href="#home" className="nav-link">Home</a></li>
<li>
  <button className="nav-link" onClick={() => handleScrollTo("skills")}>
    Skills
  </button>
</li>    
<li>
  <button className="nav-link" onClick={() => handleScrollTo("projects")}>
    Projects
  </button>
</li>    </ul>

    <div className="social-icons">
      <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
      <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
      <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
    </div>

    <button className="connect-button">Let's Connect</button>
  </div>
</header>
  );
}

export default Header;