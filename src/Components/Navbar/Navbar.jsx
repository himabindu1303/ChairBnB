import "./Navbar.css"
import Logo from "../../assets/Logo.png"
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg " id="nav1">
                <div className="container-fluid ">
                    <a className="navbar-brand" href="#">
                        <img src={Logo} alt="Logo" height={"60px"} width={"140px"}/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavDropdown">
                        <ul className="navbar-nav gap-3 ms-auto">
                            <li className="nav-item "> 
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">Locations</a>
                                <ul className="dropdown-menu">
                                    <li> <Link className=" dropdown-item" to="/locations/andhraPradesh">Andhra Pradesh</Link> </li>
                                    <li> <Link className=" dropdown-item" to="/locations/hyderabad">Hyderabad</Link> </li>
                                    <li> <Link className=" dropdown-item" to="/locations/banglore">Banglore</Link> </li>
                                    <li> <Link className=" dropdown-item" to="/locations/chennai">Chennai</Link> </li>
                                    <li> <Link className=" dropdown-item" to="/locations/mumbai">Mumbai</Link> </li>
                                    <li> <Link className=" dropdown-item" to="/locations/gurugram">Gurugram</Link> </li>
                                    <li> <Link className=" dropdown-item" to="/locations/pune">Pune</Link> </li>
                                    <li> <Link className=" dropdown-item" to="/locations/delhi">Delhi</Link> </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                            <Link className=" nav-link" to="/contactus">Contact Us</Link>
                            </li>
                            
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">Login</a>
                                <ul className="dropdown-menu">
                                    <li><Link to="/signup" className=" dropdown-item">Sign Up</Link></li>
                                    <li><Link to="/login" className=" dropdown-item">Login</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className=" nav-link" to="/logout">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar