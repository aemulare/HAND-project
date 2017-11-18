import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import App from './containers/app';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root')
);
registerServiceWorker();
