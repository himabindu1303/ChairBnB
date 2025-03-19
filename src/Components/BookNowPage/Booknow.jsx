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
        Bookingdate:""
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
    
    const handleSubmit = async (e) => {
        e.preventDefault(); 
        const { name, email, Bookingdate } = formData;
        if (!name || !email || !Bookingdate) {
            alert("Please fill in all required fields: Name, Email, and Booking Date.");
            return;
        }

        const bookingData = {name, email, Bookingdate, workspacelocation, address, price:formData.price, priceType: formData.priceType}
        try {
            const response = await fetch("http://localhost:3009/bookingData", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(bookingData)
            });
    
            if (response.ok) {
                const result = await response.json();
                console.log("Response", result);
                alert("Booking confirmed! You will receive an email shortly.");
            } else {
                console.error("Error:", error);
                alert("There was a problem submitting your booking.");
            }
        } catch (error) {
            console.error("Network Error:", error);
            alert("Failed to connect to the server.");
        }

    };
    
    return (
        <>
            <div className="FormContainer">
                <h3>Enter your details here</h3>

                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name here"  onChange={handleInput} />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email here"  onChange={handleInput} />
                <label htmlFor="Bookingdate">Booking Date</label>
                <input type="date" id="Bookingdate" name="Bookingdate"  onChange={handleInput} />

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