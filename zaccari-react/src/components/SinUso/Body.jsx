import Item from "./Item"

function Body(){
    return(
        <div>
        <h1>Bienvenidos a la muebleria de tus sueños</h1>
        <div className="productos">
        <Item producto= "Sillon" precio= "200" descripcion = "Sillon L de 3mts x 60cm" />
        <Item producto= "Mesa de Luz"  precio= "500" descripcion = "Mesa de melamina de 1mt x 70cm" />
        <Item producto= "Escritorio" precio= "400" descripcion = "Escritorio de vidrio con cajones" />
        <Item producto= "Lavamanos con cajonera" precio= "700" descripcion = "Lavamanos de 2mt x 1.40cm" />
        </div>
        </div>
    )
}

export default Body
