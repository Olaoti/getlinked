import React from 'react'
import Content from "../Props/Content"
import { ReactComponent as Mark } from '../assets/svgs/mark.svg'
import privacyman from '../assets/images/privacyman.png'
import Star from '../Props/Star.js'

function Privacy() {
  const windowidth = window.innerWidth

  return (
    <div className='privacy'>
      <div className='whitestar starr'>
      <Star height={windowidth>=900?(22):(12)} width={windowidth>=900?(16):(10)} delay={2} color={'white'}/>
        </div>
        <div className='lilacstar starr'>
      <Star height={windowidth>=900?(32):(12)} width={windowidth>=900?(26):(10)} delay={3} color={'lilac'}/>
        </div>
        <div className='purplestar starr'>
      <Star height={windowidth>=900?(48):(12)} width={windowidth>=900?(40):(10)} delay={3.5} color={'purple'}/>
        </div>
        <div className='greystar starr'>
      <Star height={windowidth>=900?(30):(12)} width={windowidth>=900?(20):(10)} delay={4} color={'grey'}/>
        </div>
        <div className='whitestar1 starr'>
      <Star height={windowidth>=900?(32):(12)} width={windowidth>=900?(26):(10)} delay={2.5} color={'white'}/>
        </div>
        <div className='lilacstar1 starr'>
      <Star height={windowidth>=900?(32):(12)} width={windowidth>=900?(26):(10)} delay={3} color={'lilac'}/>
        </div>
        <div className='purplestar1 starr'>
      <Star height={windowidth>=900?(48):(12)} width={windowidth>=900?(40):(10)} delay={3.5} color={'purple'}/>
        </div>
        <div className='greystar1 starr'>
      <Star height={windowidth>=900?(20):(12)} width={windowidth>=900?(24):(10)} delay={3} color={'grey'}/>
        </div>
        <div className='privacy__section'>
            <div className='privacy__section__left'>
                <Content heading={'Privacy Policy and'} purpled={'Terms'} />
                <p className='date'>
                Last updated on September 12, 2023
                </p>
                <p className='below'>Below are our privacy & policy, which outline a lot of goodies. it's our aim to always take of our participant</p>
                <div className='box'>
                    <p>At getlinked tech Hackathon 1.0, we value your privacy
                    and are committed to protecting your personal information.
                    This Privacy Policy outlines how we collect, use, disclose, 
                    and safeguard your data when you participate in our tech 
                    hackathon event. By participating in our event, you consent 
                    to the practices described in this policy.</p>
                    <h5>Licensing Policy</h5>
                    <p className='bold'>Here are terms of our Standard License:</p>
                    <p className='listed'>
                      <div><Mark width={'17px'} height={'17px'}/></div>
                      <span>The Standard License grants you a non-exclusive right to
                      navigate and register for our event</span>
                    </p>
                    <p className='listed'>
                    <div><Mark width={'17px'} height={'17px'}/></div>
                      <span> You are licensed to use the item available at any free source
                      sites, for your project developement</span>
                    </p>
                    <button>Read More</button>
                </div>
            </div>
            <div className='privacy__section__right'><div className='privacyimg'>
              <img src={privacyman} alt='privacy'/></div></div>
        </div>
    </div>
  )
}

export default Privacy
