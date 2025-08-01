// src/components/Navbar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate('/login');
  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#eee' }}>
      <div><strong>Machine Test For MERN Stack</strong></div>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;
