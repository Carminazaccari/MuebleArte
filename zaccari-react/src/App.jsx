import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import{BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './components/Layout';
import Error from './components/Error';
import Home from './components/Home';
import Productos from './components/Productos';
import Detalle from './components/Detalle';
import ItemListContainer from './components/ItemListContainer';





function App() {

  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>} >
        <Route index element={<Home/>} />
        <Route path="/productos" element={<ItemListContainer/>} />
        <Route path="/productos/:id" element={<Detalle/>} />
        <Route path="/*" element={<Error/>} />
        </Route> 
    </Routes>
      {/*<div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>*/}
      </BrowserRouter>
      
    </>
  )
}

export default App  