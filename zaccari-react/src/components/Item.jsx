function Item(props){
    return(
        <div>
        
        <h2>Producto: {props.producto}</h2>
        <p>Precio: ${props.precio}</p>
        <p>{props.descripcion}</p>
        </div>
    )
}

export default Item