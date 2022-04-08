import { Games } from '@material-ui/icons'
import React from 'react'

export default function Eventcard({games, date, name, where, price, imgs, time,timezone,rate,theme} ) {
    
  // Imgages, Time and Date Time
    // const pictures = imgs.imgs[0]
    // const date = imgs.date.start.localDate
    // const start = date.start.localTime 
    // const names = imgs.name
    // const where = imgs.where.venues[0].name
    // const prices = imgs.price
    // const price = prices.map ((prices) => {
    //     return prices.min + '' +  prices.max
    //   });
    // const priceMax = imgs.price[0].max
    // const priceMin = imgs.price[0].min

  const year = (date[0] + date[1] + date[2] + date[3])
  const month = (date[5] + date[6])
  const day = (date[8] + date[9])

  const priceMin = (price[0].min * rate).toFixed(5)
  const priceMax = (price[0].max * rate).toFixed(5)


  //  console.log(time)
    
    return (
<div className= {`event-card-container ${theme}`}> 

    <div className='event-card-img'> 
        <img id ='event-pic' src = {imgs[0].url} alt =''/>
    </div>

    <div className='event-card-info'>
        <h1> {name} </h1> 
        <h2> {day}-{month}-{year} </h2>
        <h3> {time[0] + time[1] - 12}:{time[3] + time[4]}PM {timezone} </h3> 
        <h4> {where.venues[0].name} </h4> 
        <p> ⧫{priceMin} - ⧫{priceMax} </p>
        <button className= {`see-tickets ${theme}`}> See Tickets </button>
    </div>

</div>
  )
}
