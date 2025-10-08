import React from "react";
import "./QuickLinks.css";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const QuickLinks = () => (
  <section className="quicklinks-section">
    <h2 className="quicklinks-title">Quick Links</h2>
    <ul className="quicklinks-list">
      {links.map(link => (
        <li key={link.label} className="quicklink-item">
          <a href={link.href} className="quicklink-link">{link.label}</a>
        </li>
      ))}
    </ul>
  </section>
);

export default QuickLinks;
