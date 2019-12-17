// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// == Import : local
import App from './components/App/App'

// == Render
const rootComponent = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// Le rendu de React => DOM
render(rootComponent, document.getElementById('root'));