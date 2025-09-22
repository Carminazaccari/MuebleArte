import CarWidget from "./CarWidget"
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <div className="barra">
            <nav className="conteiner-nav">
              <div className="conteiner-marca">
                <h1 className="barra-marca">MUEBLEARTE</h1>
               </div>
                <div className="conteiner-opciones">
                <ul className="links-nav">
                    <li className="links-nav">
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li className="links-nav">
                        <Link to={"/productos"}>Productos</Link>
                    </li>
                </ul>
                
                </div>
                <div className="conteiner-carrito">
                <CarWidget />
                </div>
            </nav>

        </div>
    )
}

export default NavBar