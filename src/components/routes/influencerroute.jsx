import React from 'react';
import Dashboard from '../influencer/dashboard';
import InfluencerLayout from '../layout/influencerlayout';
import { Routes, Route } from 'react-router-dom';

const InRouting = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<InfluencerLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default InRouting;