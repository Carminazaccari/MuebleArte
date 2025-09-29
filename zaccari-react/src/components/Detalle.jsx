import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";



function Detalle(){
const {id} = useParams();
const [producto, setProducto] = useState(null);
const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("/productos.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("No se pudo cargar el archivo JSON");
        }
        return res.json();
      })
      .then((data) => {
        const productoEncontrado = data.find(prod => prod.id === parseInt(id));
        setProducto(productoEncontrado);
        setCargando(false);
      })
      .catch((err) => {
        console.error("Error al cargar el producto:", err);
        setCargando(false);
      });
  }, [id]);

  if (cargando) {
    return <p>Cargando detalle...</p>;
  }

  if (!producto) {
    return <h2>El producto no existe</h2>;
  }

  return (
    <div className="detalle-card">
      <h2>Detalle del producto</h2>
      <h4>{producto.nombre}</h4>
      <p>{producto.descripcion}</p>
      <h6>${producto.precio}</h6>
    </div>
    );
}

export default Detalle