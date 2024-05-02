import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminLayout from '../layout/adminlayouts';
import Dashboard from '../admin/adashboard';
import Createcampaign from '../admin/createcampaign';
import Campaignlist from '../admin/campaignlist';
import Influencerlist from '../admin/influencerlist';
import Requestinfluencer from '../admin/requestinfluencer';

const ARouting = () => {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path="/admin" index element={<Dashboard />} />
        <Route path="createcampaign" element={<Createcampaign/>} />
        <Route path="campaignlist" element={<Campaignlist/>} />
        <Route path="influencerlist" element={<Influencerlist/>} />
        <Route path="requestinfluencer" element={<Requestinfluencer/>} />
      </Route>
    </Routes>
  );
};

export default ARouting;
