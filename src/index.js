import React from 'react';
import {createRoot}  from 'react-dom/client';
import App from './App';
import  './styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// 👇️ if you use TypeScript, add non-null (!) assertion operator
// const root = createRoot(rootElement!);
// REACT_APP_API_URL=https://dataqr-backend.onrender.com
root.render(
   
    
    <App />
    
    
);
