import React from 'react'
import Musicrow from './Musicrow'
import '../styles/Music.css'

export default function Music({games,rate, theme}) {

    

  return (
    
    
    <div className='music'>
        
        <div className='music-header' >
          <h1> Music Tickets </h1>
        </div>
        
        <div className='music-2'> 
      {games.map ((game, id) => {
      return <Musicrow
        imgs = {game.images} 
        eventType = {game.classifications}
        time = {game.dates.start.localTime ? game.dates.start.localTime : 'Not Avaliable '}  
        date = {game.dates.start.localDate ? game.dates.start.localDate : 'Not Avaliable' } 
        name = {game.name} 
        where = {game._embedded}
        timeZone = {game.dates.timezone}
        price  = {game.priceRanges ? game.priceRanges : 'Not Avaliable ' }
        key = {id}
        rate = {rate.ETH}
        theme = {theme}
         />
    })}  
    </div>
  </div>
  )
}
