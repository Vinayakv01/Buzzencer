import React from 'react';
import { Routes, Route } from 'react-router-dom';
import OrganizationLayout from '../layout/organizationlayouts';
import Dashboard from '../organization/odashboard';

const ORouting = () => {
  return (
    <Routes>
      <Route element={<OrganizationLayout />}>
        <Route path="/odashboard" index element={<Dashboard />} />
  

      </Route>
    </Routes>
  );
};

export default ORouting;
