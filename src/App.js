import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Sport from './components/Sport'
import Calltoaction from './components/Calltoaction'
import { useEffect, useState } from 'react'

function App() {
      

const [games, setGames] = useState ([])
// const [time, setTime] = useState ([])

useEffect (() => { 

fetch('https://app.ticketmaster.com/discovery/v2/events.json?apikey=VipiE7zQH6UYqMkh5ZpGSZP2U4M1gOrm')
.then(response => (response.json()))
.then((json) => {setGames(json._embedded.events)
})

}, [])

// console.log(games)

  return (
    <div className="App">   
       <About/>  
        <Calltoaction/> 
       <Sport games = {games} />
       <Navbar/> 
    </div>
  );
}

export default App;
