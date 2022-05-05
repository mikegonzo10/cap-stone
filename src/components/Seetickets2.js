import React from 'react'
import "../styles/Seetickets.css"

export default function Seeticket2 ({games, seatmap}) {
    console.log(games)
  return (
    <div className='Seetickets'>
       
        <div className='Game-info'>
            
        </div>
        
        <div className='Seatmap'>
            <img src = {seatmap}/>
        </div>
        
        <div className='tickets-rows'>

        </div>
    </div>
  )
}
