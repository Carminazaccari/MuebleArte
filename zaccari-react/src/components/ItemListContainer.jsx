import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import "./List.css";

function ItemListContainer() {
  const [items, setItems] = useState([]);

  useEffect(() => {
  fetch("/productos.json")
    .then((res) => {
      if (!res.ok) {
      throw new Error("No se pudo cargar el archivo JSON");
        }
        return res.json();
      })
    .then((data) => setItems(data))
    .catch((err) => console.error("Error cargando productos:", err));
  }, []);

  return (
    <div className="itemList-container">
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;