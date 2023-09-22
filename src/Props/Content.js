import React from 'react'

function Content({heading, purpled, body, bold}) {
  return (
    <div className='content'>
      <h3>{heading} <span>{purpled}</span></h3>
      <p>{body} <span style={{fontWeight:'700'}}>{bold}</span></p>
    </div>
  )
}

export default Content
