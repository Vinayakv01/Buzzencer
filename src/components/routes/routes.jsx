// // main route
// // import React from 'react';
// import Home from '../home/home';
// import About from '../home/about';
// import Contact from '../home/contact';
// import Login from '../login/login';
// import Signup from '../login/signup';
// import Layout from '../layout/layouts';
// import Faq from '../home/Faq';
// import { Routes, Route } from 'react-router-dom';

// const Routing = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path="signup" element={<Signup />} />
//         <Route path="signin" element={<Login />} />
//         <Route path="contact" element={<Contact />} />
//         <Route path="faq" element={<Faq />} />
//         <Route path="about" element={<About />} />
//       </Route>
//     </Routes>
//   );
// };

// export default Routing;



import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../layout/layouts';
import InfluencerLayout from '../layout/influencerlayout';
import OrganizationLayout from '../layout/organizationlayout';
import AdminLayout from '../layout/adminlayouts';

// Home routes
import Home from '../home/home';
import About from '../home/about';
import Contact from '../home/contact';
import Login from '../login/login';
import Signup from '../login/signup';
import Faq from '../home/faq';

// Influencer routes
import InfluencerDashboard from '../influencer/dashboard';
import Campaign from '../influencer/campaign';
import Wallet from '../influencer/wallet';
import Profile from '../influencer/profile';
import Wishlist from '../influencer/wishlist';

// Organization routes
import OrganizationDashboard from '../organization/odashboard';
import CreateCampaign from '../organization/createcampaign';
import CampaignList from '../organization/campaignlist';
import InfluencerList from '../organization/influencerlist';
import RequestInfluencer from '../organization/requestinfluencer';

// Admin routes
import AdminDashboard from '../admin/adashboard';
import AdminCreateCampaign from '../admin/createcampaign';
import AdminCampaignList from '../admin/campaignlist';
import AdminInfluencerList from '../admin/influencerlist';
import AdminRequestInfluencer from '../admin/requestinfluencer';

const Routing = () => {
  return (
    <Routes>
      {/* Main routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Login />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<Faq />} />
        <Route path="about" element={<About />} />
      </Route>

      {/* Influencer routes */}
      <Route element={<InfluencerLayout />}>
        <Route path="/dashboard" index element={<InfluencerDashboard />} />
        <Route path="campaign" element={<Campaign />} />
        <Route path="wallet" element={<Wallet />} />
        <Route path="profile" element={<Profile />} />
        <Route path="wishlist" element={<Wishlist />} />
      </Route>

      {/* Organization routes */}
      <Route element={<OrganizationLayout />}>
        <Route path="/odashboard" index element={<OrganizationDashboard />} />
        <Route path="ocreatecampaign" element={<CreateCampaign />} />
        <Route path="ocampaignlist" element={<CampaignList />} />
        <Route path="oinfluencerlist" element={<InfluencerList />} />
        <Route path="orequestinfluencer" element={<RequestInfluencer />} />
      </Route>

      {/* Admin routes */}
      <Route element={<AdminLayout />}>
        <Route path="/admin" index element={<AdminDashboard />} />
        <Route path="createcampaign" element={<AdminCreateCampaign />} />
        <Route path="campaignlist" element={<AdminCampaignList />} />
        <Route path="influencerlist" element={<AdminInfluencerList />} />
        <Route path="requestinfluencer" element={<AdminRequestInfluencer />} />
      </Route>
    </Routes>
  );
};

export default Routing;



















// import React, { useContext } from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import Layout from '../layout/layouts';
// import InfluencerLayout from '../layout/influencerlayout';
// import OrganizationLayout from '../layout/organizationlayout';
// import AdminLayout from '../layout/adminlayouts';
// import { AuthContext } from '../../utils/authContext';

// // Home routes
// import Home from '../home/home';
// import About from '../home/about';
// import Contact from '../home/contact';
// import Login from '../login/login';
// import Signup from '../login/signup';
// import Faq from '../home/faq';

