import ImportanceBox from '@/component/boxes/importanceBox'
import React from 'react'

function Inmportance() {
    
  return (
    <div className='rs-importance style1'>
         <div className='container'>
            <div className='heading'> 
                <h2 className='title'>Importance Of Handwriting</h2>
                <div className='desc'>Handwriting promotes better mind and motor coordination,  enhances <br/> vocabulary, and improves communication skills.</div>
            </div>
            <ImportanceBox/>
         </div>
    </div>
  )
}

export default Inmportance
