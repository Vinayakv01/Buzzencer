import React from 'react';
import { ArrowUpNarrowWide, Bell } from 'lucide-react';
import profile from '../../assets/profile.png';

const Header = () => {
    return (
        <header className="bg-white text-black py-4 px-8 flex justify-between items-center">
            <div className="flex justify-end items-center w-full">
                <Bell size={24} className="cursor-pointer mr-2" /> {/* Bell icon */}

                <span>

                    <img src={profile} alt="Profile" className="w-8 h-8 rounded-full cursor-pointer " /> {/* Profile image */}

                </span>
            </div>
        </header>
    );
};

export default Header;
