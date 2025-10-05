import React from 'react';
import './Hero.css';
import ProfileImage from './ProfileImage';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-left">
          <h1 className="typing-animation">I am Erandi Sandamali</h1>
          <p className="hero-description">I am a software engineer.</p>
        </div>
        <div className="hero-right">
          <ProfileImage src="/DSC05710 copy.jpg" alt="Erandi Sandamali" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
