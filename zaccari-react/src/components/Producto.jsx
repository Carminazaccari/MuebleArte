import { Link } from "react-router-dom";

function Producto({ title, id, price }) {
  return (
    <div>
      <Link to={`/productos/${id}`} className="producto-tarjeta">
        <h2>{title}</h2>
        <h4>$ {price}</h4>
      </Link>
    </div>
  );
}

export default Producto;
