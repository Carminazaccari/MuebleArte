import { Link } from "react-router-dom"
function Producto({nombre, id, precio}){
    return(
        <Link to={`/productos/${id}`} className="producto-tarjeta">
        <h2>{nombre}</h2>
        <h4>{precio}</h4>
        </Link>
    )
}

export default Producto