import React, { useState } from 'react'

function Faq({question, answer}) {
    const [show, setShow] = useState(false)
  return (
    <div className='faq'>
      <div className='faq__heading' onClick={()=>setShow(!show)}>
        <p>{question}</p>
        <div className='sign'>{show?('-'):('+')}</div>
      </div>
      <div className={`faq__body ${show&&'showing'}`}>
        <p>{answer}</p>
      </div>
    </div>
  )
}

export default Faq
