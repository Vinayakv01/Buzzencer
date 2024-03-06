import React from 'react'
import Influencer from '../influencer/influencer';
import Home from '../home/home';

import {
    BrowserRouter, Routes, Route,
  } from 'react-router-dom';
const routes = () => {
  return (
    <Routes>
        <Route path="/Influencer" element={<Influencer/>}/>
        <Route path="/" element={<Home/>}/>
    </Routes>
  )
}

export default routes;
