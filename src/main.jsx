import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

const container = document.getElementById('root');
if (!container._reactRoot) {
  container._reactRoot = createRoot(container);
}
container._reactRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
