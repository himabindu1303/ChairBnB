import "./Cities.css"
import { Link } from 'react-router-dom'

function Cities() {
    return (
        <>
          <div className="CitiesContainer">
            <h1 className="Cities-h1">Select a City</h1>
            <div className="AllCities">
                <div className="City">
                    <Link to="/locations/AndhraPradesh">Andhra Pradesh</Link>
                </div>
                <div className="City">
                    <Link to="/locations/hyderabad">Hyderabad</Link>
                </div>
                <div className="City">
                    <Link to="/locations/banglore">Banglore</Link>
                </div>
                <div className="City">
                    <Link to="/locations/chennai">Chennai</Link>
                </div>
                <div className="City">
                    <Link to="/locations/mumbai">Mumbai</Link>
                </div>
                <div className="City">
                    <Link to="/locations/gurugram">Gurugram</Link>
                </div>
                <div className="City">
                    <Link to="/locations/pune">Pune</Link>
                </div>
                <div className="City">
                    <Link to="/locations/delhi">Delhi</Link>                
                </div>
            </div>
          </div>
        </>
    )

}
export default Cities