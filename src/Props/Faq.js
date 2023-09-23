import React, { useRef, useState,useEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);


function Faq({question, answer}) {
const faqRef = useRef(null)
useEffect(() => {
  gsap.fromTo(
    faqRef.current,
    { opacity: 0, y: 100 },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      delay: 0.1,
      scrollTrigger: {
        trigger: faqRef.current,
        start: "top bottom",
      },
    }
  );
}, [faqRef]);
    const [show, setShow] = useState(false)
  return (
    <div className='faq' ref={faqRef}>
      <div className='faq__heading' onClick={()=>setShow(!show)}>
        <p>{question}</p>
        <div className='sign'>{show?('-'):('+')}</div>
      </div>
      <div className={`faq__body ${show&&'showing'}`}>
        <p>{answer}</p>
      </div>
    </div>
  )
}

export default Faq
