import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Mantenha este, é o CSS global
import App from './App'; // Mantenha este, é o seu componente principal

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Remova as linhas que importavam 'reportWebVitals' e 'setupTests'
