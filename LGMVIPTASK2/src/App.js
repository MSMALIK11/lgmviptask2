
import './App.css';
import Hero from './component/Hero';
import Navbar from './component/Navbar';
import {BrowserRouter} from 'react-router-dom'
import Route from './component/Route';

const  App=()=> {
  return (
    <div className="App">


   <BrowserRouter>
   <Route />
   </BrowserRouter>
   

  
    </div>
  );
}

export default App;
