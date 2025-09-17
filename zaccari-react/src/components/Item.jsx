function Item(props){
    return(
        <div className="itemList-card">
        
        <h2>{props.nombre}</h2>
        <p>Precio: ${props.precio}</p>
        <p>{props.descripcion}</p>
        </div>
    )
}

export default Item