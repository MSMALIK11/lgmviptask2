import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import {Routes,Route} from 'react-router-dom'
import UserDetails from './UserDetails';


const AppRoute = () => {
  return(
      <>
      <Navbar />

      <Routes>
          <Route path="/" element={<Hero />} />
          <Route path='/users' element={<UserDetails />} />
        </Routes>


      </>
  )
};

export default AppRoute;
