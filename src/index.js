import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { JobContextProvider } from './profile/profile-context';

ReactDOM.render(
  <JobContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </JobContextProvider>,
  document.getElementById('root')
);