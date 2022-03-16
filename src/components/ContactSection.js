import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap';
import ContactMe from './poppingText/ContactMe';
import "../styles/section1.css";
import { send } from 'emailjs-com';
const ContactSection = () => {
    const scrolly = useWindowPosition();
    const text1 = useRef()
    const button = useRef()
    const form = useRef()
    const toast = useRef()
    const b1 = useRef()
    const b2 = useRef()
    const [doAnimate, setdoAnimate] = useState(false)
    const [hasAnimated, setHasAnimated] = useState(false)
    // const [showToast, setshowToast] = useState(false);
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: 'Harsh',
        message: '',
        reply_to: '',
      });
      const [subject, setSubject] = useState('')
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };

    const messageSentToast = () => {
        gsap.fromTo(toast.current, { x: "100px", opacity: "0" }, { x: "0", opacity: "1", duration: 1, ease: "power5.in", delay: 0 });
        gsap.fromTo(toast.current, { x: "0", opacity: "1" }, { x: "100px", opacity: "0", duration: 1, ease: "power5.in", delay: 3 });
        
    }

      const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_ljm0atd',
            'template_mbsuoj7',
            toSend,
            'kUEjxcevgCGOzMT-e'
          )
            .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
              setToSend({
                from_name: '',
                to_name: 'Harsh',
                message: '',
                reply_to: '',
              })
              setSubject('')
              messageSentToast();
            })
            .catch((err) => {
              console.log('FAILED...', err);
            });

      };
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
               gsap.fromTo(text1.current, { y: "70px", opacity: "0" }, { y: "0", opacity: "1", duration: 1, ease: "power5.in", delay: 0.5 });
               gsap.fromTo(form.current, {scale:0, opacity: "0" }, { scale:1, opacity: "1", duration: 1, ease: "power5.in", delay: 0.5 });
               setHasAnimated(true);
            setdoAnimate(false)
        }
    })  

    return (
        <>
            <div id='section5' className='flex justify-center h-full w-full z-30'>
                <div className='flex-col h-full w-full'>
                    <div className="pl-40">
                        <ContactMe />
                    </div>
                    <div className='p pl-40'>
                        <div className="flex justify-between h-full w-full ">
                            <div ref={text1} className='text-black font-bold text-m ml-8' >
                                <p>
                                    I’m interested in freelance opportunities
                                    especially ambitious <br />  or large projects.
                                    However, if you have other request or question, <br />
                                    don’t hesitate to use the form.<br />
                                </p>
                                <br />
                                <p> I currently work remotely with  <a target="_blank" className='hover:text-pink-700' href="https://actonate.com/"> Actonate </a>, being
                                    open  for new <br /> opportunities.</p>

                            </div>


                        </div>
                    </div> 
                    <div className='flex justify-between'>
                    <div className='form pl-40 w-1/2 pt-12 pb-10 z-30 '>
                        <form onSubmit={onSubmit}>
                            <div ref={form} className='flex flex-col shadow-lg rounded-lg p-5' >
                                <div className='flex space-x-5'>
                                    <input required className='neo w-1/2 h-10' value={toSend.from_name} onChange={handleChange} type="text" name="from_name" id="name" placeholder='Name' />
                                    <input required className='neo w-1/2 h-10' value={toSend.reply_to} onChange={handleChange} type="email" name="reply_to" id="email" placeholder='Your email' />
                                </div>
                                <input className='neo h-10' value={subject} onChange={(e)=>{setSubject(e.target.value)}}  type="text" name="subject" id="subject" placeholder='Subject' />
                                <textarea required className='neo p-5' value={toSend.message} onChange={handleChange} type="" rows="5" name="message" id="name" placeholder='message...' />
                                <button ref={button}  className='a mt-10 mr-20 float-right'><span>Send message!</span></button>
                            </div>
                        </form>
                    </div>
                    <div ref={toast} className='w-1/2 pt-12 pb-10 z-30 opacity-0'>
                        <div className='justify-between flex float-right relative top-80 mr-10 bg-red-100 h-20 w-72 p-6 rounded-lg shadow-2xl'>
                            <p>
                                Message sent successfully!
                            </p>
                            <button className='relative -top-4'><span><i className='fa fa-times'></i></span></button>
                        </div>
                    </div>
                    </div>
                    <div className='body-after'></div>
                    <div className='html-after'></div>
                </div>
            </div>
        </>
    )
}

export default ContactSection


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