import React from "react";
import "./ContactInfo.css";

const ContactInfo = () => (
  <section className="contactinfo-section">
    <h2 className="contactinfo-title">Contact Information</h2>
    <div className="contactinfo-list">
      <div className="contactinfo-item">
        <span role="img" aria-label="Email">📧</span> <span className="contactinfo-label">Email:</span> <a href="mailto:erandisandamali@gmail.com" className="contactinfo-link">erandisandamali@gmail.com</a>
      </div>
      <div className="contactinfo-item">
        <span role="img" aria-label="Phone">📞</span> <span className="contactinfo-label">Phone:</span> <a href="tel:+94771234567" className="contactinfo-link">+94 77 123 4567</a>
      </div>
      <div className="contactinfo-item">
        <span role="img" aria-label="Location">📍</span> <span className="contactinfo-label">Location:</span> Kandy, Sri Lanka
      </div>
    </div>
  </section>
);

export default ContactInfo;
