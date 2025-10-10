import { Outlet } from "react-router-dom";
import NavBar from "./Navbar";



function Layout() {
    return (
        <>
        <div className="fondogeneral">
             <NavBar/>
            <main>
            <Outlet />
            </main>
            </div>
        </>
    )
}

export default Layout