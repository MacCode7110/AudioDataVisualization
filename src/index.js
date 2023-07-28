import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Title from './component/Title'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Title />
    <App />
  </React.StrictMode>
);

reportWebVitals();
