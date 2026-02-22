import React, { useRef, useState, useEffect } from 'react'
import Landing from '../scenes/Landing';
import ProjectGrid from './ProjectGrid';
import Section0 from './Section0';
import '../styles.css';
import LandingSection from './LandingSection';
import Section1 from './Section1';
import ContactSection from './ContactSection';
import SkillsSection from './SkillsSection';
import { useWindowPosition } from '../hooks/useCommon';
import DarkMode from './DarkMode';

const App = () => {
  const scrollY = useWindowPosition();
  const [currentSection] = useState(0);

  return (
    <DarkMode>
      <div className='fixed  z-50 left-0 top-1/3 flex-col space-y-4 w-10 h-40 p-5'>
        <a href="#section1"> <span className={`h-1 rounded-md my-5 block ${scrollY > 600 ? 'bar' : 'grow'} nav-dot`}></span></a>
        <a href="#section2"> <span className={`h-1 rounded-md my-5 block ${scrollY <= 600 || scrollY >= 1200 ? 'bar' : 'grow'} nav-dot`}></span></a>
        <a href="#section3"> <span className={`h-1 rounded-md my-5 block ${scrollY < 1200 || scrollY >= 2100 ? 'bar' : 'grow'} nav-dot`}></span></a>
        <a href="#section4"> <span className={`h-1 rounded-md my-5 block ${scrollY < 2100 || scrollY >= 2900 ? 'bar' : 'grow'} nav-dot`}></span></a>
        <a href="#section5"> <span className={`h-1 rounded-md my-5 block ${scrollY < 2900 || scrollY > 3700 ? 'bar' : 'grow'} nav-dot`}></span></a>
      </div>
      <section id="section1" style={{ height: '100vh', width: '100vw' }}>
        <div className='relative'>
          <Landing />
          <div className='html'>
            <LandingSection />
          </div>
        </div>
      </section>
      <section id="section2" className='mt-5 flex-column w-full h-full'>
        <div className='body'>
          <Section0 />
          <div className="section mt-32 mb-32">
            <ProjectGrid />
          </div>
          <div className='relative'>
            <div className='top-0 left-0 -z-10'>
              <Section1 />
            </div>
            <div className='mt-20 top-0 left-0 -z-10'>
              <SkillsSection />
            </div>
            <div className='mt-20 top-0 left-0 -z-10'>
              <ContactSection />
            </div>
          </div>
        </div>
      </section>
    </DarkMode>
  );
};

export default App;