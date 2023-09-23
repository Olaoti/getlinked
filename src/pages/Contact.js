import axios from 'axios';
import React, { useRef,useEffect, useState } from 'react'
import { ReactComponent as Fb } from '../assets/svgs/fb.svg'
import { ReactComponent as Insta } from '../assets/svgs/insta.svg'
import { ReactComponent as Twitter } from '../assets/svgs/twitter.svg'
import { ReactComponent as Linkedin } from '../assets/svgs/linkedin.svg'
import Nav from '../components/Nav';
import gsap from 'gsap';

function Contact() {
    const infoRef = useRef(null)
    const formRef = useRef(null)
useEffect(() => {
  gsap.fromTo(
    infoRef.current,
    { opacity: 0, x: -300 },
    {
      opacity: 1,
      x: 0,
      duration: 0.5,
      delay: 0.1,
    }
  );
  gsap.fromTo(
    formRef.current,
    { opacity: 0, x: 300 },
    {
      opacity: 1,
      x: 0,
      duration: 0.5,
      delay: 0.1,
    }
  );
}, [infoRef,formRef]);

const [formData, setFormData] = useState({
    email: '',
    phone_number: '',
    first_name: '',
    message:'',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  async function submitData(formData) {
    try {
      const response = await axios.post('https://backend.getlinked.ai/hackathon/contact-form', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      alert('Data submitted successfully:', response.data);
    } catch (error) {
      alert('Error submitting data:', error, 'try again');
    }
  }

  return (
    <div className='contact'>
        <Nav/>
      <div className='contact__section'>
        <div className='contact__section__left' ref={infoRef}>
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
        <div className='contact__section__right' ref={formRef}>
            <form onSubmit={submitData}>
                <h5>Questions or need assistance?</h5>
                <h5>Let us know  about it!</h5>
                <p className='mailus mobile'>
                Email us below to any question related to our event
                </p>
                <input type='text' placeholder="Team's name" className='mobile'/>
                <input type='text' placeholder='Full Name' name='first_name' value={formData.first_name}  onChange={handleChange}/>
                <input type='mail' className='mail' placeholder='Mail' value={formData.email} name='email' onChange={handleChange} />
                <textarea placeholder='Message' name='message' value={formData.message} onChange={handleChange}/>
                <div className='submitbutton'>
                <button>Submit</button>
                </div>
            </form>
            <p className='share mobile'>Share on</p>
            <div className='mobile'>
            <div className='contact-links mobile'>
                <Insta/>
                <Twitter/>
                <Fb/>
                <Linkedin/>
            </div>
            </div>
           
        </div>
      </div>
    </div>
  )
}

export default Contact
