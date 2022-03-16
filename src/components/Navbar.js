import React, { useEffect, useState, useRef, useLayoutEffect } from 'react'
import gsap from 'gsap';
import { useSpring, animated, config } from 'react-spring';
import "../styles.css";
import "../styles/hamburger.css";
import "../styles/navMenu.css";

import NavbarMenu from './NavbarMenu';
const Navbar = () => {
    const scrollY = useWindowPosition();
    const position = useMousePosition();
    const cover = useRef()
    const toggleButton = useRef()
    const navbar = useRef()
    const homeLink1 = useRef()
    const homeLink2 = useRef()
    const homeLink3 = useRef()
    const homeLink4 = useRef()
    const [doAnimate, setdoAnimate] = useState(false)
    const [navExpanded, setnavExpanded] = useState(false)
    useEffect(() => {


        console.log(position.y)
        gsap.fromTo(cover.current, { height: "100vh" }, { height: "0vh", duration: 1.5, ease: "power3.in" });
        if (scrollY >= 200) {
            setdoAnimate(true);
            console.log(scrollY, doAnimate);
            $('#section1 a').trigger('click');
        }
        if (scrollY < 200) {
            setdoAnimate(false);
            console.log(scrollY, doAnimate);
        }
        //gsap.fromTo(top.current,{x:0,opacity:0},{x:100,duration:1,opacity:1})
    }, [scrollY])


    const toggleNavbar = () => {
        gsap.fromTo(navbar.current, { y: !navExpanded ? "0vh" : "100vh" }, { y: !navExpanded ? "100vh" : "0vh", duration: 1, ease: "power3.in" })
        setnavExpanded(!navExpanded);
    }


    return (
        <div style={{ width: "100vw" }}>
            <div ref={navbar} style={{ width: "100vw", height: "100vh", top: "-100vh" }} className=' bodyx flex bg-gradient-to-r from-violet-900  to-red-400 justify-center  absolute z-10 top-0 font-semibold text-3xl '>
                {/* <NavbarMenu/> */}
                {/* <div className='flex-column p-40 space-y-7 h-auto text-5xl items-center tracking-wider raju font-extrabold'  >
                    <a onClick={() => { toggleNavbar(); toggleButton.target.trigger('click') }} href="#section1" ref={homeLink1} id="home" className='flex justify-center'>HOME</a>
                    <a href="#section2" ref={homeLink2} className='flex justify-center'>WORK</a>
                    <a href="#section3" ref={homeLink3} className='flex justify-center'>ABOUT ME</a>
                    <a href="#section4" ref={homeLink4} className='flex justify-center'>CONTACT</a>
                </div> */}
                <ul id="nav" className='flex-col space-y-16'>
                    <li class="nav-link">
                        <a onClick={() => { toggleNavbar()}} href="#section1"><h1 data-name="home">Home</h1></a>
                    </li>
                    <li class="nav-link">
                    <a onClick={() => { toggleNavbar() }} href="#section2"><h1 data-name="work">Work</h1></a>
                        {/* <h1 data-name="About">About</h1> */}
                    </li>
                    <li class="nav-link">
                    <a onClick={() => { toggleNavbar()}} href="#section3"><h1 data-name="about me">About me</h1></a>
                        {/* <h1 data-name="About">About</h1> */}
                    </li>
                    <li class="nav-link">
                    <a onClick={() => { toggleNavbar() }} href="#section4"><h1 data-name="Skills">Skills</h1></a>
                        {/* <h1 data-name="services">services</h1> */}
                    </li>
                    <li class="nav-link">
                    <a onClick={() => { toggleNavbar() }} href="#section5"><h1 data-name="contact">Contact</h1></a>
                        {/* <h1 data-name="contact">contact</h1> */}
                    </li>
                </ul>
            </div>
            <div style={{ width: "100vw" }} className='container z-20 p-0 justify-center absolute left-5 top-1 font-semibold text-3xl  h-min'>
                <div className='flex justify-between '>
                    <a href='#section3' className={`raju transition transform hover:translate-y-1 hover:text-red-300 ${navExpanded?"text-white":"text-black"}  font-bold text-xs pt-3 hover:cursor-pointer`}>Harsh Shrivastava</a>
                    <div className='flex space-x-5 '>
                        <a href='https://github.com/harsh1493' target="_blank" style={{ decoration: "none" }} ><i class={`fab fa-github transition transform hover:translate-y-1 hover:text-red-300 ${navExpanded?"text-white":"text-black"} text-base pb-2`}></i></a>
                        <a href='https://www.linkedin.com/in/harsh-shrivastava-1b6b19197' target="_blank" style={{ decoration: "none" }}><i class={`fab fa-linkedin transition transform hover:translate-y-1 hover:text-red-300 ${navExpanded?"text-white":"text-black"} text-base pb-2`}></i></a>
                        <a href='https://dribbble.com/Harsh14'  target="_blank" style={{ decoration: "none" }}><i class={`fab fa-dribbble transition transform hover:translate-y-1 hover:text-red-300  font-bold ${navExpanded?"text-white":"text-black"} text-base pb-2`}></i></a>


                        <button ref={toggleButton} className={`hover:cursor-pointer`} onClick={(e) => {e.target.classList.toggle('active');setTimeout(toggleNavbar,400) }}>
                        
                            <svg  xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 200 200">
                                <g stroke-width="9" stroke-linecap="round">
                                    <path
                                        d="M72 82.286h28.75"
                                        fill="#009100"
                                        fill-rule="evenodd"
                                        stroke={navExpanded?"#fff":"#000"}
                                    />
                                    <path
                                        d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
                                        fill="none"
                                        stroke={navExpanded?"#fff":"#000"}
                                    />
                                    <path
                                        d="M72 125.143h28.75"
                                        fill="#009100"
                                        fill-rule="evenodd"
                                        stroke={navExpanded?"#fff":"#000"}
                                    />
                                    <path
                                        d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
                                        fill="none"
                                        stroke={navExpanded?"#fff":"#000"}
                                    />
                                    <path
                                        d="M100.75 82.286h28.75"
                                        fill="#009100"
                                        fill-rule="evenodd"
                                        stroke={navExpanded?"#fff":"#000"}
                                    />
                                    <path
                                        d="M100.75 125.143h28.75"
                                        fill="#009100"
                                        fill-rule="evenodd"
                                        stroke={navExpanded?"#fff":"#000"}
                                    />
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
            {/* <div ref={cover} style={{width:"100vw",height:"100vh"}} className='bg-black justify-center  absolute z-20 top-0 font-semibold text-3xl text-yellow-400'>
      </div> */}

        </div>
    )
}

export default Navbar;
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

export const useMousePosition = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", setFromEvent);

        return () => {
            window.removeEventListener("mousemove", setFromEvent);
        };
    }, []);

    return position;
};