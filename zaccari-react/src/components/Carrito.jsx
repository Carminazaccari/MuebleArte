import { useCarrito } from "./context/CarritoContext";

function Carrito(){
    const { carrito, removeFromCarrito, clearCarrito, ItemsTotal, PrecioTotal} = useCarrito();
return (
    <div>
      <h2>🛒 Carrito</h2>
      {carrito.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <div>
          {carrito.map(item => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>Cantidad: {item.cantidad}</p>
              <p>Precio total: ${item.price * item.cantidad}</p>
              <button onClick={() => removeFromCarrito(item.id)}>Eliminar</button>
            </div>
          ))}
          <p>Total de productos: {ItemsTotal}</p>
          <p>Total a pagar: ${PrecioTotal}</p>
          <button onClick={clearCarrito}>Vaciar carrito</button>
        </div>
      )}
    </div>
  );
}

export default Carrito;