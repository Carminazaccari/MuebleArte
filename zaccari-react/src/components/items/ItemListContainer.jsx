import { useEffect, useState } from "react";
import ItemList from "../items/ItemList";
import "../List.css";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

function ItemListContainer() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const colRef = collection(db, "productos");
        const snapshot = await getDocs(colRef);
        const productosData = snapshot.docs.map(doc => ({
          id: doc.id, ...doc.data()
        }));
        setItems(productosData);
      } catch (error) {
        console.error("Error cargando productos desde Firestore:", error);
      }
    };

    fetchProductos();
  }, []);

  return (
    <div className="itemList-container">
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;