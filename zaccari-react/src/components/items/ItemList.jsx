import { useState } from "react";
import Producto from "../Producto";


function ItemList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredItems = selectedCategory
    ? items.filter(item => item.categoryId === selectedCategory)
    : items;

  return (
    <div >
      <div className="button-category">
        <button onClick={() => setSelectedCategory("Cocina")}>
          Cocina
        </button>
        <button onClick={() => setSelectedCategory("Comedor y Living")}>
          Comedor y Living
        </button>
        <button onClick={() => setSelectedCategory("Dormitorio")}>
          Dormitorio
        </button>
      </div>
      <div className="itemList-container">

        {filteredItems.map(item => (
          <Producto
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default ItemList;