// src/Components/Layout.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavbarPaths = ['/login', '/registration', '/']; // Add any paths where navbar should be hidden
  
  const shouldShowNavbar = !hideNavbarPaths.includes(location.pathname);
  
  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <main>{children}</main>
    </>
  );
};

export default Layout;