import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Error from './components/Error';
import Home from './components/Home';
import Detalle from './components/Detalle';
import ItemListContainer from './components/items/ItemListContainer';
import Carrito from './components/Carrito';

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:id" element={<Detalle />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/*" element={<Error />} />
          </Route>
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App  