import React from 'react';
import dashboard from '../influencer/dashboard';
import InfluencerLayout from '../layout/influencerlayout';
import { Routes, Route } from 'react-router-dom';

const InRouting = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<InfluencerLayout />}>
        <Route index element={<dashboard />} />
      </Route>
    </Routes>
  );
};

export default InRouting;