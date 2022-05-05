import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Eventpage from './Pages/Eventpage';
import Ticketpage from './Pages/Ticketpage';

function App() {
      
  return (
<BrowserRouter>
    <div className= 'App'>
        <Routes>
          <Route path = "/home" element = {<Homepage/>} />
          <Route path = "/events" element = {<Eventpage/>} />
          <Route path = "/tickets" element = {<Ticketpage/>} />
          <Route path = "/" element = {<Homepage/>} />
          <Route path = "/" element = {<Homepage/>} />
       </Routes> 
    </div>
</BrowserRouter>
  );
}

export default App;

