import React from "react";
import "./Services.css";

const services = [
  "Web Design",
  "Frontend Development",
  "Quality Assurance",
  "UI/UX Design",
  "Responsive Website Development"
];

const Services = () => (
  <section id="services" className="services-section">
    <h2 className="services-title">Services</h2>
    <ul className="services-list">
      {services.map(service => (
        <li key={service} className="service-item">{service}</li>
      ))}
    </ul>
  </section>
);

export default Services;
