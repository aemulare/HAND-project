import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import App from './components/app';
import './index.scss';

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root')
);

