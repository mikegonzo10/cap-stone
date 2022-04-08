import React from 'react'
import '../styles/Carousel.css'
import Carousel2 from './Carousel2'


export default function Carousel({games}) {


  return (
    <div className='carousel'>
      <Carousel2 games = {games} />  
    </div>
  )
}
