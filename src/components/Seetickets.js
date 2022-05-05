import React from 'react'
import Seetickets2 from './Seetickets2'

export default function Seetickets({games,rate, theme}) {
  return (
    <div className = 'Seetickets'>
        <Seetickets2 games = {games} rate = {rate} theme = {theme} seatmap = {games[0].seatmap.staticUrl}/>
    </div>
  )
}
