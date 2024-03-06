import React from 'react';
import Sidebar from './sidebar';
import dashboard from './dashboard';
import campaign from './campaign'; 
import profile from './profile';
import wallet from './wallet';
import wishlist from './wishlist';




const Influencer = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow">
        <dashboard />
        <campaign />
        <profile />
        <wallet />
        <wishlist />
      </div>
    </div>
  );
};

export default Influencer;
