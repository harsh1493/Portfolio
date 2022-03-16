import React, { useEffect, useRef,useState } from 'react';
import gsap from 'gsap';
import "../../styles/landing.css";

const AboutMe = () => {
    const letter = useRef()
    const scrolly = useWindowPosition()
    const [doAnimate, setdoAnimate] = useState(false)
    const [hasAnimated, setHasAnimated] = useState(false)
    useEffect(() => {
      if (scrolly >= 1000 && !doAnimate) {
        setdoAnimate(true);
      }
      if (scrolly <= 900) {
        setdoAnimate(false);
        setHasAnimated(false);
      }
    }, [scrolly, doAnimate])
    useEffect(() => {
      if (doAnimate && !hasAnimated) {
        gsap.fromTo("#A", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 0.2 },)
        gsap.fromTo("#b", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 0.4 },)
        gsap.fromTo("#o5", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 0.6 },)
        gsap.fromTo("#u", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 0.8 },)
        gsap.fromTo("#t2", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 1 },)
        gsap.fromTo("#m3", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 1.2 },)
        gsap.fromTo("#e5", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 1.4 },)
        setHasAnimated(true);
        setdoAnimate(false)
      }
    })
    const changeBackground = (e) => {
        gsap.fromTo(e.target, { scaleY: 1, scaleX: 1 }, { y: 0, scaleY: 0.7, scaleX: 0.5, duration: 0.2 },)
        gsap.fromTo(e.target, { y: -10, scaleY: 0.5, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 0.2 },)
    }
  return (
    <div className='h2 flex-column w-full justify-center h-full font'>

    <div className='flex w-min '>
        <span ref={letter} id="A" onMouseOver={changeBackground} className='text-5xl font-bold'>A</span>
        <span ref={letter} id="b" onMouseOver={changeBackground} className='text-5xl font-bold'>b</span>
        <span ref={letter} id="o5" onMouseOver={changeBackground} className='text-5xl font-bold'>o</span>
        <span ref={letter} id="u" onMouseOver={changeBackground} className='text-5xl font-bold'>u</span>
        <span ref={letter} id="t2" onMouseOver={changeBackground} className='text-5xl font-bold'>t</span>
        <span className='w-5' />
        <span ref={letter} id="m3" onMouseOver={changeBackground} className='text-5xl font-bold'>m</span>
        <span ref={letter} id="e5" onMouseOver={changeBackground} className='text-5xl font-bold'>e</span>
       
    </div>
    </div>
  )
}

export default AboutMe



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