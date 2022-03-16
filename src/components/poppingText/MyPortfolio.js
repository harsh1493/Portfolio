import React, { useEffect, useRef,useState } from 'react';
import gsap from 'gsap';
import "../../styles/landing.css";

const MyPortfolio = () => {
    const letter = useRef()
    const scrolly = useWindowPosition()
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
        gsap.fromTo("#M", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 0.2 },)
        gsap.fromTo("#y", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 0.4 },)
        gsap.fromTo("#P", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 0.6 },)
        gsap.fromTo("#o1", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 0.8 },)
        gsap.fromTo("#r", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 1 },)
        gsap.fromTo("#t", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 1.2 },)
        gsap.fromTo("#f", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 1.4 },)
        gsap.fromTo("#o2", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 1.6 },)
        gsap.fromTo("#l2", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 1.8 },)
        gsap.fromTo("#i2", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 2 },)
        gsap.fromTo("#o3", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 2.2 },)
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
        <span ref={letter} id="M" onMouseOver={changeBackground} className='text-5xl font-bold'>M</span>
        <span ref={letter} id="y" onMouseOver={changeBackground} className='text-5xl font-bold'>y</span>
        <span className='w-5' />
        <span ref={letter} id="P" onMouseOver={changeBackground} className='text-5xl font-bold'>P</span>
        <span ref={letter} id="o1" onMouseOver={changeBackground} className='text-5xl font-bold'>o</span>
        <span ref={letter} id="r" onMouseOver={changeBackground} className='text-5xl font-bold'>r</span>
        <span ref={letter} id="t" onMouseOver={changeBackground} className='text-5xl font-bold'>t</span>
        <span ref={letter} id="f" onMouseOver={changeBackground} className='text-5xl font-bold'>f</span>
        <span ref={letter} id="o2" onMouseOver={changeBackground} className='text-5xl font-bold'>o</span>
        <span ref={letter} id="l2" onMouseOver={changeBackground} className='text-5xl font-bold'>l</span>
        <span ref={letter} id="i2" onMouseOver={changeBackground} className='text-5xl font-bold'>i</span>
        <span ref={letter} id="o3" onMouseOver={changeBackground} className='text-5xl font-bold'>o</span>
    </div>
    </div>
  )
}

export default MyPortfolio



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