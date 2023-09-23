import React, { useRef,useEffect } from 'react'
import libert from '../assets/images/sponsors/libert.png'
import liberty from '../assets/images/sponsors/liberty.png'
import paybox from '../assets/images/sponsors/Paybox.png'
import visual from '../assets/images/sponsors/visual.png'
import winwise from '../assets/images/sponsors/winwise.png'
import wisper from '../assets/images/sponsors/wisper.png'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);


function Sponsors() {
    const headingRef = useRef(null)
    const bodyRef = useRef(null)
    const imageRef = useRef(null)

    useEffect(() => {
        gsap.fromTo(
          headingRef.current,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: 0.1,
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top bottom",
            },
          }
        );
        gsap.fromTo(
            bodyRef.current,
            { opacity: 0, y: 100 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              delay: 0.1,
              scrollTrigger: {
                trigger: bodyRef.current,
                start: "top bottom",
              },
            }
          );
          gsap.fromTo(
            imageRef.current,
            { opacity: 0, y: 100 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              delay: 0.1,
              scrollTrigger: {
                trigger: imageRef.current,
                start: "top bottom",
              },
            }
          );
      }, [headingRef, bodyRef, imageRef]);
  return (
    <div className='sponsors'>
      <h3 className='heading' ref={headingRef}>
      Partners and Sponsors
      </h3>
      <p ref={bodyRef}>Getlinked Hackathon 1.0 is honored to have the following major 
      companies as its partners and sponsors</p>
        <div className='images-sect' ref={imageRef}>
            <div className='padright'>
            <img src={liberty} alt='' />
            </div>
            <div className='padright'>
            <img src={libert} alt='' />
            </div>
            <div>
            <img src={winwise} alt='' />
            </div >
            <div className='padtop'></div>
            <div className='padtop'></div>
            <div className='padtop'></div>

            <div className='padright'>
            <img src={wisper} alt='' />
            </div>
            <div className='padright'>
            <img src={paybox} alt='' />
            </div>
            <div>
            <img src={visual} alt='' />
            </div>
        </div>
    </div>
  )
}

export default Sponsors
