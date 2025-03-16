import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// @tailwind base;
// @tailwind components;
// @tailwind utilities;
// import './Styles/global.css'; // Import the global stylesheet
// my-app\src\Styles\global.css
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);