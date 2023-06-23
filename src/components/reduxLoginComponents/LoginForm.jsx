import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from 'redux/userLoginSlice';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSabmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(logIn(form.elements.login.value));
    form.reset();
    //   ? перебрасіваем на новую страницу после логинизации
    navigate('/dashboard', { replace: true });
  };
  return (
    <div>
      <form onSubmit={handleSabmit}>
        <input type="text" name="login" />
        <br />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default LoginForm;
