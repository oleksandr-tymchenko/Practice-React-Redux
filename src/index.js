import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from 'components/App';
import { BrowserRouter } from 'react-router-dom';
// import Context from 'testContext/Context/Context';
import { AppRedux } from 'components/reduxComponents/AppRedux';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import AppReduxLogin from 'components/AppReduxLogin';

// import App from './testContext/App';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        {/* <Context>
        <App /> */}
        {/* <AppReduxLogin /> */}
        <AppRedux />
        {/* </Context> */}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
