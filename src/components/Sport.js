import React from 'react'
import Sportrow from './Sportrow'
import '../styles/Sport.css'

export default function Sport({games, rate, theme}) {

    console.log(games)


  return (
    
    <div className='sport'>
        
        
        <div className='sport-header' >
          <h1> Sport Tickets </h1>
        </div>
        
        <div className='sport-2'> 

      {games.map ((game, id) => {
      return <Sportrow 
        imgs = {game.images} 
        eventType = {game.classifications}
        time = {game.dates.start.localTime ? game.dates.start.localTime : 'Not Avaliable '}  
        date = {game.dates.start.localDate} 
        name = {game.name} 
        where = {game._embedded}
        timeZone = {game.dates.timezone}
        price  = {game.priceRanges ? game.priceRanges : 'Not Avaliable ' }
        key = {id}
        rate = {rate.ETH}
        theme ={theme}
         />
    })}  
    </div>
  </div>
  )
}
