import { Link, Outlet } from "react-router-dom"


function Layout(){
    return(
        <> 
        <nav className="conteiner-nav">
            <ul className="links-nav">
                <li className="links-nav">
                    <Link to={"/"}>Home</Link>
                </li>
                <li className="links-nav">
                    <Link to={"/productos"}>Productos</Link>
                </li>
            </ul>
            
        </nav>
        
        
        <Outlet/>
       
            </>
    )
}

export default Layout