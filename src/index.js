import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './client/style.css';
import { AuthProvider } from './client/Authenticate';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
   <App />
   </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);