import React from 'react'
import Nav from '../components/Nav'
import girl from '../assets/images/tools/girl.png'
import boy from '../assets/images/tools/boy.png'
import registerimg from '../assets/images/registerbg.png'
import successman from '../assets/images/successman.png'
import successdone from '../assets/images/sucessdone.png'
import { Link } from 'react-router-dom'


function register() {
  return (
    <div className='register'>
        <div className='alertsuccess noshow'>
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
        <div className='register__section__left'>
            <div className='registerimg'>
                <img src={registerimg} alt='register'/>
            </div>
        </div>
        <div className='register__section__right'>
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
            <form>
                <div className='form-grid'>
                <div><label>Team's Name
                    </label>
                    <input type='text' placeholder='Enter the name of your group'>
                    </input>
                </div>
                <div><label> Phone
                    </label>
                    <input type='phone' placeholder='Enter your phone number'>
                    </input>
                </div>
                <div><label>Email
                    </label>
                    <input type='email' placeholder='Enter your email address'>
                    </input>
                </div>
                <div><label>Project Topic
                    </label>
                    <input type='text' placeholder='What is your group project topic'>
                    </input>
                </div>
               <div className='selectit'>
               <div><label> Category
                    </label>
                    <select name='category' id='category'>
                    <option value={'0'}>Select your category</option>
                    <option value={'1'}>Frontend</option>
                    </select>
                </div>
                <div><label>Group Size
                    </label>
                    <select name='group size'>
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
                <input type='checkbox' name='terms' id='terms'/><p>I agreed with the event terms and conditions  and privacy policy</p>
                </div>
               
                <button>Register Now</button>     
            </form>
        </div>
        </div>
      </div>
    </div>
  )
}

export default register
