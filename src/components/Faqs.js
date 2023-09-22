import React from 'react'
import Faq from '../Props/Faq'
import Content from '../Props/Content'
import Faqslist from '../Props/faqslist'
import faqman from "../assets/images/faqman.png"

function Faqs() {
  return (
    <div className='faqs'>
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
