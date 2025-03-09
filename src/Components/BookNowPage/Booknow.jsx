import { useLocation } from "react-router-dom";
import { useState } from "react";
import "./Booknow.css"

function BookNow() {
    const location = useLocation();
    const { individual, MeetingRoom, location:workspacelocation, address} = location.state || { individual: 500, MeetingRoom: 800, 
                                                                             workspacelocation:"unknown" , address:"unknown" }; 

    const [formData, setformData] = useState({
        name: "",
        email: "",
        priceType: "individual",             // Default selection
        price: individual,                   // Default price
      });
    
      const handleInput = (e) => {
        const { name, value } = e.target;
        if (name === "priceType") { 
            setformData({
                ...formData,
                priceType: value,
                price: value === "individual" ? individual : MeetingRoom,
            });
        } else { 
            setformData({
                ...formData,
                [name]: value,
            });
        }
    };
    
    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log("Submitted Data:", formData);
        alert("Booking confirmed! You will receive an email shortly.");
    };
    

    return (
        <>
            <div className="FormContainer">
                <h3>Enter your details here</h3>

                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name here" required onChange={handleInput} />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email here" required onChange={handleInput} />

                <p style={{marginTop:"20px"}}><strong>Location:</strong> {workspacelocation}</p>
                <p><strong>Address:</strong> {address}</p>

                <label>Select Price</label>
                <select name="priceType" onChange={handleInput} value={formData.priceType}>
                    <option value="individual">Individual Desk ₹{individual}</option>
                    <option value="meeting">Meeting Room ₹{MeetingRoom}</option>
                </select>

                <p>Selected Price: ₹{formData.price} per day</p>

                <button type="button">Pay Now</button>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </div>
        </>
    )

}
export default BookNow