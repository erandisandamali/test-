import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal website created using HTML, CSS, and JavaScript to showcase my skills and projects."
  },
  {
    title: "Login System",
    description: "A simple authentication system developed with PHP and MySQL, featuring login, logout, and a user dashboard."
  },
  {
    title: "Drug Management System",
    description: "A hospital drug stock management application built with PHP, MySQL, and XAMPP, designed to handle medicine inventory."
  },
  {
    title: "Training Record Book",
    description: "A project developed during my training period to maintain and track weekly tasks and activities."
  }
];

const Projects = () => (
  <section id="projects" className="projects-section">
    <h2 className="projects-title">Projects</h2>
    <div className="projects-list">
      {projects.map((project, idx) => (
        <div key={idx} className="project-card">
          <h3 className="project-name">{project.title}</h3>
          <p className="project-desc">{project.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
