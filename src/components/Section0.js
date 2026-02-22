import React, { useState, useEffect, useRef } from 'react'
import MyPortfolio from './poppingText/MyPortfolio';
import gsap from 'gsap';
import { useScrollTrigger } from '../hooks/useCommon';

const Section0 = () => {
  const text1 = useRef();
  const button = useRef();
  const mid1 = useRef();
  const mid2 = useRef();
  const b1 = useRef();
  const b2 = useRef();
  const { doAnimate, markAnimated } = useScrollTrigger(150, 100);

  useEffect(() => {
    if (doAnimate) {
      gsap.fromTo(text1.current, { y: '70px', opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power5.in', delay: 0.5 });
      gsap.fromTo(button.current, { y: '-20px', opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power3.in', delay: 0.5 });
      gsap.fromTo(mid1.current, { y: '70px', opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power5.in', delay: 0.7 });
      gsap.fromTo(mid2.current, { y: '70px', opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power5.in', delay: 0.9 });
      gsap.fromTo(b1.current, { y: '70px', opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power5.in', delay: 1.1 });
      gsap.fromTo(b2.current, { y: '70px', opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power5.in', delay: 1.3 });
      markAnimated();
    }
  }, [doAnimate, markAnimated]);

  return (
    <>
      <div className="background">Work</div>
      <div className='flex justify-center h-full w-full'>
        <div className='flex-col h-full w-full'>
          <div className="pl-40">
            <MyPortfolio />
          </div>
          <div className='p pl-40'>
            <div className="flex justify-between h-full w-full">
              <div ref={text1} className='text-black font-bold text-m ml-8 sci-fi-text'>
                <p className="sci-fi-paragraph">
                  A small gallery of recent projects chosen by me <br />
                  I've done some of them with amazing people from companies around the globe.
                </p>
              </div>
              <div ref={button} className='a mt-2 mr-20 float-right'><span>See more!</span></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section0;