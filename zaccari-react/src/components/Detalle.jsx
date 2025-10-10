import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useCarrito } from "./context/CarritoContext";
import ItemCount from "./items/ItemCount";


function Detalle() {
  const { id } = useParams(); 
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fetchProducto = async () => {
      setCargando(true);
      try {
        const colRef = collection(db, "productos");
        const snapshot = await getDocs(colRef);
        const productos = snapshot.docs.map(doc => ({
          idFirebase: doc.id, 
          ...doc.data()
        }));

       
        const productoEncontrado = productos.find(
          (prod) => String(prod.id) === id 
        );

        if (productoEncontrado) {
          setProducto(productoEncontrado);
        } else {
          setProducto(null);
        }
      } catch (error) {
        console.error("Error al buscar producto:", error);
        setProducto(null);
      } finally {
        setCargando(false);
      }
    };

    fetchProducto();
  }, [id]);

  if (cargando) return <p>Cargando detalle...</p>;

  if (!producto) return <h2>El producto no existe</h2>;

  const { addToCarrito } = useCarrito();

  const handleAdd = (cantidad) => {
    const productoParaCarrito = {
      id: producto.id,
      title: producto.title,
      price: producto.price,
      cantidad: cantidad
    };
    addToCarrito(productoParaCarrito);
    alert(`Agregaste ${cantidad} producto(s) al carrito`);
  };

  return (
    <div className="detalle-card">
      <h2>Detalle del producto</h2>
      <h4>{producto.title}</h4>
      <p>{producto.description}</p>
      <h6>${producto.price}</h6>
      <ItemCount stock={producto.stock} onAdd={handleAdd} />
    </div>
  );
}

export default Detalle;
