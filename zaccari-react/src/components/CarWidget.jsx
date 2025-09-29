import { useCarrito } from "./context/CarritoContext"
import { Link } from "react-router-dom"

function CarWidget(){
const { ItemsTotal } = useCarrito();

  return (
    <Link to="/carrito">
      <span  aria-label="carrito">🛒</span>
      {ItemsTotal > 0 && <span>({ItemsTotal})</span>}
    </Link>
  );
}


export default CarWidget