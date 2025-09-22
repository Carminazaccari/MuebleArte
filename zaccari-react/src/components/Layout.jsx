import { Link, Outlet } from "react-router-dom";
import NavBar from "./Navbar";



function Layout() {
    return (
        <>
             <NavBar/>
            <main>
            <Outlet />
            </main>
        </>
    )
}

export default Layout