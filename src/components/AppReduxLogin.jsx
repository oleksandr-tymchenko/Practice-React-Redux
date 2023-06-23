// import LoginPage from 'pagesRedux/LoginPage';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LayoutLogin from './reduxLoginComponents/LayoutLogin';
import DashboardPage from 'pagesRedux/DashboardPage';
import LoginPage from 'pagesRedux/LoginPage';

const AppReduxLogin = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutLogin />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default AppReduxLogin;
