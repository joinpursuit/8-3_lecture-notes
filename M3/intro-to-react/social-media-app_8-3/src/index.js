// IMPORTS AND DEPENDENCIES
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// IMPORT THE APP COMPONENT
import App from './App';
import reportWebVitals from './reportWebVitals';

// boilerplate code to:
// SELECT THE ROOT OF OUR DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// boilerplate code to:
// RENDER OUR APP COMPONENT AT THE ROOT OF OUR DOM
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
