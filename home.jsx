import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Gamepad2, Code, Bot, Server } from 'lucide-react';
import '../styles/Home.css';
import mockData from '../mock/data';

const Home = () => {
  const [particles, setParticles] = useState([]);
  const { profile, hobbies, discord } = mockData;

  useEffect(() => {
    // Generate random particles for background effect
    const newParticles = [];
    for (let i = 0; i < 15; i++) {
      newParticles.push({
        id: i,
        size: Math.random() * 100 + 50,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        type: Math.random() > 0.5 ? 'blue' : 'red'
      });
    }
    setParticles(newParticles);
  }, []);

  const hobbyIcons = {
    'Gaming': Gamepad2,
    'Coding': Code,
    'Bot Development': Bot,
    'Servers setup & management': Server
  };

  return (
    <div className="home-container">
      {/* Animated particles background */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className={`particle particle-${particle.type}`}
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}

      {/* Main content */}
      <div className="content-wrapper">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="profile-image-container glow-blue">
              <img 
                src={profile.image} 
                alt="Kazuto Profile" 
                className="profile-image"
              />
              <div className="image-border"></div>
            </div>
            
            <div className="hero-text">
              <h1 className="hero-name">{profile.name}</h1>
              <div className="status-badge">
                <span className="status-text">{profile.status}</span>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="hero-decoration">
            <div className="decoration-line line-blue"></div>
            <div className="decoration-line line-red"></div>
          </div>
        </section>

        {/* About Section */}
        <section className="about-section">
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
            <div className="title-underline"></div>
          </div>
          <p className="about-text">
            Welcome to my digital realm. I'm a passionate developer and gamer who thrives in the virtual world.
            Currently exploring the depths of code, gaming universes, and server architectures.
          </p>
        </section>

        {/* Hobbies Section */}
        <section className="hobbies-section">
          <div className="section-header">
            <h2 className="section-title">Hobbies & Skills</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="hobbies-grid">
            {hobbies.map((hobby, index) => {
              const Icon = hobbyIcons[hobby.title];
              return (
                <Card key={index} className="hobby-card">
                  <CardContent className="hobby-content">
                    <div className={`hobby-icon-wrapper ${index % 2 === 0 ? 'icon-blue' : 'icon-red'}`}>
                      <Icon className="hobby-icon" size={32} />
                    </div>
                    <h3 className="hobby-title">{hobby.title}</h3>
                    <p className="hobby-description">{hobby.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="section-header">
            <h2 className="section-title">Let's Connect</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="discord-container">
            <a 
              href={discord.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="discord-link"
            >
              <Button className="discord-button">
                <svg 
                  className="discord-icon" 
                  viewBox="0 0 24 24" 
                  width="24" 
                  height="24"
                  fill="currentColor"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                <span className="discord-text">DISCORD</span>
              </Button>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <p className="footer-text">© 2025 Kazuto. Powered by passion and caffeine.</p>
            <div className="footer-decoration">
              <span className="decoration-dot dot-blue"></span>
              <span className="decoration-dot dot-red"></span>
              <span className="decoration-dot dot-blue"></span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;