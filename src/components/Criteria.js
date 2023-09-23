import React from 'react'
import criteriaimg from '../assets/images/criteria.png'
import Content from '../Props/Content'
import { ReactComponent as Ellipse } from '../assets/svgs/ellipse.svg'
import Star from '../Props/Star'

function Criteria() {
  const windowidth = window.innerWidth
  return (
    <div className='criteria'>
      <div className='starwhite starr'>
      <Star height={windowidth>=900?(32):(12)} width={windowidth>=900?(26):(10)} delay={3} color={'white'}/>
        </div>
        <div className='purple starr'>
      <Star height={windowidth>=900?(32):(12)} width={windowidth>=900?(26):(10)} delay={4} color={'purple'}/>
        </div>
        <div className='greystar starr'>
      <Star height={windowidth>=900?(32):(12)} width={windowidth>=900?(26):(10)} delay={4} color={'grey'}/>
        </div>
      <div className='criteria__section'>
        <div className='criteria__section__left'>
            <Ellipse className='ellipse'/>
            <div className='criteriaimg'>
            <img src={criteriaimg} alt='criteria img'/>
            </div>
        </div>
        <div className='criteria__section__right'>
            <Content heading={'Judging Criteria'} purpled={'Key attributes'}/>
            <p><span>Innovation and Creativity</span> Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.</p>
            <p><span>Functionality:</span> Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.</p>
            <p><span>Impact and Relevance:</span> Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.</p>
            <p><span>Technical Complexity:</span> Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.</p>
            <p><span>Adherence to Hackathon Rules:</span> Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.</p>
            <button>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Criteria
