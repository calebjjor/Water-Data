import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const root = document.getElementById('root');
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const rootInstance = ReactDOM.createRoot(root);
rootInstance.render(app);