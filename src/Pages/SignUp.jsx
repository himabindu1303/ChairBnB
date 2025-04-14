import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./SignUp.css"

function SignUp() {
    const navigate = useNavigate()
    const [SignUpdata, setSignUpdata] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword: ""
    })

    const handleInput = (e) => {
        const { name, value } = e.target
        setSignUpdata({ ...SignUpdata, [name]: value })

    }
    const validateEmail = (email) => {
        const emailpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailpattern.test(email);
    };

    const validatePassword = (password) => {
        const passwordpattern = /^[a-zA-Z0-9@.#$&]{8,20}$/;
        return passwordpattern.test(password);
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        const { name, email, password, confirmpassword } = SignUpdata
        if (!name || !email || !password || !confirmpassword) {
            alert("Please fill the details")
            return
        }
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!validatePassword(password)) {
            alert("Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 digit, and 1 special character.");
            return;
        }
        if (password !== confirmpassword) {
            alert("passwords do not match")
            return;
        }

        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];    //Get existing users from localStorage

        const userExist = existingUsers.find((x) => x.email === email);      //Check if email already exists
        if (userExist) {
            alert("Email already exists.");
            return;
        }

        existingUsers.push({ name, email, password });         //If not, add the new user

        localStorage.setItem("users", JSON.stringify(existingUsers));

        alert("Account created successfully!");
        // navigate("/")
        setSignUpdata({
            name: "",
            email: "",
            password: "",
            confirmpassword: ""
        });

        navigate("/login"); 

    }
    return (
        <div className="Container">
            <form onSubmit={handleSubmit} className="form">
                <h2>Create Account</h2>

                <label htmlFor="name">Name:</label>
                <input type="text" value={SignUpdata.name} name="name" onChange={handleInput} />
                <label htmlFor="email">Email:</label>
                <input type="email" value={SignUpdata.email} name="email" onChange={handleInput} />
                <label htmlFor="password">Password:</label>
                <input type="password" value={SignUpdata.password} name="password" onChange={handleInput} />
                <label htmlFor="confirmpassword">Confirm Password:</label>
                <input type="password" value={SignUpdata.confirmpassword} name="confirmpassword" onChange={handleInput} />

                <p className="signinpage">Already have an account? <Link to="/signin">Sign In here</Link></p>

                <input type="submit" value="Create an Account" className="submit"/>
            </form>
        </div>
    )

}
export default SignUp