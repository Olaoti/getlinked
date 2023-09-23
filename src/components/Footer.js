import React from 'react'
import { ReactComponent as Fb } from '../assets/svgs/fb.svg'
import { ReactComponent as Insta } from '../assets/svgs/insta.svg'
import { ReactComponent as Twitter } from '../assets/svgs/twitter.svg'
import { ReactComponent as Linkedin } from '../assets/svgs/linkedin.svg'
import { ReactComponent as Location } from '../assets/svgs/location.svg'
import { ReactComponent as Phone } from '../assets/svgs/phone.svg'



function Footer() {
  return (
    <div className='footer'>
        <div className='footer__section'>
            <div className='about'>
                <div className='smalllogo'>
                    get<span>linked</span>
                </div>
                <p className='info smtext'>
                Getlinked Tech Hackathon is a technology innovation program 
established by a group of organizations with the aim of showcasing 
young and talented individuals in the field of technology
                </p>
                <div className='small-links'>
                    <p className='smtext'>Terms of Use</p>
                    <p className='smtext'>Policy</p>
                </div>
            </div>
            <div className='useful-links'>
                <div className='heading'>
                Useful Links
                </div>
                <p>Timeline</p>
                <p>Overview</p>
                <p>FAQs</p>
                <p>Register</p>
                <div className='contact-links'>
                    <p>Follow Us</p>
                    <Insta/>
                    <Twitter/>
                    <Fb/>
                    <Linkedin/>
                </div>
            </div>
            <div className='contact-us'>
                <div className='heading'>
                    Contact Us
                </div>
                <div className='smtext'><Phone/><p> +234 6707653444</p></div>
                <div className='smtext'><div><Location width={'13px'} height={'15px'}/></div> <p>27,Alara Street <br/> Yaba 100012 <br/>Lagos State</p></div>
            </div>
        </div>
        <div className='copyright smtext'>
        All rights reserved. © getlinked Ltd.
        </div>
    </div>
  )
}

export default Footer