// // Influencer routes
// import InfluencerDashboard from '../influencer/dashboard';
// import Campaign from '../influencer/campaign';
// import Wallet from '../influencer/wallet';
// import Profile from '../influencer/profile';
// import Wishlist from '../influencer/wishlist';

// // Organization routes
// import OrganizationDashboard from '../organization/odashboard';
// import CreateCampaign from '../organization/createcampaign';
// import CampaignList from '../organization/campaignlist';
// import InfluencerList from '../organization/influencerlist';
// import RequestInfluencer from '../organization/requestinfluencer';

// // Admin routes
// import AdminDashboard from '../admin/adashboard';
// import AdminCreateCampaign from '../admin/createcampaign';
// import AdminCampaignList from '../admin/campaignlist';
// import AdminInfluencerList from '../admin/influencerlist';
// import AdminRequestInfluencer from '../admin/requestinfluencer';

// const Routing = () => {
//   const { userLoggedIn, userType } = useContext(AuthContext);

//   return (
//     <Routes>
//       {/* Main routes */}
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path="signup" element={<Signup />} />
//         <Route path="signin" element={<Login />} />
//         <Route path="contact" element={<Contact />} />
//         <Route path="faq" element={<Faq />} />
//         <Route path="about" element={<About />} />
//       </Route>

//       {/* Influencer routes */}
//       <Route element={<InfluencerLayout />}>
//         <Route path="/dashboard" element={userLoggedIn && userType === 'influencer' ? <InfluencerDashboard /> : <Navigate to="/signin" />} />
//         <Route path="campaign" element={userLoggedIn && userType === 'influencer' ? <Campaign /> : <Navigate to="/signin" />} />
//         <Route path="wallet" element={userLoggedIn && userType === 'influencer' ? <Wallet /> : <Navigate to="/signin" />} />
//         <Route path="profile" element={userLoggedIn && userType === 'influencer' ? <Profile /> : <Navigate to="/signin" />} />
//         <Route path="wishlist" element={userLoggedIn && userType === 'influencer' ? <Wishlist /> : <Navigate to="/signin" />} />
//       </Route>

//       {/* Organization routes */}
//       <Route element={<OrganizationLayout />}>
//         <Route path="/odashboard" element={userLoggedIn && userType === 'organization' ? <OrganizationDashboard /> : <Navigate to="/signin" />} />
//         <Route path="ocreatecampaign" element={userLoggedIn && userType === 'organization' ? <CreateCampaign /> : <Navigate to="/signin" />} />
//         <Route path="ocampaignlist" element={userLoggedIn && userType === 'organization' ? <CampaignList /> : <Navigate to="/signin" />} />
//         <Route path="oinfluencerlist" element={userLoggedIn && userType === 'organization' ? <InfluencerList /> : <Navigate to="/signin" />} />
//         <Route path="orequestinfluencer" element={userLoggedIn && userType === 'organization' ? <RequestInfluencer /> : <Navigate to="/signin" />} />
//       </Route>

//       {/* Admin routes */}
//       <Route element={<AdminLayout />}>
//         <Route path="/admin" element={userLoggedIn && userType === 'admin' ? <AdminDashboard /> : <Navigate to="/signin" />} />
//         <Route path="createcampaign" element={userLoggedIn && userType === 'admin' ? <AdminCreateCampaign /> : <Navigate to="/signin" />} />
//         <Route path="campaignlist" element={userLoggedIn && userType === 'admin' ? <AdminCampaignList /> : <Navigate to="/signin" />} />
//         <Route path="influencerlist" element={userLoggedIn && userType === 'admin' ? <AdminInfluencerList /> : <Navigate to="/signin" />} />
//         <Route path="requestinfluencer" element={userLoggedIn && userType === 'admin' ? <AdminRequestInfluencer /> : <Navigate to="/signin" />} />
//       </Route>
//     </Routes>
//   );
// };

// export default Routing;
