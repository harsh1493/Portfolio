import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap';
import AboutMe from './poppingText/AboutMe';
import "../styles/glassCard.css";
import "../styles/section1.css";
const Section1 = () => {
  const scrolly = useWindowPosition();
  const text1 = useRef()
  const expCard=useRef()
  const cardData=useRef()
  
  const [doAnimate, setdoAnimate] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  useEffect(() => {
    if (scrolly >= 1300 && !doAnimate) {
      setdoAnimate(true);
    }
    if (scrolly <= 1200) {
      setdoAnimate(false);
      setHasAnimated(false);
    }
  }, [scrolly, doAnimate])
  useEffect(() => {

    if (doAnimate && !hasAnimated) {
      gsap.fromTo(text1.current, { y: "70px", opacity: "0" }, { y: "0", opacity: "1", duration: 1, ease: "power5.in", delay: 0.5 });
      gsap.fromTo(expCard.current, { x: "60px", opacity: "0" }, { x: "0", opacity: "1", duration: 0.5, ease: "power5.in", delay: 0.5 });
       gsap.fromTo(cardData.current, { y: "70px", opacity: "0" }, { y: "0", opacity: "1", duration: 1, ease: "power5.in", delay: 1 }); 
      setHasAnimated(true);
      setdoAnimate(false)
    }
  })

  return (
    <>
      <div id='section3' className="bg1">myself</div>
      <div className='flex justify-center h-full w-full'>
        <div className='flex-col h-full w-full'>
          <div className="pl-40">
            <AboutMe />
          </div>
          <div className='p pl-40'>
            <div className="flex justify-between h-full w-full ">
              <div ref={text1} className='text-black font-bold text-m ml-8' >
                <p>
                  For over 4 years I had many opportunities to work in a <br />
                  vast spectrum of  <a href=""> web technologies </a>what let me gather<br />a significant
                  amount of experience. <br /><br />
                  Working for companies and individuals around the globe  I met <br />
                  and learnt from amazing and ambitious people.
                </p>
                <br />
                <p> I currently work remotely with   <a target="_blank" className='hover:text-pink-700' href="https://actonate.com/"> Actonate </a> being <br />
                  open for new opportunities.</p>
              </div>
              <div ref={expCard}  className='flex flex-col relative -top-32  w-1/3 p-5 mr-24 glass'>
                <div className='flex'>
                  <img class="rounded-full shadow-lg w-16 h-16 " src="/images/profilePic.jpeg" alt="avatar" />
                  <div className=' pl-10 flex flex-col'>
                    <span className='font text-xl'> Harsh Shrivastava </span>
                    <span className='text-sm  text-gray-500 '>UI Developer</span>
                  </div>
                </div>
                <span className='text-l mt-10 font-semibold'>WORK EXPERIENCE</span>
                <div ref={cardData} class="card-timeline">
                  <div class="card-item" data-year="2022">
                    <div class="card-item-title">Front-end Developer at <span>Actonate</span></div>
                    <div class="card-item-desc">Built complex and responsive UI's in Reactjs.</div>
                  </div>
                  <div class="card-item" data-year="2020">
                    <div class="card-item-title">FullStack Developer at <span>Cogizant</span></div>
                    <div class="card-item-desc">Developed UI components  in ReactJS and AngularJS, worked on .Net Technoloies.</div>
                  </div>
                  <div class="card-item" data-year="2019">
                    <div class="card-item-title"> FullStack Internship at <span>Cogizant</span></div>
                    <div class="card-item-desc">Learnt basics of ReactJS and .Net Technologies.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section1


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