import React, { useEffect, useState, useRef }
 from 'react'
import axios from 'axios';

import Nav from '../components/Nav'
import girl from '../assets/images/tools/girl.png'
import boy from '../assets/images/tools/boy.png'
import registerimg from '../assets/images/registerbg.png'
import successman from '../assets/images/successman.png'
import successdone from '../assets/images/sucessdone.png'
import { Link } from 'react-router-dom'
import BaseUrl from '../Props/API'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);


function Register() {
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
      scrollTrigger: {
        trigger: infoRef.current,
        start: "top bottom",
      },
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

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    axios.get(`https://backend.getlinked.ai/hackathon/categories-list`)
      .then((response) => {
        setData(response.data); 
        console.log(data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []); 

  const [submitted, setSubmittd] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    phone_number: '',
    team_name: '',
    group_size: 1,
    project_topic: '',
    category: 1,
    privacy_policy_accepted: true,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://backend.getlinked.ai/hackathon/registration', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Registration successful:', response.data);
      setSubmittd(true)
    } catch (error) {
        alert('Registration failed:', error, 'try again');
  
      }
    };
    if(loading){
        return <div className='loading-spin'><div className='spinner'></div></div>
    }
  return (
    <div className='register'>
        <div className={`alertsuccess ${submitted? (''):('noshow')}`}>
        <div className='successmsg'>
            <div className='successimg'>
                <img src={successdone} alt='successfully done' className='done'/>
                <img src={successman} alt='sucessful' className='manimg'/>
            </div>
            <h4>Congratulations <br/> you have successfully Registered!</h4>
            <p>Yes, it was easy and you did it! <br/> check your mail box for next step 😉</p>
            <Link to={'/'} className='link'><button>Back</button></Link>
        </div>
        </div>
      <Nav/>
      <div className='bg'></div>
      <div className='register__section'>
        <div className='register__section__left' ref={infoRef}>
            <div className='registerimg'>
                <img src={registerimg} alt='register'/>
            </div>
        </div>
        <div className='register__section__right' ref={formRef}>
        <div className='register-form'>
            <h3 className='heading'>Register</h3>
            <div className='movement'>
                <p>Be part of this movement!</p>
                <div className='avatar'>
                    <img src={girl} alt='walking girl'/>
                    <img src={boy} alt='walking boy'/>

                </div>
            </div>
            <h4>Create your account</h4>
            <form onSubmit={handleSubmit}>
                <div className='form-grid'>
                <div><label>Team's Name
                    </label>
                    <input type='text' name='team_name' id='team_name' onChange={handleChange} value={formData.team_name} placeholder='Enter the name of your group'>
                    </input>
                </div>
                <div><label> Phone
                    </label>
                    <input name='phone_number' id='phone_number' type='phone' placeholder='Enter your phone number' value={formData.phone_number} onChange={handleChange}/>
                </div>
                <div><label>Email
                    </label>
                    <input type='email' value={formData.email} onChange={handleChange} name='email' id='email' placeholder='Enter your email address'>
                    </input>
                </div>
                <div><label>Project Topic
                    </label>
                    <input type='text' name='project_topic' id='project_topic' placeholder='What is your group project topic' value={formData.project_topic} onChange={handleChange}/>
                </div>
               <div className='selectit'>
               <div><label> Category
                    </label>
                    <select name='category' id='category' onChange={handleChange} value={formData.category}>
                    <option value={'0'}>Select your category</option>
                    {data?.map(dat=>{
                        return(
                            <option value={dat?.id} name={dat?.id}>{dat?.name}</option>
                        )
                    })}
                  
                    </select>
                </div>
                <div><label>Group Size
                    </label>
                    <select name='group_size' id='group_size'>
                        <option value={'0'}>Select</option>
                        <option value={'1'}>1</option>
                        <option value={'2'}>2</option>
                        <option value={'3'}>3</option>
                        <option value={'4'}>4</option>
                        <option value={'5'}>5</option>
                        <option value={'6'}>6+</option>
                    </select>
                </div>
               </div>
                </div>
               
                <p className='reviewreg'>Please review your registration details before submitting</p>     
                <div className='checksect'>
                <input type='checkbox' name='privacy_policy_accepted' id='privacy_policy_accepted' value={formData.privacy_policy_accepted} onChange={handleChange}/><p>I agreed with the event terms and conditions  and privacy policy</p>
                </div>
               
                <button type='submit'>Register Now</button>     
            </form>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Register
