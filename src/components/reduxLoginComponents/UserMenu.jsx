import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/userLoginSlice';

const UserMenu = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };

  const login = useSelector(state => state.user.login);
  return (
    <div>
      {login}
      <button type="button" onClick={handleLogOut}>
        Log out
      </button>{' '}
    </div>
  );
};

export default UserMenu;
