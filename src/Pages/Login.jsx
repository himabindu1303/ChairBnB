import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [signInData, setSignInData] = useState({
        email: "",
        password: ""
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setSignInData({ ...signInData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const { email, password } = signInData;
        
        if (!email || !password) {
            alert("Please enter both email and password.");
            return;
        }

        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

        const validUser = existingUsers.find(user => user.email === email && user.password === password);//check the user,password

        if (validUser) {
            alert("Login successful!");
            localStorage.setItem("Loggedinuser",JSON.stringify(validUser))
            navigate("/"); 
        } else {
            alert("Invalid email or password. Please try again.");
        }

        setSignInData({ email: "", password: "" });
    };

    return (
        <div className="Container">
            <form onSubmit={handleSubmit} className="form">
                <h2>Sign In</h2>
                
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" value={signInData.email} onChange={handleInput} required placeholder="Enter your email" />
                
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" value={signInData.password} onChange={handleInput} required placeholder="Enter your password" />
                
                <input type="submit" value="Login" className="submit"/>
            </form>
        </div>
    );
}

export default Login;
