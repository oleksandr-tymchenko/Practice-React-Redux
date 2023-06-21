import React, { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { nanoid } from 'nanoid';

import Modal from 'components/Modal/Modal';
import FormLogin from 'components/FormLogin/FormLogin';
import Header from 'components/Header/Header';

const Layout = () => {
  const [isShowModal, setIsShowModal] = useState(false);
//   const [searchText, setSearchText] = useState('');

  const showModal = () => setIsShowModal(true);
  const closeModal = () => setIsShowModal(false);
  const createUser = data => {
    const newUser = {
      ...data,
      id: nanoid(),
    };
    console.log('newUser :>> ', newUser);
  };
  return (
    <div>
      <Toaster position="top-right" toastOptions={{ duration: 1500 }} />

      <Header showModal={showModal} />
      <Suspense fallback={<h1>...loading</h1>} >
      <Outlet />
      </Suspense>
      
      {isShowModal && (
        <Modal closeModal={closeModal}>
          <FormLogin closeModal={closeModal} createUser={createUser} />
        </Modal>
      )}
    </div>
  );
};

export default Layout;
