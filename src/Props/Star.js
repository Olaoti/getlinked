import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ReactComponent as Starsvg } from '../assets/svgs/star.svg'

function Star({width, height, delay, color}) {
const star = useRef(null)
const dur =delay;
useEffect(()=>{
    gsap.fromTo(star?.current, {scale:0.7, delay:1,}, {scale:1.2, duration:dur,delay:dur, yoyo:true, repeat:-1})
})

if (color==='white'){
    return (
        <div className='star' >
            <Starsvg width={width} height={height} fill={color} ref={star}/>
        </div>
      )
}
 
}

export default Star
