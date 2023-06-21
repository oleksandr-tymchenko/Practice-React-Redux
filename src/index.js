import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import Context from 'testContext/Context/Context';

// import App from './testContext/App';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Context>
        <App />
      </Context>
    </BrowserRouter>
  </React.StrictMode>
);
