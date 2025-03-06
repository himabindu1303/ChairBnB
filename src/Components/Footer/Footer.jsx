import "./Footer.css"
import Logo from "../../assets/Logo.png"
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>          
            <footer className="footer">
                <div className="footer-logo">
                  <img src={Logo} alt="logo" height={"60px"} width={"140px"}/>
                </div>

                <div className="footer-container">

                    <div className="footer-div">
                        <h6>About ChairBnB</h6>
                        <ul>
                            <li><a href="#">About </a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms and Conditions</a></li>
                        </ul>
                    </div>
                    <div className="footer-div">
                        <h6>Locations</h6>
                        <ul>
                            <li> <Link  to="/andhraPradesh">Andhra Pradesh</Link> </li>
                            <li> <Link  to="/hyderabad">Hyderabad</Link> </li>
                            <li> <Link  to="/banglore">Banglore</Link> </li>
                            <li> <Link  to="/chennai">Chennai</Link> </li>
                            <li> <Link  to="/mumbai">Mumbai</Link> </li>
                            <li> <Link  to="/gurugram">Gurugram</Link> </li>
                            <li> <Link  to="/pune">Pune</Link> </li>
                            <li> <Link  to="/delhi">Delhi</Link> </li>

                        </ul>
                    </div>
                    <div className="footer-div">
                        <h6>Address</h6>
                        <p>chairBnB123@gmail.com</p>
                        <p>+1 234 567 890</p>
                        <p>789, Workspace Street, Business City, NY 515001</p>
                        <div className="icons">
                            <a href="https://www.facebook.com/">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSEgJzphnbCmQt9vLr05D47FWPA6usDmjSEw&s" alt="Facebook" /></a>
                            <a href="https://www.instagram.com/">
                                <img src="https://p.kindpng.com/picc/s/184-1847315_logo-de-instagram-png-circular-png-download-instagram.png" alt="Instagram" /></a>
                            <a href="https://x.com/twitter?lang=en">
                                <img src="https://png.pngtree.com/element_our/sm/20180520/sm_5b01251262721.png" alt="Twitter" /></a>
                            <a href="https://www.linkedin.com/in/himabinduneellapala/">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-IoxaaCSb4xLI-OntC3TPQI_OLd9Ry-D4zg&s" alt="LinkedIn" /></a>
                        </div>
                    </div>

                </div>
            </footer>

        </>
    )

}
export default Footer