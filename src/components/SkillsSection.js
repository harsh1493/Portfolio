import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap';
import "../styles/section1.css";
import Skills from './poppingText/Skills';

const SkillsSection = () => {
    const scrolly = useWindowPosition();
    const text1 = useRef()
    const skills = useRef()
    const mid1 = useRef()
    const mid2 = useRef()
    const b1 = useRef()
    const b2 = useRef()
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
            gsap.fromTo(text1.current, { y: "70px", opacity: "0" }, { y: "0", opacity: "1", duration: 1, ease: "power5.in", delay: 0.5 });
            gsap.fromTo(skills.current, { y: "-20px", opacity: "0" }, { y: "0", opacity: "1", duration: 0.5, ease: "power2.in", delay: 0.5 });
            //   gsap.fromTo(mid1.current, { x: "-100px", opacity: "0" }, { x: "10", opacity: "1", duration: 1, ease: "power5.in", delay: 0.8 });
            //   gsap.fromTo(mid2.current, { x: "100px", opacity: "0" }, { x: "50", opacity: "1", duration: 1, ease: "power5.in", delay: 0.9 });

            //   gsap.fromTo(b1.current, { x: 1000, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power5.in", delay: 0.5 });
            //   gsap.fromTo(b2.current, { x: 1000, opacity: 0 }, { x: -110, opacity: 1, duration: 1, ease: "power5.in", delay: 0.9 });
            setHasAnimated(true);
            setdoAnimate(false)
        }
    })


    // const props1 = useSpring({ to: { opacity: 1 - (-scrolly + 500) / 500, x: scrolly <= 500 ? -scrolly + 500 : 0 }, from: { opacity: 0, x: 0 }, delay: 100 })
    // const props2 = useSpring({ to: { opacity: 1 - (-scrolly + 800) / 800, x: scrolly <= 630 ? -scrolly + 600 : -100, y: 10 }, from: { opacity: 0, x: 300, y: 300 }, delay: 300 })


    return (
        <>
            <div className="bg2">Skills</div>
            <div id='section4' className='flex justify-center h-full w-full'>
                <div className='flex-col h-full w-full'>
                    <div className="pl-40">
                        <Skills />
                    </div>
                    <div className='p pl-40 relative z-30'>
                        <div className="flex justify-between h-full w-full ">
                            <div ref={text1} className=' w-1/2 text-black font-bold text-m ml-8' >
                                <p>
                                    I create successful responsive websites that are fast,<br />
                                    easy to use, and built with best practices. <br />   </p><br /> The main area
                                of my expertise is front-end development in React JS,<br />
                                Angular JS HTML, CSS, JS,  building small and medium web apps,<br />
                                custom plugins, features, animations, and coding interactive<br />
                                layouts.

                                <br />
                                <p>
                                    I also have full-stack developer experience with MERN stack.
                                </p>
                                <br />
                                <p>Visit my <a target="_blank" className='hover:text-pink-700' href="https://actonate.com/"> LinkedIn </a>
                                    profile for more details or just <a href='#section5' className='hover:text-pink-700'> Contact </a> me.</p>

                            </div>
                            <div ref={skills} className='flex flex-col w-1/2 p-5 mr-10 glass relative -top-28'>
                                <ProgressBar name="Front-end" color="bg-slate-700" percent="75" />
                                <ProgressBar name="Backend" color="bg-blue-300" percent="60" />
                                <ProgressBar name="ReactJS" color="bg-pink-600" percent="75" />
                                <ProgressBar name="Python" color="bg-yellow-600" percent="75" />
                                <ProgressBar name="ThreeJS" color="bg-slate-900" percent="60" />
                                <ProgressBar name="TypeScript" color="bg-orange-600" percent="75" />
                                <ProgressBar name="TailWind CSS" color="bg-green-500" percent="60" />
                                <ProgressBar name="AgularJS" color="bg-red-600" percent="60" />    
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SkillsSection;


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

const ProgressBar = (props) => {
    const [doAnimate, setdoAnimate] = useState(false)
    const [hasAnimated, setHasAnimated] = useState(false)
    const { name, percent, color,delay } = props;
    const scrolly = useWindowPosition();
    const progress = useRef()
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
            console.log(percent,parseFloat(percent),parseFloat(percent)*100)
            gsap.fromTo(progress.current, { width: "0%", opacity: "0" }, { width: `${percent}%`, opacity: "1", duration: 1, ease: "power5.in", delay: 1.5 });       
            setHasAnimated(true);
            setdoAnimate(false)
        }
    })
    return (
        <>
            <div className='flex-col w-full space-y-3'>
                <h2 className='font'>{name}</h2>
                <span className='block h-1 w-full bg-slate-200'>
                </span>
                <span ref={progress} className={`block relative -top-4 h-1  ${color}`}>
                </span>
            </div>
        </>
    )
}