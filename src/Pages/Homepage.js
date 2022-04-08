import React from 'react'
import "../App.css"
import Footer from '../components/Footer';
import About from '../components/About';
import Calltoaction from '../components/Calltoaction'
import Sport from '../components/Sport';
import { useEffect, useState } from 'react'
import Carousel from '../components/Carousel';
import Music from '../components/Music';
import Header from '../components/Header';
import Event from '../components/Event';

export default function Homepage() {

const [games, setGames] = useState ([])
const [rate, setRate] = useState ([])

useEffect (() => { 

fetch('https://app.ticketmaster.com/discovery/v2/events.json?apikey=VipiE7zQH6UYqMkh5ZpGSZP2U4M1gOrm')
.then(response => (response.json()))
.then((json) => {setGames(json._embedded.events)
})

}, [])

useEffect (() => { 

  fetch('https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=ETH&api_key={45869b7a62280b06093041b1808b869e1871f67de308d7edda0acadf6360ebf4}')
  .then(response => (response.json()))
  .then((json) => {setRate(json)
  })
  }, [])

      
    const [theme, setTheme] = useState('') 


    const toggleTheme = () => {
    theme ? setTheme('') : setTheme('light')
    theme ? setIcon('./images/icon-sun.svg'): setIcon('./images/icon-moon.svg') 
    }

    const [icon, setIcon] = useState('./images/icon-sun.svg')

  return (
    <div>
        <div className= {`Homepage ${theme}`}> 
        <img onClick={() => toggleTheme()} id = 'switch' src={icon} /> 
          <Header theme = {theme}/>
          <Carousel games = {games} /> 
          <Sport games = {games} rate = {rate} theme = {theme}/> 
          <Music games = {games} rate = {rate} theme = {theme} />
          <About theme = {theme}/>   
          <Calltoaction theme = {theme}/> 
          <Footer/>   
        </div>
    </div>
  )
}
