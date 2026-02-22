import React, { useEffect, useState, useRef } from 'react'
import gsap from 'gsap';
import '../styles.css';
import Navbar from './Navbar';
import '../styles/landing.css';
import '../styles/scrollDown.css';
import LandingText from './LandingText';

const LandingSection = () => {
  const text1 = useRef();
  const text2 = useRef();
  const mid1 = useRef();
  const mid2 = useRef();

  useEffect(() => {
    gsap.fromTo(text1.current, { x: '-100px', opacity: 0 }, { x: 10, opacity: 1, duration: 1, ease: 'power5.in', delay: 1 });
    gsap.fromTo(text2.current, { x: '100px', opacity: 0 }, { x: 10, opacity: 1, duration: 1, ease: 'power5.in', delay: 1 });
    gsap.fromTo(mid1.current, { x: '-100px', opacity: 0 }, { x: 10, opacity: 1, duration: 1, ease: 'power5.in', delay: 0.8 });
    gsap.fromTo(mid2.current, { x: '100px', opacity: 0 }, { x: 50, opacity: 1, duration: 1, ease: 'power5.in', delay: 0.9 });
  }, []);

  const [visible, setVisible] = useState(true);

  return (
    <div style={{ width: '100vw', height: '100vh' }} className='z-10 justify-center absolute left-0 top-0'>
      <Navbar />
      <div className='my-12 h-96 flex-column'>
        <div className='container flex ml-40 space-x-40 h-2/3 mt-20'>
          <div className='html-s1'>
            <div className='body-before'>
              <LandingText />
              <a href='#section5'><div className='a mt-5'><span>Contact Me!</span></div></a>
            </div>
          </div>
        </div>
        <div className='container flex space-x-40 mt-52 justify-center' style={{ visibility: visible ? '' : 'HIDDEN' }}>
          <a href='#section2' className="icon-scroll left-0" onClick={() => setVisible(false)}></a>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;