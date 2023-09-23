import React from 'react'
import Content from '../Props/Content'
import introimg from '../assets/images/intro.png'
import arrowimg from "../assets/images/tools/arrow.png"
import Star from '../Props/Star'

function Intro() {
  const windowidth = window.innerWidth

  return (
    <div className='intro'>
        <div className='purplestar starr'>
      <Star height={windowidth>=900?(32):(12)} width={windowidth>=900?(26):(10)} delay={2.5} color={'purple'}/>
        </div>
        <div className='lilacstar starr'>
      <Star height={windowidth>=900?(32):(12)} width={windowidth>=900?(26):(10)} delay={3} color={'lilac'}/>
        </div>
      <div className='intro__section'>
        <div className='intro__section__left'>
          <img src={introimg} alt='' className='introimg'/>
          <div className='arrowimg'>
          <img src={arrowimg} alt='arrow'/>
          </div>
        </div>
        <div className='intro__section__right'>
          <Content heading={'Introduction to getlinked'} purpled={'tech Hackathon 1.0'} body={"Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!"}/>
        </div>
      </div>
    </div>
  )
}

export default Intro
