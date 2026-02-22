import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap';
import AboutMe from './poppingText/AboutMe';
import '../styles/glassCard.css';
import '../styles/section1.css';
import { useScrollTrigger } from '../hooks/useCommon';

const Section1 = () => {
  const text1 = useRef();
  const expCard = useRef();
  const cardData = useRef();
  const { doAnimate, markAnimated } = useScrollTrigger(1300, 1200);

  useEffect(() => {
    if (doAnimate) {
      gsap.fromTo(text1.current, { y: '70px', opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power5.in', delay: 0.5 });
      gsap.fromTo(expCard.current, { x: '60px', opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: 'power5.in', delay: 0.5 });
      gsap.fromTo(cardData.current, { y: '70px', opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power5.in', delay: 1 });
      markAnimated();
    }
  }, [doAnimate, markAnimated]);

  return (
    <>
      <div id='section3' className="bg1">myself</div>
      <div className='flex justify-center h-full w-full'>
        <div className='flex-col h-full w-full'>
          <div className="pl-40">
            <AboutMe />
          </div>
          <div className='p pl-40'>
            <div className="flex justify-between h-full w-full">
            <div ref={text1} className='text-black font-bold text-m ml-8 sci-fi-text'>
                <p className="sci-fi-paragraph">
                  Senior Software Engineer with 5+ years of experience.<br />
                  Specialized in building scalable, high-performance web applications.<br />
                  Expertise in React.js, TypeScript, and micro-frontend architecture.<br />
                  Strong backend integration using Node.js and Python.<br />
                </p>
                <br />
                <p className="sci-fi-paragraph">
                  Led UI architecture initiatives and complex tool rewrites.<br />
                  Rebuilt legacy systems using modern frameworks like JupyterLab.<br />
                  Delivered cloud-native solutions deployed on AWS.<br />
                  Implemented robust CI/CD pipelines for reliable releases.<br />
                </p>
                <br />
                <p className="sci-fi-paragraph">
                  Experience across analytics, IoT, and enterprise platforms.<br />
                  Focused on performance optimization and clean architecture.<br />
                  Designed reusable component systems for scale.<br />
                  Mentored teams to ship production-grade software efficiently.<br />
                </p>
              </div>
              <div ref={expCard} className='flex flex-col relative -top-32 w-1/3 p-5 mr-24 glass'>
                <div className='flex'>
                  <img className="rounded-full shadow-lg w-16 h-16" src="/images/profilePic.jpeg" alt="avatar" />
                  <div className='pl-10 flex flex-col'>
                    <span className='font text-xl'> Harsh Shrivastava </span>
                    <span className='text-sm text-gray-500'>UI Developer</span>
                  </div>
                </div>
                <span className='text-l mt-10 font-semibold'>WORK EXPERIENCE</span>
                <div ref={cardData} className="card-timeline">
                  <div className="card-item" data-year="2025">
                    <div className="card-item-title">Senior Software Engineer at <span>Dell Technologies</span></div>
                    <div className="card-item-desc">Starting as Senior Software Engineer this month.</div>
                  </div>
                  <div className="card-item" data-year="2024">
                    <div className="card-item-title">Senior Software Engineer at <span>GlobalLogic</span></div>
                    <div className="card-item-desc">Led team of 3 developers for Alteryx Designer and RLDatix projects using React, TypeScript, AWS.</div>
                  </div>
                  <div className="card-item" data-year="2023">
                    <div className="card-item-title">Software Engineer at <span>TCS</span></div>
                    <div className="card-item-desc">Built Grafana visualization platform and manufacturing systems for Honeywell using React, Python, AWS.</div>
                  </div>
                  <div className="card-item" data-year="2022">
                    <div className="card-item-title">Software Engineer at <span>Actonate</span></div>
                    <div className="card-item-desc">Developed ValQ 3.0 Power BI custom visual using React, TypeScript, Node.js and microservices.</div>
                  </div>
                  <div className="card-item" data-year="2020">
                    <div className="card-item-title">Software Engineer at <span>Cognizant</span></div>
                    <div className="card-item-desc">Built IoT Device Management System using Angular 13, .NET, AWS for Fresenius Kabi.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;