import React from "react";
import "./Contact.css";

const Contact = () => (
  <section id="contact" className="contact-section">
    <h2 className="contact-title">Contact Me</h2>
    <p className="contact-intro">
      Feel free to get in touch with me for any collaboration, project ideas, or opportunities.
    </p>
    <div className="contact-details">
      <div className="contact-item">
        <span role="img" aria-label="Phone">📞</span> <span className="contact-label">Phone:</span> <a href="tel:07780922963" className="contact-link">0778092963</a>
      </div>
      <div className="contact-item">
        <span role="img" aria-label="Email">📧</span> <span className="contact-label">Email:</span> <a href="mailto:erasand1998@gmail.com" className="contact-link">erasand1998@gmail.com</a>
      </div>
      <div className="contact-item">
        <span role="img" aria-label="Location">🌐</span> <span className="contact-label">Location:</span> Kandy, Sri Lanka
      </div>
    </div>
  </section>
);

export default Contact;
