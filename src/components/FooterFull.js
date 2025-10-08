import React from "react";
import "./FooterFull.css";

const FooterFull = () => (
  <footer className="footer-full">
    <div className="footer-full-title">Erandi Sandamali</div>
    <div className="footer-full-sections">
      <div className="footer-full-section">
        <h3 className="footer-full-section-title">Services</h3>
        <ul className="footer-full-list">
          <li>Web Design</li>
          <li>Frontend Development</li>
          <li>Quality Assurance</li>
          <li>UI/UX Design</li>
          <li>Responsive Website Development</li>
        </ul>
      </div>
      <div className="footer-full-section">
        <h3 className="footer-full-section-title">Quick Links</h3>
        <ul className="footer-full-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="footer-full-section">
        <h3 className="footer-full-section-title">Contact Me</h3>
        <ul className="footer-full-list">
          <li>Email: <a href="mailto:erandisandamali@gmail.com">erandisandamali@gmail.com</a></li>
          <li>Phone: <a href="tel:+94771234567">+94 77 123 4567</a></li>
          <li>Location: Kandy, Sri Lanka</li>
        </ul>
      </div>
    </div>
  </footer>
);

export default FooterFull;
