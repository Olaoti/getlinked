import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ReactComponent as Greystar } from '../assets/svgs/greystar.svg'
import whitestar from '../assets/svgs/star.png'
import purplestar from '../assets/svgs/star pu.png'
import lilacstar from '../assets/svgs/purplestar.png'





function Star({width, height, delay, color}) {
const star = useRef(null)
const dur =delay;
useEffect(()=>{
    gsap.fromTo(star?.current, {scale:0.7, delay:1,}, {scale:1.2, duration:dur,delay:dur, yoyo:true, repeat:-1})
})

if (color==='lilac'){
    return (
        <div className='star' >
        <img src={lilacstar} width={width} height={height} alt='star' ref={star}/>
    </div>
      )
}
else if (color==='purple'){
    return (
        <div className='star' >
        <img src={purplestar} width={width} height={height} alt='star' ref={star}/>
    </div>
      )
}
else if (color==='grey'){
    return (
        <div className='star' >
            <Greystar width={width} height={height} fill={color} ref={star}/>
        </div>
      )
}
else{
    return (
        <div className='star' >
            <img src={whitestar} width={width} height={height} alt='star' ref={star}/>
        </div>
      )
}
 
}

export default Star
