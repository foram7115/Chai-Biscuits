import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import { CartProvider } from './Componenets/CartContext';


createRoot(document.getElementById('root')).render(
  <StrictMode>
<<<<<<< HEAD
    <BrowserRouter>
      <App />
    </BrowserRouter>
=======
  <BrowserRouter>
    <CartProvider>
        <App />
    </CartProvider>
  </BrowserRouter>
>>>>>>> 5d359b9ca267655bd5d7d02ceaa5b4ea4ea570d8
  </StrictMode>
);

