import React from 'react'
import Content from '../Props/Content'
import rulesimg from '../assets/images/rules.png'

function Rules() {
  return (
    <div className='rules'>
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
