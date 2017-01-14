import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer>
      <Link to="find"> Find a Sister </Link>
      <Link to="chat"> Chat </Link>
      <Link to="settings"> Settings </Link>
    </footer>
  );
};

export default Footer;
