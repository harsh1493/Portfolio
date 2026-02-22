import React, { useState, useRef, useEffect } from 'react';
import '../styles/carousel.css';

const DepthDeckCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef(null);

  // Project data with images - original + dummy projects
  const projects = [
    // Original Projects
    {
      title: "IKeep",
      desc: "Minimal Google Keep clone in MERN",
      tech: "MongoDB, Express, React, Node.js",
      color: "from-yellow-600 to-orange-600",
      image: "https://i.pcmag.com/imagery/articles/03t5awzhDYxo5Qf3EUytp21-15.fit_lim.size_1600x900.v1569488338.jpg",
      link: "https://github.com/harsh1493/iKeep"
    },
    {
      title: "LeChat",
      desc: "WhatsApp Clone Flutter app",
      tech: "Flutter, Firebase, WebSocket",
      color: "from-green-600 to-emerald-600",
      image: "https://cdn.dribbble.com/users/1907987/screenshots/16103207/whatsapp-dribble-post-new_4x.jpg",
      link: "https://github.com/harsh1493/LeChat"
    },
    {
      title: "My Portfolio",
      desc: "Portfolio web app in React.js, Three.js",
      tech: "React, Three.js, GSAP, Tailwind",
      color: "from-purple-600 to-pink-600",
      image: "/images/landing.PNG",
      link: "#"
    },
    
    // Additional Dummy Projects
    {
      title: "Neural Network Visualizer",
      desc: "Interactive 3D visualization of deep learning architectures",
      tech: "React, Three.js, TensorFlow.js",
      color: "from-purple-600 to-pink-600",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=300&fit=crop",
      link: "#"
    },
    {
      title: "Quantum Computing Simulator",
      desc: "Web-based quantum circuit designer and simulator",
      tech: "TypeScript, WebAssembly, D3.js",
      color: "from-blue-600 to-cyan-600",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop",
      link: "#"
    },
    {
      title: "AI-Powered Code Assistant",
      desc: "Intelligent code completion and refactoring tool",
      tech: "Python, React, GPT-4 API",
      color: "from-green-600 to-emerald-600",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
      link: "#"
    },
    {
      title: "Blockchain Supply Chain",
      desc: "Decentralized supply chain management platform",
      tech: "Solidity, React, Web3.js",
      color: "from-orange-600 to-red-600",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
      link: "#"
    }
  ];

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="depth-deck-carousel">
      <div className="carousel-container">
        <div className="carousel-track" ref={carouselRef}>
          {projects.map((project, index) => {
            const offset = index - currentIndex;
            const absOffset = Math.abs(offset);
            const zIndex = projects.length - absOffset;
            
            return (
              <div
                key={index}
                className={`carousel-slide ${offset === 0 ? 'active' : ''}`}
                style={{
                  transform: `
                    translateX(${offset * 100}%) 
                    translateZ(${-absOffset * 50}px) 
                    rotateY(${offset * 15}deg)
                    scale(${1 - absOffset * 0.1})
                  `,
                  zIndex,
                  opacity: 1 - absOffset * 0.3
                }}
              >
                <div className={`slide-content`} style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundColor: `linear-gradient(135deg, ${project.color.split(' ')[1].replace('to-', '')}, ${project.color.split(' ')[3]})`
                }}>
                  <div className="slide-header">
                    <h3 className="slide-title">{project.title}</h3>
                    <div className="slide-tech">{project.tech}</div>
                  </div>
                  <div className="slide-body">
                    <p className="slide-description">{project.desc}</p>
                  </div>
                  <div className="slide-footer">
                    <button 
                      className="slide-button"
                      onClick={() => project.link && window.open(project.link, '_blank')}
                    >
                      View Project
                    </button>
                    <button className="slide-button secondary">
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="carousel-controls">
        <button 
          className="control-button prev"
          onClick={handlePrev}
          disabled={isAnimating}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <button 
          className="control-button next"
          onClick={handleNext}
          disabled={isAnimating}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="carousel-dots">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="carousel-progress">
        <div 
          className="progress-bar"
          style={{ width: `${((currentIndex + 1) / projects.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default DepthDeckCarousel;
