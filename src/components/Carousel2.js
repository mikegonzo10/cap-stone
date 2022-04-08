import React from 'react'
import '../styles/Carousel.css'
import { useState } from 'react'
import ArrowBackIosIcon  from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon  from '@material-ui/icons/ArrowForwardIos'


export default function Carousel2({games}) {

    const [currImg, setCurrImg] = useState(0)

  let flag = false
  let img 
  let time 
  let date
  let where
  let time2
  let time3
  let dateYear
  let dateMonth
  let dateDay
  

  if(games.length == 20) {
    flag = true 
    img = games[currImg].images[5].url
     time = games[currImg].dates.start.localTime
     date = games[currImg].dates.start.localDate
     where = (games[0]._embedded.venues[0].name)
     time2 = time[0] + time[1] - 12
     time3 = time[3]+time[4]
     dateYear = date[0] + date[1]+date[2]+ date[3]
     dateMonth = date[5] + date[6]
     dateDay = date[8] + date[9]
  }


      
    // style ={{backgroundImage: `url(${img})`}} 

  return (
    <>
    {flag ? (
    <div  className='carousel-inner'   style ={{backgroundImage: `url(${img})`}}  >     
         <div className='left' onClick = { () => { currImg > 0 && setCurrImg(currImg - 1); }} >
            <ArrowBackIosIcon/>
        </div>
        <div className='center'> 
            <h1> {games[currImg].name}</h1>
            <h2> {dateDay}/{dateMonth}/{dateYear} </h2>
            <h3> {time2}:{time3} PM  </h3>
            <h4> {where} </h4>
            <button id = 'button'> See Tickets </button>
        </div>
        <div className='right' onClick = { () => {currImg < 2 - 1 && setCurrImg(currImg + 1); }}>
            <ArrowForwardIosIcon/> 
        </div> 
    </div> 
    ) : (
      <div> 
        LOADING
      </div>
    )
   }
   </>
  )
}
