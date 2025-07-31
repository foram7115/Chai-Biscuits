import React from 'react';
import Logo from '../assets/logo.png';
import Notification from '../assets/notification.png';
import Profile from '../assets/Profile.avif';

function Header() {
  return (
    <div className="flex justify-between items-center px-4 sm:px-6 py-4">
      {/* Left: Profile Image */}
      <img
        src={Profile}
        alt="profile"
        className="w-8 sm:w-9 md:w-10 lg:w-11 h-auto object-contain"
      />

      {/* Right: Logo + Notification */}
      <div className="flex items-center gap-4">
        <img
          src={Logo}
          alt="logo"
          className="w-20 sm:w-24 md:w-28 lg:w-32 h-auto object-contain"
        />
        <img
          src={Notification}
          alt="notification"
          className="w-6 sm:w-7 md:w-8 lg:w-10 h-auto object-contain"
        />
      </div>
    </div>
  );
}

export default Header;
