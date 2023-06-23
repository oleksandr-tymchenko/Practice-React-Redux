import React from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from './AppBar/AppBar';

const LayoutLogin = () => {
  return (
    <div>
      <AppBar />

      <Outlet />
    </div>
  );
};

export default LayoutLogin;
