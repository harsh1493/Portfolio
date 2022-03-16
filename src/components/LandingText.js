import React, { useEffect, useRef } from 'react'
import { useSpring, animated } from 'react-spring';
import gsap from 'gsap';
import "../styles/landing.css";
const LandingText = () => {
    const letter = useRef()
    useEffect(() => {
        // letter.current
        gsap.fromTo("#H1", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 0.2 },)
        gsap.fromTo("#i", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 0.4 },)
        gsap.fromTo("#comma", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 0.6 },)
        gsap.fromTo("#I", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 0.8 },)
        gsap.fromTo("#sq", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 1 },)
        gsap.fromTo("#m", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 1.2 },)
        // gsap.fromTo("#H2", { y: -10, scaleY: 0, scaleX: 0.5,rotateX:0 }, { y: 0, scaleY: 1, scaleX: 1, rotate:360, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 1.4 },)
         gsap.fromTo("#H2", {x:-100 ,rotateX:0,opacity:0}, { x:0, rotate:360,opacity:1, duration: 0.5, delay: 1.4 },)
       
        gsap.fromTo("#a", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 1.6 },)
        gsap.fromTo("#r1    ", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 1.8 },)
        gsap.fromTo("#s", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 2 },)
        gsap.fromTo("#h", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 2.2 },)
        gsap.fromTo("#W", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 2.4 },)
        gsap.fromTo("#e1", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 2.8 },)
        gsap.fromTo("#b", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 3 },)
        gsap.fromTo("#D", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 3.2 },)
        gsap.fromTo("#e2", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 3.4 },)
        gsap.fromTo("#v", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 3.6 },)
        gsap.fromTo("#e3", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 3.8 },)
        gsap.fromTo("#l", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 4 },)
        gsap.fromTo("#o", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 4.2 },)
        gsap.fromTo("#p", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 4.4 },)
        gsap.fromTo("#e4", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 4.6 },)
        gsap.fromTo("#r2", { y: -10, scaleY: 0, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 4.8 },)

    }, [])
    const changeBackground = (e) => {
        gsap.fromTo(e.target, { scaleY: 1, scaleX: 1 }, { y: 0, scaleY: 0.7, scaleX: 0.5, duration: 0.2 },)
        gsap.fromTo(e.target, { y: -10, scaleY: 0.5, scaleX: 0.5 }, { y: 0, scaleY: 1, scaleX: 1, duration: 1.4, ease: "elastic.out(1, 0.2)", delay: 0.2 },)
    }


    return (    
                <div className='h1 flex-column w-full justify-center h-full font'>

                    <div className='flex w-min '>
                        <span ref={letter} id="H1" onMouseOver={changeBackground} className='text-7xl font-bold'>H</span>
                        <span ref={letter} id="i" onMouseOver={changeBackground} className='text-7xl font-bold'>i</span>
                        <span ref={letter} id="comma" onMouseOver={changeBackground} className='text-7xl font-bold'>,</span>
                    </div>

                    <div className='flex w-min'>
                        <span ref={letter} id="I" onMouseOver={changeBackground} className='text-7xl font-bold'>I</span>
                        <span ref={letter} id="sq" onMouseOver={changeBackground} className='text-7xl font-bold'>'</span>
                        <span ref={letter} id="m" onMouseOver={changeBackground} className='text-7xl font-bold'>m</span>
                        <span className='w-5' />
                        <span ref={letter} id="H2" onMouseOver={changeBackground} className='text-7xl font-bold text-rose-600'>H</span>
                        <span ref={letter} id="a" onMouseOver={changeBackground} className='text-7xl font-bold'>a</span>
                        <span ref={letter} id="r1" onMouseOver={changeBackground} className='text-7xl font-bold'>r</span>
                        <span ref={letter} id="s" onMouseOver={changeBackground} className='text-7xl font-bold'>s</span>
                        <span ref={letter} id="h" onMouseOver={changeBackground} className='text-7xl font-bold'>h</span>
                    </div>
                    <div className='flex w-min'>
                        <span ref={letter} id="W" onMouseOver={changeBackground} className='text-7xl font-bold'>w</span>
                        <span ref={letter} id="e1" onMouseOver={changeBackground} className='text-7xl font-bold'>e</span>
                        <span ref={letter} id="b" onMouseOver={changeBackground} className='text-7xl font-bold'>b</span>
                        <span className='w-5' />
                        <span ref={letter} id="D" onMouseOver={changeBackground} className='text-7xl font-bold'>D</span>
                        <span ref={letter} id="e2" onMouseOver={changeBackground} className='text-7xl font-bold'>e</span>
                        <span ref={letter} id="v" onMouseOver={changeBackground} className='text-7xl font-bold'>v</span>
                        <span ref={letter} id="e3" onMouseOver={changeBackground} className='text-7xl font-bold'>e</span>
                        <span ref={letter} id="l" onMouseOver={changeBackground} className='text-7xl font-bold'>l</span>
                        <span ref={letter} id="o" onMouseOver={changeBackground} className='text-7xl font-bold'>o</span>
                        <span ref={letter} id="p" onMouseOver={changeBackground} className='text-7xl font-bold'>p</span>
                        <span ref={letter} id="e4" onMouseOver={changeBackground} className='text-7xl font-bold'>e</span>
                        <span ref={letter} id="r2" onMouseOver={changeBackground} className='text-7xl font-bold'>r</span>
                    </div>
                </div>
      );
}

export default LandingText;