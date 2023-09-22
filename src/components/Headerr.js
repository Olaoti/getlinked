import React, { useEffect, useRef } from 'react'
import Nav from './Nav'
import Typewriter from './Typewriter'
import globe from '../assets/images/globe.png'
import { ReactComponent as Innoline } from '../assets/svgs/innoline.svg'
import chain from "../assets/images/tools/chain.png"
import firestar from "../assets/images/tools/firestar.png"
import bulb from "../assets/images/tools/bulb.png"
import Star from '../Props/Star'
import gsap from 'gsap'

function Headerr() {
  const windowidth = window.innerWidth
  const globeRef = useRef(null)
  console.log(globeRef)
  useEffect(()=>{
    gsap.fromTo(globeRef.current, {rotation:0,  transformOrigin:'50% 50%',},{rotation:360, yoyo:true, repeat:-1, duration:120, ease:'linear'} )
  })
  
  return (
    <div className='header'>
      <Nav/>
      <div className='bigbg'>
        <div></div>
      </div>
      <div className='bg'>
            <div className='bgchild'></div>
          </div>
        <div className='starwhite'>
      <Star height={windowidth>=900?(32):(12)} width={windowidth>=900?(26):(10)} delay={2} color={'white'}/>

        </div>
      <div className='innosect'>
      <div className='innovation'><Typewriter typetext={'Igniting a Revolution in HR Innovation'} delay={100}/> <div className='innoline'><Innoline width={windowidth<=900?(115):(255)} height={windowidth<=900?(7):(17)}/></div> </div>

      </div>
      <div className='header__section'>
        <div className='header__section__info'>
        
          <div className='heading'>
            <div className='tophead'>
              <div className='bulb'>
              <img src={bulb} alt='bulb'/> 
              </div>
             <h1>getlinked Tech </h1></div>
           <div className='bottomhead'>
           <h1>Hackathon <span className='colord'>1.0</span> </h1> <span className='img'><img src={chain} alt='chain'/></span><span className='firestar'><img src={firestar} alt='fire star'/></span>
           </div>
          
          </div>

          <p>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
          <button>Register</button>
          <div className='countdown'>
            <div>
            <span className='hour'>00</span>
            <span className='tag'>H</span>
            </div>
            <div>
            <span className='min'>00</span>
            <span className='tag'>M</span>
            </div>
            <div>
            <span className='sec'>00</span>
            <span className='tag'>S</span>
            </div>
          </div>
        </div>
        <div className='header__section__image'>
          <img src={globe} className='globe' alt='globe' ref={globeRef}/>
          </div>
      </div>
     
    </div>
  )
}

export default Headerr
