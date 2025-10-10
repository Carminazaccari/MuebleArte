import { createContext, useContext, useState } from "react";

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const addToCarrito = (producto) => {
    const existing = carrito.find(item => item.id === producto.id);
    if (existing) {
  setCarrito(carrito.map(item =>
    item.id === producto.id
    ? { ...item, cantidad: item.cantidad + producto.cantidad }
    : item
      ));
  } else {
    setCarrito([...carrito, { ...producto }]); 
    }
  };

  const removeFromCarrito = (id) => {
    setCarrito(carrito.filter(item => item.id !== id));
  };

  const clearCarrito = () => setCarrito([]);

  const ItemsTotal = carrito.reduce((acumulado, item) => acumulado + item.cantidad, 0);
  const PrecioTotal = carrito.reduce((acumulado, item) => acumulado + item.price * item.cantidad, 0);

  return (
  <CarritoContext.Provider
   value={{
    carrito,
    addToCarrito,
    removeFromCarrito,
    clearCarrito,
    ItemsTotal,
    PrecioTotal
      }}
    >
  {children}
  </CarritoContext.Provider>
  );
};

export const useCarrito = () => useContext(CarritoContext);
