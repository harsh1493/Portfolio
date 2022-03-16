import React, { useEffect, useRef,useState } from 'react';
import gsap from 'gsap';
import "../../styles/landing.css";

const ContactMe = () => {
    const letter = useRef()
    const scrolly = useWindowPosition()
    const [doAnimate, setdoAnimate] = useState(false)
    const [hasAnimated, setHasAnimated] = useState(false)
    useEffect(() => {
      if (scrolly >= 2500 && !doAnimate) {
        setdoAnimate(true);
      }
      if (scrolly <= 2250) {
        setdoAnimate(false);
        setHasAnimated(false);
      }
    }, [scrolly, doAnimate])
    useEffect(() => {
      if (doAnimate && !hasAnimated) {
        gsap.fromTo("#C", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 0.2 },)
        gsap.fromTo("#o6", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 0.4 },)
        gsap.fromTo("#n", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 0.6 },)
        gsap.fromTo("#t3", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 0.8 },)
        gsap.fromTo("#a", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 1 },)
        gsap.fromTo("#c", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 1.2 },)
        gsap.fromTo("#t4", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 1.4 },)
        gsap.fromTo("#m4", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 1.6 },)
        gsap.fromTo("#e6", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 1.8 },)
       
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
        <span ref={letter} id="C" onMouseOver={changeBackground} className='text-5xl font-bold'>C</span>
        <span ref={letter} id="o6" onMouseOver={changeBackground} className='text-5xl font-bold'>o</span>
        <span ref={letter} id="n" onMouseOver={changeBackground} className='text-5xl font-bold'>n</span>
        <span ref={letter} id="t3" onMouseOver={changeBackground} className='text-5xl font-bold'>t</span>
        <span ref={letter} id="a" onMouseOver={changeBackground} className='text-5xl font-bold'>a</span>
        <span ref={letter} id="c" onMouseOver={changeBackground} className='text-5xl font-bold'>c</span>
        <span ref={letter} id="t4" onMouseOver={changeBackground} className='text-5xl font-bold'>t</span>
        <span className='w-5' />
        <span ref={letter} id="m4" onMouseOver={changeBackground} className='text-5xl font-bold'>m</span>
        <span ref={letter} id="e6" onMouseOver={changeBackground} className='text-5xl font-bold'>e</span>
       
    </div>
    </div>
  )
}

export default ContactMe



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