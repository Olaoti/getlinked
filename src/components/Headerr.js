import React, { useRef, useState,useEffect } from 'react'
import Nav from './Nav'
import Typewriter from '../Props/Typewriter'
import globe from '../assets/images/globe.png'
import { ReactComponent as Innoline } from '../assets/svgs/innoline.svg'
import chain from "../assets/images/tools/chain.png"
import firestar from "../assets/images/tools/firestar.png"
import bulb from "../assets/images/tools/bulb.png"
import Star from '../Props/Star'
import { Link } from 'react-router-dom'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);


function Headerr() {
  const windowidth = window.innerWidth
  const globeRef = useRef(null)
  const infoRef = useRef(null)
  useEffect(()=>{
    gsap.fromTo(
      infoRef.current,
    { opacity: 0, x: -200 },
    {
      opacity: 1,
      x: 0,
      duration: 0.5,
      delay: 0.1,
    }
    )
    gsap.fromTo(globeRef.current, {rotation:0,  transformOrigin:'50% 50%',},{rotation:360, yoyo:true, repeat:-1, duration:120, ease:'linear'} )
  },[])
  

  const calculateTimeLeft = () => {
    const difference = +new Date("2023-09-26T18:30:00+05:30") - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        hours: Math.floor(difference / (1000 * 60 * 60)),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  },[timeLeft]);
  return (
    <div className='header'>
      <Nav/>
      <div className='bigbg'>
        <div></div>
      </div>
      <div className='bg'>
            <div className='bgchild'></div>
          </div>
        <div className='starwhite starr'>
      <Star height={windowidth>=900?(32):(12)} width={windowidth>=900?(26):(10)} delay={2} color={'white'}/>
        </div>
        <div className='greystar starr'>
      <Star height={windowidth>=900?(32):(12)} width={windowidth>=900?(26):(10)} delay={2} color={'grey'}/>
        </div>
        <div className='greystar2 starr'>
      <Star height={windowidth>=900?(32):(12)} width={windowidth>=900?(26):(10)} delay={2} color={'grey'}/>
        </div>
      <div className='innosect'>
      <div className='innovation'><Typewriter typetext={'Igniting a Revolution in HR Innovation'} delay={100}/> <div className='innoline'><Innoline width={windowidth<=900?(115):(255)} height={windowidth<=900?(7):(17)}/></div> </div>

      </div>
      <div className='header__section'>
        <div className='header__section__info' ref={infoRef}>
        
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
          <Link className='link' to={'/register'}>
          <button>Register</button>

          </Link>
          <div className='countdown'>
           {(timeLeft?.hours+timeLeft?.minutes+timeLeft?.seconds) >0? 
           (<>
           <div>
            <span className='hour'>{timeLeft?.hours}</span>
            <span className='tag'>H</span>
            </div>
            <div>
            <span className='min'>{Number(timeLeft?.minutes)>9?(timeLeft.minutes):(`0${timeLeft.minutes}`)}</span>
            <span className='tag'>M</span>
            </div>
            <div>
            <span className='sec'>{Number(timeLeft?.seconds)>9?(timeLeft.seconds):(`0${timeLeft.seconds}`)}</span>
            <span className='tag'>S</span>
            </div>
           </>):(<div><span color='red'>EXPIRED</span></div>)}
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
