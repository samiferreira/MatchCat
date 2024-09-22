import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Importe BrowserRouter
import Home from './pages/home';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* Envolva o componente Home com BrowserRouter */}
      <Home />
    </BrowserRouter>
  </StrictMode>
);