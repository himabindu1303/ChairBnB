import "./Cities.css"
import { Link } from 'react-router-dom'

function Cities() {
    return (
        <>
          <div className="CitiesContainer">
            <h1 className="Cities-h1">Select a City</h1>
            <div className="AllCities">
                <div className="City">
                    <Link to="/AndhraPradesh">Andhra Pradesh</Link>
                </div>
                <div className="City">
                    <Link to="/hyderabad">Hyderabad</Link>
                </div>
                <div className="City">
                    <Link to="/banglore">Banglore</Link>
                </div>
                <div className="City">
                    <Link to="/chennai">Chennai</Link>
                </div>
                <div className="City">
                    <Link to="/mumbai">Mumbai</Link>
                </div>
                <div className="City">
                    <Link to="/gurugram">Gurugram</Link>
                </div>
                <div className="City">
                    <Link to="/pune">Pune</Link>
                </div>
                <div className="City">
                    <Link to="/delhi">Delhi</Link>                
                </div>
            </div>
          </div>
        </>
    )

}
export default Cities