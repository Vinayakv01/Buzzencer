import React from 'react'
import Influencer from '../influencer/influencer';
import Home from '../home/home';
import Login from '../login/login';
import Signup from '../login/signup';
import {Routes, Route,} from 'react-router-dom';


const Routing = () => {
  return (
    <Routes>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<Login/>}/>
        <Route path="/Influencer" element={<Influencer/>}/>
        <Route path="/" element={<Home/>}/>
    </Routes>
  )
}

export default Routing;
