import React, { useState, useEffect, useRef } from 'react'
import MyPortfolio from './poppingText/MyPortfolio';
import gsap from 'gsap';
const Section0 = () => {
  const scrolly = useWindowPosition();
  const text1 = useRef()
  const button = useRef()
  const mid1 = useRef()
  const mid2 = useRef()
  const b1 = useRef()
  const b2 = useRef()
  const [doAnimate, setdoAnimate] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  useEffect(() => {
    if (scrolly >= 150 && !doAnimate) {
      setdoAnimate(true);
    }
    if (scrolly <= 100) {
      setdoAnimate(false);
      setHasAnimated(false);
    }
  }, [scrolly, doAnimate])
  useEffect(() => {

    if (doAnimate && !hasAnimated) {
      gsap.fromTo(text1.current, { y: "70px", opacity: "0" }, { y: "0", opacity: "1", duration: 1, ease: "power5.in", delay: 0.5 });
      gsap.fromTo(button.current, { y: "-20px", opacity: "0" }, { y: "0", opacity: "1", duration: 0.5, ease: "power3.in", delay: 0.5 });
      gsap.fromTo(mid1.current, { x: "-100px", opacity: "0" }, { x: "10", opacity: "1", duration: 1, ease: "power5.in", delay: 0.8 });
      gsap.fromTo(mid2.current, { x: "100px", opacity: "0" }, { x: "50", opacity: "1", duration: 1, ease: "power5.in", delay: 0.9 });

      gsap.fromTo(b1.current, { x: 1000, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power5.in", delay: 0.5 });
      gsap.fromTo(b2.current, { x: 1000, opacity: 0 }, { x: -110, opacity: 1, duration: 1, ease: "power5.in", delay: 0.9 });
      setHasAnimated(true);
      setdoAnimate(false)
    }
  })


  // const props1 = useSpring({ to: { opacity: 1 - (-scrolly + 500) / 500, x: scrolly <= 500 ? -scrolly + 500 : 0 }, from: { opacity: 0, x: 0 }, delay: 100 })
  // const props2 = useSpring({ to: { opacity: 1 - (-scrolly + 800) / 800, x: scrolly <= 630 ? -scrolly + 600 : -100, y: 10 }, from: { opacity: 0, x: 300, y: 300 }, delay: 300 })


  return (
    <>
      <div className="background">Work</div>
      <div className='flex justify-center h-full w-full'>

        <div className='flex-col h-full w-full'>
          <div className="pl-40">
            <MyPortfolio />
          </div>
          <div className='p pl-40'>
            <div className="flex justify-between h-full w-full ">
              <div ref={text1} className='text-black font-bold text-m ml-8' >
                A small gallery of recent projects chosen by me <br />
                I've done some of them with amazing people from companies around the globe.   
              </div>
              <div ref={button} className='a mt-2 mr-20 float-right'><span>See more!</span></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section0


export const useWindowPosition = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const setFromEvent = (e) => setPosition(window.scrollY);
    window.addEventListener("scroll", setFromEvent);

    return () => {
      window.removeEventListener("scroll", setFromEvent);
    };
  }, []);

  return position;
};