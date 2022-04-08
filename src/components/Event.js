import React from 'react'
import Eventcard from './Eventcard'
import '../styles/Event.css'
import Header from './Header';
import Footer from './Footer';


export default function Event ({games, rate,theme}) {

  return (      
  

  <div className='event'>

    <Header/>
    <div className='event-header' >
          <h1> Event Tickets </h1>
    </div>

    <div className='event-2'> 
      {games.map ((game, id) => {
      return <Eventcard  
      games = {game}
      imgs = {game.images} 
      time = {game.dates.start.localTime ? game.dates.start.localTime : 'Not Avaliable '}  
      date = {game.dates.start.localDate} 
      timezone = {game.dates.timezone ? game.dates.timezone : 'Not Avaliable'}
      name = {game.name}  
      where = {game._embedded}
      price  = {game.priceRanges ? game.priceRanges : 'Not Avaliable ' }
      key = {id}
      rate = {rate.ETH}
      theme = {theme}
      />
    })} 
    </div >
    {/* <Footer/> */}
    <div className='event-footer'>
    <Footer/>
    </div>
  </div>
  )
}
