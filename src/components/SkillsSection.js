import React, { useState, useEffect, useRef, memo } from 'react'
import gsap from 'gsap';
import '../styles/section1.css';
import Skills from './poppingText/Skills';
import { useScrollTrigger } from '../hooks/useCommon';

const SkillsSection = () => {
  const text1 = useRef();
  const skills = useRef();
  const { doAnimate, markAnimated } = useScrollTrigger(1800, 1550);

  useEffect(() => {
    if (doAnimate) {
      gsap.fromTo(text1.current, { y: '70px', opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power5.in', delay: 0.5 });
      gsap.fromTo(skills.current, { y: '-20px', opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.in', delay: 0.5 });
      markAnimated();
    }
  }, [doAnimate, markAnimated]);

  const skillData = [
    { name: 'JavaScript', color: 'bg-yellow-500', percent: 95 },
    { name: 'React.js', color: 'bg-blue-500', percent: 90 },
    { name: 'TypeScript', color: 'bg-blue-600', percent: 85 },
    { name: 'Node.js', color: 'bg-green-600', percent: 85 },
    { name: 'AI/ML & LLMs', color: 'bg-purple-700', percent: 75 },
    { name: 'Python', color: 'bg-yellow-600', percent: 85 },
    { name: 'AWS', color: 'bg-orange-500', percent: 80 },
    { name: 'Microservices', color: 'bg-purple-600', percent: 80 },
    { name: 'Microfrontends', color: 'bg-indigo-600', percent: 75 },
    { name: 'Docker/Kubernetes', color: 'bg-blue-700', percent: 75 },
  ];

  return (
    <>
      <div className="bg2">Skills</div>
      <div id='section4' className='flex justify-center h-full w-full'>
        <div className='flex-col h-full w-full'>
          <div className="pl-40">
            <Skills />
          </div>
          <div className='p pl-40 relative z-30'>
            <div className="flex justify-between h-full w-full">
              <div ref={text1} className='w-1/2 text-black font-bold text-m ml-8 sci-fi-text'>
                          <p>
              Specialized in building complex, scalable, and responsive web applications<br />
              using modern JavaScript technologies. Strong expertise in front-end<br />
              development with React.js, TypeScript, and Angular, along with backend<br />
              integrations using Node.js and Python-based systems.<br />
            </p>
            <br />
            <p>
              Experience at GlobalLogic, TCS, Actonate, and Cognizant delivering<br />
              enterprise-grade solutions across analytics, IoT, and manufacturing<br />
              platforms. Led UI architecture initiatives, modernized tooling systems,<br />
              and implemented microservices-based solutions on AWS cloud infrastructure<br />
              with optimized CI/CD pipelines.<br />
            </p>
                <p>Visit my <a target="_blank" className='hover:text-pink-700' href="https://www.linkedin.com/in/harsh-shrivastava-6b5a3b2b/"> LinkedIn </a>
                  profile for more details or just <a href='#section5' className='hover:text-pink-700'> Contact </a> me.</p>
              </div>
              <div ref={skills} className='flex flex-col w-1/2 p-5 mr-10 glass relative -top-28'>
                {skillData.map((skill) => (
                  <ProgressBar key={skill.name} name={skill.name} color={skill.color} percent={skill.percent} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ProgressBar = memo(({ name, percent, color }) => {
  const progress = useRef();
  const { doAnimate, markAnimated } = useScrollTrigger(1800, 1550);

  useEffect(() => {
    if (doAnimate) {
      gsap.fromTo(progress.current, { width: '0%', opacity: 0 }, { width: `${percent}%`, opacity: 1, duration: 1, ease: 'power5.in', delay: 1.5 });
      markAnimated();
    }
  }, [doAnimate, markAnimated, percent]);

  return (
    <div className='flex-col w-full space-y-3'>
      <h2 className='font'>{name}</h2>
      <span className='block h-1 w-full bg-slate-200'></span>
      <span ref={progress} className={`block relative -top-4 h-1 ${color}`}></span>
    </div>
  );
});

export default SkillsSection;