import React from 'react';
import { Routes, Route } from 'react-router-dom';
import OrganizationLayout from '../layout/organizationlayouts';
import Dashboard from '../organization/odashboard';
import Createcampaign from '../organization/createcampaign';
import Campaignlist from '../organization/campaignlist';
import Influencerlist from '../organization/influencerlist';
import Requestinfluencer from '../organization/requestinfluencer';

const ORouting = () => {
  return (
    <Routes>
      <Route element={<OrganizationLayout />}>
        <Route path="/odashboard" index element={<Dashboard />} />
        <Route path="createcampaign" element={<Createcampaign/>} />
        <Route path="campaignlist" element={<Campaignlist/>} />
        <Route path="influencerlist" element={<Influencerlist/>} />
        <Route path="requestinfluencer" element={<Requestinfluencer/>} />
      </Route>
    </Routes>
  );
};

export default ORouting;
