import { Link } from "react-router-dom"
import { useCarrito } from "./context/CarritoContext"



function Producto({nombre, id, precio}){
    const {addToCarrito} = useCarrito();
    const botonCarrito = () => {
        addToCarrito({id, nombre, precio});
    };

    return(
        <div>
        <Link to={`/productos/${id}`} className="producto-tarjeta">
        <h2>{nombre}</h2>
        <h4>$ {precio}</h4>
        </Link>
        <button onClick={botonCarrito}>Agregar al Carrito</button>
        </div>
    )
}

export default Producto