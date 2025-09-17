import productosMuebleria from "../productos";
import Producto from "./Producto";
import "./style.css";

function Productos(){
    return(
        <div id="productos-container">
            {productosMuebleria.map(prod =>(
                <Producto key={prod.id}{...prod}/>
            ))}
            </div>
    )
}

export default Productos