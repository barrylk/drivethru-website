import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h2>DriveThru</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/rider-login">Rider Login</Link></li>
        <li><Link to="/locate-me">Locate Me</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
