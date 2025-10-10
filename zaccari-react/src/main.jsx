import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CarritoProvider } from './components/context/CarritoContext.jsx'


createRoot(document.getElementById('root')).render(
  <>
  <CarritoProvider>
    <App />
    </CarritoProvider>
  </>,
)
