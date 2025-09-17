import { useParams } from "react-router-dom";
import productosMuebleria from "../productos";

function Detalle(){
const {id} = useParams();

const producto = productosMuebleria.find(prod =>prod.id===parseInt(id));

if(!producto){
    return <h2>El producto no existe</h2>;
}
return(
        <div> 
            <h2>Detalle del producto</h2>
            <h4>{producto.nombre}</h4>
            <p>{producto.descripcion}</p>
            <h6>${producto.precio}</h6>
        </div>
    );
}

export default Detalle