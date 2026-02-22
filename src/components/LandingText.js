import React, { useEffect } from 'react'
import gsap from 'gsap';
import "../styles/landing.css";

const LandingText = () => {
  // Letter configuration with IDs and delays
  const letters = [
    // First line: "Hi,"
    { id: "H1", char: "H", delay: 0.2 },
    { id: "i", char: "i", delay: 0.4 },
    { id: "comma", char: ",", delay: 0.6 },
    
    // Second line: "I'm Harsh"
    { id: "I", char: "I", delay: 0.8 },
    { id: "sq", char: "'", delay: 1.0 },
    { id: "m", char: "m", delay: 1.2 },
    { id: "H2", char: "H", delay: 1.4, special: true },
    { id: "a", char: "a", delay: 1.6 },
    { id: "r1", char: "r", delay: 1.8 },
    { id: "s", char: "s", delay: 2.0 },
    { id: "h", char: "h", delay: 2.2 },
    
    // Third line: "Web Developer"
    { id: "W", char: "w", delay: 2.4 },
    { id: "e1", char: "e", delay: 2.8 },
    { id: "b", char: "b", delay: 3.0 },
    { id: "D", char: "D", delay: 3.2 },
    { id: "e2", char: "e", delay: 3.4 },
    { id: "v", char: "v", delay: 3.6 },
    { id: "e3", char: "e", delay: 3.8 },
    { id: "l", char: "l", delay: 4.0 },
    { id: "o", char: "o", delay: 4.2 },
    { id: "p", char: "p", delay: 4.4 },
    { id: "e4", char: "e", delay: 4.6 },
    { id: "r2", char: "r", delay: 4.8 }
  ];

  useEffect(() => {
    // Animate letters on mount
    letters.forEach(letter => {
      if (letter.special) {
        // Special animation for H2
        gsap.fromTo(`#${letter.id}`, 
          { x: -100, rotateX: 0, opacity: 0 }, 
          { x: 0, rotate: 360, opacity: 1, duration: 0.5, delay: letter.delay }
        );
      } else {
        // Standard animation for other letters
        gsap.fromTo(`#${letter.id}`, 
          { y: -10, scaleY: 0, scaleX: 0.5 }, 
          { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: letter.delay }
        );
      }
    });
  }, []);

  const handleLetterHover = (e) => {
    // Hover animation
    gsap.fromTo(e.target, 
      { scaleY: 1, scaleX: 1 }, 
      { y: 0, scaleY: 0.7, scaleX: 0.5, duration: 0.2 }
    );
    gsap.fromTo(e.target, 
      { y: -10, scaleY: 0.5, scaleX: 0.5 }, 
      { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 0.2 }
    );
  };

  // Group letters by lines for rendering
  const lines = [
    letters.slice(0, 3),  // "Hi,"
    letters.slice(3, 11), // "I'm Harsh"
    letters.slice(11)      // "Web Developer"
  ];

  return (
    <div className='h1 flex-column w-full justify-center h-full font'>
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} className='flex w-min'>
          {line.map((letter, index) => (
            <React.Fragment key={letter.id}>
              <span 
                id={letter.id} 
                onMouseOver={handleLetterHover} 
                className='text-7xl font-bold'
              >
                {letter.char}
              </span>
              {letter.id === "m" && <span className='w-5' />}
              {letter.id === "b" && <span className='w-5' />}
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  );
};

export default LandingText;
