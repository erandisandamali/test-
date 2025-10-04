import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-left">
          <h1 className="typing-animation">I am Erandi Sandamali</h1>
          <p className="hero-description">I am a software engineer.</p>
        </div>
        <div className="hero-right">
          <div className="profile-border">
            {/* Place your profile image as 'profile.jpg' in the public folder */}
            <img src="/DSC05710 copy.jpg" alt="Erandi Sandamali" className="profile-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
