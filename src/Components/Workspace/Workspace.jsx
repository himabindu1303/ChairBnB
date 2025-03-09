import "./Workspace.css"; 
import {useNavigate} from "react-router-dom"

const WorkspaceCards = ({ image, location, address, individual, MeetingRoom }) => {
  const navigate = useNavigate()

  const handleBook = () => {
    navigate("/booking", { state: { individual, MeetingRoom, location, address }} )    // send price details  
  }

  return (
    <div className="workspace-card">
      <div className="imageDiv">
        <img src={image} alt="Workspace" className="image" />
      </div>

      <div className="detailsDiv">
        <h2 className="location">{location}</h2>
        <p className="address">{address}</p>

        <div className="priceDiv">
          <p className="price">Pricing:</p>
          <p>Individual Desk(1): ₹{individual} per day</p>
          <p>Meeting Room(more than 1): ₹{MeetingRoom} per day</p>
        </div>

        <button className="booknow" onClick={handleBook}>Book Now</button>
      </div>
    </div>
  );
};

export default WorkspaceCards;