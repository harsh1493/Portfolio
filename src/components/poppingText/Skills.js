import React, { useEffect, useRef,useState } from 'react';
import gsap from 'gsap';
import "../../styles/landing.css";

const Skills = () => {
    const letter = useRef()
    const scrolly = useWindowPosition()
    const [doAnimate, setdoAnimate] = useState(false)
    const [hasAnimated, setHasAnimated] = useState(false)
    useEffect(() => {
      if (scrolly >= 1800 && !doAnimate) {
        setdoAnimate(true);
      }
      if (scrolly <= 1550) {
        setdoAnimate(false);
        setHasAnimated(false);
      }
    }, [scrolly, doAnimate])
    useEffect(() => {
      if (doAnimate && !hasAnimated) {
        gsap.fromTo("#S", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 0.2 },)
        gsap.fromTo("#k", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 0.4 },)
        gsap.fromTo("#i3", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 0.6 },)
        gsap.fromTo("#l3", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 0.8 },)
        gsap.fromTo("#l4", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 1 },)
        gsap.fromTo("#s1", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 1.2 },)
        gsap.fromTo("#and", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 1.4 },)
        gsap.fromTo("#E", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 1.6 },)
        gsap.fromTo("#x", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 1.8 },)
        gsap.fromTo("#p1", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 2.0 },)
        gsap.fromTo("#e8", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 2.2 },)
        gsap.fromTo("#r4", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 2.4 },)
        gsap.fromTo("#i4", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 2.6 },)
        gsap.fromTo("#e9", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 2.8 },)
        gsap.fromTo("#n1", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 3.0 },)
        gsap.fromTo("#c1", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 3.2 },)
        gsap.fromTo("#e7", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 3.4 },)
    
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
        <span ref={letter} id="S" onMouseOver={changeBackground} className='text-5xl font-bold'>S</span>
        <span ref={letter} id="k" onMouseOver={changeBackground} className='text-5xl font-bold'>k</span>
        <span ref={letter} id="i3" onMouseOver={changeBackground} className='text-5xl font-bold'>i</span>
        <span ref={letter} id="l3" onMouseOver={changeBackground} className='text-5xl font-bold'>l</span>
        <span ref={letter} id="l4" onMouseOver={changeBackground} className='text-5xl font-bold'>l</span>
        <span ref={letter} id="s1" onMouseOver={changeBackground} className='text-5xl font-bold'>s</span>
        <span className='w-5' />
        <span ref={letter} id="and" onMouseOver={changeBackground} className='text-5xl font-bold'>&</span>
        <br />
       
    </div>
    <div className='flex w-min '>
    <span ref={letter} id="E" onMouseOver={changeBackground} className='text-5xl font-bold'>E</span>
        <span ref={letter} id="x" onMouseOver={changeBackground} className='text-5xl font-bold'>x</span>
        <span ref={letter} id="p1" onMouseOver={changeBackground} className='text-5xl font-bold'>p</span>
        <span ref={letter} id="e8" onMouseOver={changeBackground} className='text-5xl font-bold'>e</span>
        <span ref={letter} id="r4" onMouseOver={changeBackground} className='text-5xl font-bold'>r</span>
        <span ref={letter} id="i4" onMouseOver={changeBackground} className='text-5xl font-bold'>i</span>
        <span ref={letter} id="e9" onMouseOver={changeBackground} className='text-5xl font-bold'>e</span>
        <span ref={letter} id="n1" onMouseOver={changeBackground} className='text-5xl font-bold'>n</span>
        <span ref={letter} id="c1" onMouseOver={changeBackground} className='text-5xl font-bold'>c</span>
        <span ref={letter} id="e7" onMouseOver={changeBackground} className='text-5xl font-bold'>e</span>
    </div>
    </div>
  )
}

export default Skills



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