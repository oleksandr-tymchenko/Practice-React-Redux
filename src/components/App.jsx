// import { nanoid } from 'nanoid';

// import Header from './Header/Header';
// import ToDoList from './ToDoList/ToDoList';
// import Modal from './Modal/Modal';
// import FormLogin from './FormLogin/FormLogin';
// import Search from './Search/Search';
// import ContentInfo from './ContentInfo/ContentInfo';
// // import Counter from './Counter/Counter';
// import { useState } from 'react';
// import { Toaster } from 'react-hot-toast';

import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import NewsPage from 'Pages/NewsPage';
// import TodoPage from 'Pages/TodoPage';
// import ToDoDetails from './ToDo/ToDoDetails';
// import LoginPage from 'Pages/LoginPage';
import HomePage from 'Pages/HomePage';
import Layout from './Layout/Layout';

const TodoPage = lazy(()=> import('Pages/TodoPage'));
const NewsPage = lazy(()=> import('Pages/NewsPage'));
const ToDoDetails = lazy(()=> import('./ToDo/ToDoDetails'));
const LoginPage = lazy(()=> import('Pages/LoginPage'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="todo" element={<TodoPage />} />
        <Route path="todo/:id" element={<ToDoDetails />} />
      </Route>
      <Route path="/login" element={<Suspense><LoginPage /></Suspense>}></Route>

    </Routes>
  );
};

export default App;
