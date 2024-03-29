import React from 'react';
import { Routes, Route } from 'react-router-dom';
import InfluencerLayout from '../layout/influencerlayout';
import Dashboard from '../influencer/dashboard';
import Campaign from '../influencer/campaign';
import Wallet from '../influencer/wallet';
import Profile from '../influencer/profile';
import Wishlist from '../influencer/wishlist';
const InRouting = () => {
  return (
    <Routes>
      <Route element={<InfluencerLayout />}>
        <Route path="/dashboard" index element={<Dashboard />} />
        <Route path="campaign" element={<Campaign />} />
        <Route path="wallet" element={<Wallet />} />
        <Route path="profile" element={<Profile />} />
        <Route path="wishlist" element={<Wishlist />} />

      </Route>
    </Routes>
  );
};

export default InRouting;
