import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Header.css"

import Logo from '../assets/logo.png';
// import Notification from '../assets/N1.png';
import ProfilePlaceholder from '../assets/p1.png';
// import Cart from '../assets/cart2.png';
// import MenuIcon from '../assets/menu3.png';
import HomeIcon from '../assets/home2.png';

import './Header.css';

function Header() {
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    phone: '',
    profileImage: ProfilePlaceholder,
  });

//   const menu = () => navigate('/Menu');
  const home = () => navigate('/Dash');

  const handleClick = (label) => {
    const routes = {
      'My Addresses': '/address',
      'Track Order': '/track-order',
      'Order History': '/order-history',
      'Terms & Conditions': '/term-conditions',
      'Contact Us': '/contact-us',
    };

    if (routes[label]) {
      navigate(routes[label]);
    }
  };

  useEffect(() => {
    const phone = localStorage.getItem('phone_number');
    if (!phone) return;

    axios
      .get(`http://localhost:8000/api/get-user-profile/?phone=${phone}`, {
        withCredentials: true,
      })
      .then((res) => {
        const { name, phone_number, profile_image } = res.data;
        setUserData({
          name: name || 'User',
          phone: phone_number || '',
          profileImage: profile_image
            ? profile_image.startsWith('http')
              ? profile_image
              : `http://localhost:8000${profile_image}`
            : ProfilePlaceholder,
        });
      })
      .catch((err) => console.error('Failed to fetch profile:', err));
  }, [showProfile]);

  return (
    <div className="header">
      <div className="header-content">
        <div className="profile-icon">
          <img
            src={userData.profileImage}
            alt="profile"
            onClick={() => setShowProfile(true)}
            className="clickable2"
          />
        </div>

        <div className="center-icons">
          <img src={HomeIcon} alt="home" onClick={home} className="clickable1" />
          {/* <img src={MenuIcon} alt="menu" onClick={menu} className="clickable" /> */}
          {/* <img src={Cart} alt="cart" onClick={() => navigate('/Cart')} className="clickable" /> */}
        </div>

        <div className="logo">
          <img src={Logo} alt="logo" onClick={() => navigate('/Dash')} className="clickable"/>
        </div>
      </div>

      <div className={`sidebar ${showProfile ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>My Profile</h2>
          <button onClick={() => setShowProfile(false)}>&times;</button>
        </div>

        <div className="sidebar-content">
          <img src={userData.profileImage} alt="user" className="profile-pic" />
          <h3>{userData.name}</h3>
          <p>{userData.phone}</p>

          <div className="sidebar-buttons">
            {[
              'My Addresses',
              'Track Order',
              'Order History',
              'Terms & Conditions',
              'Contact Us',
            ].map((label, i) => (
              <button key={i} onClick={() => handleClick(label)}>
                {label} <span>&gt;</span>
              </button>
            ))}
          </div>

          <button
            className="logout-btn"
            onClick={() => {
              localStorage.removeItem('phone_number');
              setShowProfile(false);
              navigate('/');
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
