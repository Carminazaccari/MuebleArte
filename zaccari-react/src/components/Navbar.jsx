import CarWidget from "./CarWidget"
function NavBar(){
    return(
        <div className="barra">
        <CarWidget/>
        <a href="comedor" className="comedor">comedor</a> 
        <a href="cocina" className="cocina">cocina</a> 
        <a href="baño" className="baño">baño</a> 
        
        </div>
    )
}

export default NavBar