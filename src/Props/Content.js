import React, { useRef, useState,useEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);



function Content({heading, purpled, body, 
bold}) {
  const headingRef = useRef(null)
const bodyRef = useRef(null)

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
}, [headingRef, bodyRef]);
  return (
    <div className='content'>
      <h3 ref={headingRef}>{heading} <span>{purpled}</span></h3>
      <p ref={bodyRef}>{body} <span style={{fontWeight:'700'}}>{bold}</span></p>
    </div>
  )
}

export default Content
