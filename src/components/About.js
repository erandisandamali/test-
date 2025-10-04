import React from "react";
import "./About.css";

const skills = [
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "CSS",
  "Python"
];

const About = () => (
  <section id="about" className="about-section">
    <h2 className="about-title">About Me</h2>
    <p className="about-intro">
      Hi, I'm Erandi Sandamali, a passionate software engineer who loves building modern web applications and learning new technologies.
    </p>
    <div className="about-skills">
      <h3>Skills</h3>
      <ul>
        {skills.map(skill => (
          <li key={skill} className="about-skill">{skill}</li>
        ))}
      </ul>
    </div>
  </section>
);

export default About;
