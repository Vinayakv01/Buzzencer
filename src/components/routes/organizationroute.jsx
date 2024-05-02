import React from 'react';
import { Routes, Route } from 'react-router-dom';
import OrganizationLayout from '../layout/organizationlayout';
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
        <Route path="ocreatecampaign" element={<Createcampaign/>} />
        <Route path="ocampaignlist" element={<Campaignlist/>} />
        <Route path="oinfluencerlist" element={<Influencerlist/>} />
        <Route path="orequestinfluencer" element={<Requestinfluencer/>} />
      </Route>
    </Routes>
  );
};

export default ORouting;
