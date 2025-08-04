import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import { CartProvider } from './Componenets/CartContext';


createRoot(document.getElementById('root')).render(
<<<<<<< HEAD
  <StrictMode>
=======
>>>>>>> 0dd846c64af03e5fb9e8e6618591d18c07b49405
  <BrowserRouter>
    <CartProvider>
        <App />
    </CartProvider>
  </BrowserRouter>
<<<<<<< HEAD
  </StrictMode>
=======
>>>>>>> 0dd846c64af03e5fb9e8e6618591d18c07b49405
);

