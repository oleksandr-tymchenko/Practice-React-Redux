import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from './AppBar.styled';
import UserMenu from '../UserMenu';
import { useSelector } from 'react-redux';

const AppBar = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  return (
    <Header>
      <nav>
        {!isLoggedIn && <Link to="/login">Log in</Link>}
        {isLoggedIn && <Link to="/dashboard">Dashboard</Link>}
      </nav>
      {isLoggedIn && <UserMenu />}
    </Header>
  );
};

export default AppBar;
