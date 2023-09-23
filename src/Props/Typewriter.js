import React, {useState, useEffect} from 'react'

function Typewriter({typetext, delay}) {
        const [currText, setCurrText] = useState('');
        const [currIndex, setCurrIndex] = useState(0);

        useEffect(() => {
            if (currIndex < typetext.length) {
              const timeout = setTimeout(() => {
                setCurrText(prevText => prevText + typetext[currIndex]);
                setCurrIndex(prevIndex => prevIndex + 1);
              }, delay);
          
              return () => clearTimeout(timeout);
            }
          }, [currIndex, delay, typetext]);
      
  return (
    <div className='typewriter'>
      {currText}
    </div>
  )
}

export default Typewriter
