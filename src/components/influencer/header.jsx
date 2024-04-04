import React, { useState, useEffect, useRef } from 'react';
import { ChevronUp, ChevronDown, Bell } from 'lucide-react';
import profile from '../../assets/profile.png';

const Header = () => {
  // Dropdown for user profile
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(prevState => !prevState);
  };

  // Dropdown for notifications
  const [notiDropdownOpen, setNotiDropdownOpen] = useState(false);
  const notiDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notiDropdownRef.current && !notiDropdownRef.current.contains(event.target)) {
        setNotiDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleNotiDropdown = () => {
    setNotiDropdownOpen(prevState => !prevState);
  };

  const notifications = [
    {
      type: 'New',
      items: [
        { id: 1, brand: 'Nike', time: '12:00 AM', message: 'We have an Exciting Offer for you near to you...' },
        { id: 2, brand: 'Adidas', time: '12:00 AM', message: 'We have an Exciting Offer for you near to you...' },
        { id: 3, brand: 'Reliance', time: '12:00 AM', message: 'We have an Exciting Offer for you near to you...' },
        { id: 4, brand: 'Pinkvilla', time: '12:00 AM', message: 'We have an Exciting Offer for you near to you...' },
      ]
    },
    {
      type: 'Earlier',
      items: [
        { id: 5, brand: 'Nescafe', time: '12:00 AM', message: 'We have an Exciting Offer for you near to you...' },
        { id: 6, brand: 'Samsung', time: '12:00 AM', message: 'We have an Exciting Offer for you near to you...' },
        { id: 7, brand: 'Nescafe', time: '12:00 AM', message: 'We have an Exciting Offer for you near to you...' },
        { id: 8, brand: 'Samsung', time: '12:00 AM', message: 'We have an Exciting Offer for you near to you...' },
      ]
    }
  ];



  return (
    <header className="bg-white text-black py-4 px-8 flex justify-end items-center">
      {/* Bell Icon */}
      <div className="relative">
        <Bell size={24} className="cursor-pointer mr-5" onClick={toggleNotiDropdown} />
        {notiDropdownOpen && (
          <div className="absolute top-full right-0 mt-1 overflow-auto max-h-[calc(100vh-388px)] w-64 bg-white border border-gray-200 rounded-md shadow-lg z-10" ref={notiDropdownRef}>
            <style>
              {`
            .overflow-auto::-webkit-scrollbar {
            display: none;
            }
          `}
            </style>
            <div className="flex justify-between px-4 py-2 border-b border-gray-200">
              <p className="font-semibold">Notifications</p>
              <button className="text-blue-500 hover:underline">See All</button>
            </div>
            {/* Iterate over notifications */}
            {notifications.map(notificationType => (
              <div key={notificationType.type}>
                {/* Header */}
                <div className="py-2 px-4 bg-gray-100 font-semibold">{notificationType.type}</div>
                {/* Notification list */}
                {notificationType.items.map(notification => (
                  <div key={notification.id} className="py-2 px-4 hover:bg-gray-100">
                    <div className="font-medium">{notification.brand}</div>
                    <div className="text-sm text-gray-600">{notification.time}</div>
                    <div>{notification.message}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>


      <div className="flex items-center relative" ref={dropdownRef}>
        {/* Profile Image */}
        <img src={profile} alt="Profile" className="w-8 h-8 rounded-full cursor-pointer" />

        {/* Button for Name and Dropdown */}
        <button className="ml-2 text-sm font-semibold flex items-center cursor-pointer" onClick={toggleDropdown}>
          {/* Name */}
          <span>John Doe</span>

          {/* Dropdown Icon */}
          {dropdownOpen ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
        </button>

        {/* Dropdown Content */}
        {dropdownOpen && (
          <div className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
            <ul>
              <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Reset Password</li>
              <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Logout</li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
