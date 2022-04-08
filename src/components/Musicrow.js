import React from 'react'

export default function Musicrow({date, name, where, price, imgs, time, timeZone, eventType, rate, theme}) {

    const year = (date[0] + date[1] + date[2] + date[3])
    const day = (date[5] + date[6])
    const month = (date[8] + date[9])

  const priceMin = (price[0].min * rate).toFixed(5)
  const priceMax = (price[0].max * rate).toFixed(5)

  console.log(priceMin)

    
    if (eventType[0].segment.name === 'Music') {
        return (
      <div className= {`musicrow-container ${theme}`}> 
          <div className='music-card-img'> 
              <img id ='music-pic' src = {imgs[0].url} alt =''/>
          </div>
    
        <div className='music-card-info'>
            <h1> {name} </h1> 
            <h2> {day}-{month}-{year} </h2>
            <h3> {time[0] + time[1] - 12}:{time[3] + time[4]}PM {timeZone} Time </h3> 
            <h4> {where.venues[0].name} </h4> 
            <p> ⧫{priceMin} - ⧫{priceMax} </p>
            <button className= {`see-tickets ${theme}`}> See Tickets </button>
        </div>
      </div>
      );
      } else {
        return null
      }
    }
  
//   return (
//     <div className='sportrow-container'> 
//     <div className='sport-card-img'> 
//         <img id ='sport-pic' src = {imgs[0].url} alt =''/>
//     </div>

//   <div className='sportcard-info'>
//       <h1> {name} </h1> 
//       <h2> {day}-{month}-{year} </h2>
//       <h3> {time[0] + time[1] - 12}:{time[3] + time[4]}PM {timeZone} Time </h3> 
//       <h4> {where.venues[0].name} </h4> 
//       <p> ${price[0].min} - ${price[0].max} </p>
//       <button className='see-tickets'> See Tickets </button>

//   </div>
  
//   </div>
//   )
// }
