import React from 'react'

export default function Calltoaction({theme}) {
  return (

    <div className='calltoaction'>
        
        <div className= {`calltoaction-info ${theme}`}>
            <h1> Register Today </h1>
            <h4> Get NFTickets delivered to your wallet and share them instantly with friends. Simple as that. </h4>
            <button className='button'> Sign Up</button>
        </div>
    </div>
    
  )
}

