import React from "react";
import "./CTASection.css";
import { FaLinkedin, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";


function CTASection({ style }) {
  return (
         <div className="cta-section" style={style}>
          <div className="cta-box">
        <p className="cta-text">
          See My Projects At Once & leave Here Your E-mail Address
        </p>
        <div className="email-wrapper">
          <input type="email" placeholder="Email Address" />
          <button type="submit" className="inline-submit">Submit</button>
        </div>

         <div className="cta-bottom">
           <a href="#home" className="cta-logo">Portfolio</a>


        <div className="social-iconss">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
          </div>
      </div>
      </div>
      

      <p className="footer-text">
        --© Copyrights 2024-- All Rights Reserved Here By Abdelrhman Mohamed Keshk
      </p>
    </div>
  );
}

export default CTASection;