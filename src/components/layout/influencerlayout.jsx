import React from 'react';
import Sidenav from '../influencer/sidenav';
import { Outlet } from 'react-router-dom';

const InfluencerLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Side Navigation */}
      <Sidenav />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <header className="w-full h-16 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          {/* Header content */}
        </header>

        {/* Main Content */}
        <main className="flex flex-col flex-1 overflow-y-auto bg-gray-100 dark:bg-gray-900">
          {/* Outlet for rendering nested routes */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default InfluencerLayout;
