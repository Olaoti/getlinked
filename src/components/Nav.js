import React, { useState } from 'react'
import { ReactComponent as Menu } from '../assets/svgs/menu.svg'
import { ReactComponent as Cancel } from '../assets/svgs/cancel.svg'
import {Link, NavLink } from 'react-router-dom'

function Nav() {
    const [show, setShow] = useState(false)
  return (
    <div className={`nav`}> 
    <div className={`mobile-nav ${show? ('showing'):('notshowing')}`} >
      <Link to={'/'} className='link'>
        <h2 className='logo'>
            get<span>linked</span>
        </h2>
        </Link>
        <div className='hamburger mobile'>
          <Menu onClick={()=>setShow(!show)}/>
        </div>
    </div>
    <div className={`nav-links ${show?('display'):('nodisplay')}`}>
    <div className='cancelicon'>
    <div className='mobile cancel'>
        <div className='inner'>
        <Cancel onClick={()=>setShow(!show)}/>
        </div>
    </div>
    </div>
    
    <NavLink to="/"  className='link' >
        <p className='timelinelink'>Timeline</p>
      </NavLink>
      <NavLink to="/"  className='link'>
        <p className='overviewlink'>Overview</p>
      </NavLink>
      <NavLink to="/" className='link'>
        <p className='faqlink'>FAQs</p>
      </NavLink>
      <NavLink to="/Contact"  className='link'>
        <p className='contactlink'>Contact</p>
      </NavLink>
      <NavLink to="/register"  className='link register'>
        <button className='registerlink'>Register</button>
      </NavLink>
    </div>
  </div>
  )
}

export default Nav
