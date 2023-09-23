import React from 'react'
import Faq from '../Props/Faq'
import Content from '../Props/Content'
import Faqslist from '../Props/faqslist'
import faqman from "../assets/images/faqman.png"
import Star from '../Props/Star'

function Faqs() {
  const windowidth = window.innerWidth

  return (
    <div className='faqs'>
         <div className='whitestar starr'>
      <Star height={windowidth>=900?(32):(12)} width={windowidth>=900?(26):(10)} delay={2.5} color={'white'}/>
        </div>
        <div className='lilacstar starr'>
      <Star height={windowidth>=900?(32):(12)} width={windowidth>=900?(26):(10)} delay={3} color={'lilac'}/>
        </div>
        <div className='purplestar starr'>
      <Star height={windowidth>=900?(48):(12)} width={windowidth>=900?(40):(10)} delay={3.5} color={'purple'}/>
        </div>
        <div className='greystar starr'>
      <Star height={windowidth>=900?(32):(12)} width={windowidth>=900?(26):(10)} delay={2} color={'grey'}/>
        </div>
      <div className='faqs__section'>
        <div className='faqs__section__left'>
            <Content heading={'Frequently Ask'} purpled={'Question'} body={'We got answers to the questions that you might want to ask about '} bold={'getlinked Hackathon 1.0'} />
            <div className='faqssect'>
                {
                    Faqslist?.map((faq)=>{
                        return(
                            <Faq key={faq?.id} question={faq?.question} answer={faq?.answer} />
                        )
                    })
                }
            </div>
        </div>
        <div className='faqs__section__right'>
          <div className='ques one'>
                ?
          </div>
          <div className='ques two'>
                ?
          </div>
          <div className='ques three'>
                ?
          </div>
          <div className='faqimg'>
            <img src={faqman} alt='faq man'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faqs
