import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { Toaster } from 'react-hot-toast';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Toaster />
       <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
