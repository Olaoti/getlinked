import React from 'react'
import { ReactComponent as Fb } from '../assets/svgs/fb.svg'
import { ReactComponent as Insta } from '../assets/svgs/insta.svg'
import { ReactComponent as Twitter } from '../assets/svgs/twitter.svg'
import { ReactComponent as Linkedin } from '../assets/svgs/linkedin.svg'
import Nav from '../components/Nav'

function Contact() {
  return (
    <div className='contact'>
        <Nav/>
      <div className='contact__section'>
        <div className='contact__section__left'>
            <h3>Get in touch</h3>
            <p>Contact <br/> Information</p>
            <p>27,Alara Street<br/> Yaba 100012 <br/> Lagos State</p>
            <p>Call Us : 07067981819</p>
            <p>we are open from Monday-Friday <br/>08:00am - 05:00pm</p>
            <p className='share'>Share on</p>
            <div className='contact-links'>
                <Insta/>
                <Twitter/>
                <Fb/>
                <Linkedin/>
            </div>
        </div>
        <div className='contact__section__right'>
            <form>
                <h5>Questions or need assistance?</h5>
                <h5>Let us know  about it!</h5>
                <p className='mailus mobile'>
                Email us below to any question related to our event
                </p>
                <input type='text' placeholder="Team's name" className='mobile'/>
                <input type='text' placeholder='Full Name'/>
                <input type='mail' className='mail' placeholder='Mail'/>
                <textarea placeholder='Message'/>
                <div className='submitbutton'>
                <button>Submit</button>
                </div>
            </form>
            <p className='share mobile'>Share on</p>
            <div className='mobile'>

            </div>
            <div className='contact-links mobile'>
                <Insta/>
                <Twitter/>
                <Fb/>
                <Linkedin/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
