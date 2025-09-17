import { useEffect,useState } from "react";
import ItemList from "./ItemList";
import  productosMuebleria  from "../productos";
import "./List.css";

import React from 'react'

function ItemListContainer() {

    const [items,setItems] = useState([]);

    useEffect(() => {
        const fetchProductos = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productosMuebleria)
            },1000)
          })
    
          fetchProductos.then((data) => {
            setItems(data)
          })
    },[])

  return (
    <div className="itemList-container">
        <ItemList items={items}/>
    </div>
  )
}

export default ItemListContainer