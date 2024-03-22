import React from 'react';
import Sidebar from '../influencer/sidebar';
import { Outlet } from 'react-router-dom';

const InfluencerLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Side Navigation */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <header className="w-full h-16 bg-white border-b border-gray-200">
          {/* Header content */}
        </header>

        {/* Main Content */}
        <main className="flex flex-col flex-1 overflow-y-auto bg-gray-100 ">
          {/* Outlet for rendering nested routes */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default InfluencerLayout;
