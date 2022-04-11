import React from 'react'
import { Route, Routes } from "react-router-dom";
import About from './about';
import Landingpage from './landingPage';


const Homepage = () => {
  return (
    <div className='mainContent'>
      <Landingpage/>
      <About />
    </div>
  )
}

export default Homepage
