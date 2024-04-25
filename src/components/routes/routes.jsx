// main route
// import React from 'react';
import Home from '../home/home';
import About from '../home/about';
import Contact from '../home/contact';
import Login from '../login/login';
import Signup from '../login/signup';
import Layout from '../layout/layouts';
import Faq from '../home/Faq';
import { Routes, Route } from 'react-router-dom';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Login />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<Faq />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default Routing;
