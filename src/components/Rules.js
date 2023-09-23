import React from 'react'
import Content from '../Props/Content'
import rulesimg from '../assets/images/rules.png'
import Star from '../Props/Star'

function Rules() {
  const windowidth = window.innerWidth
  return (
    <div className='rules'>
      <div className='starwhite starr'>
      <Star height={windowidth>=900?(32):(12)} width={windowidth>=900?(26):(10)} delay={3} color={'white'}/>
        </div>
        <div className='greystar starr'>
      <Star height={windowidth>=900?(32):(12)} width={windowidth>=900?(26):(10)} delay={4} color={'grey'}/>
        </div>
      <div className='rules__section'>
        <div className='rules__section__left'>
            <Content heading={'Rules and'} purpled={'Guidelines'} body={"Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a  design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world,that's what we're all about!"}/>
        </div>
        <div className='rules__section__right'>
            <img src={rulesimg} alt='rules' className='rulesimg'/>
        </div>
      </div>
    </div>
  )
}

export default Rules
