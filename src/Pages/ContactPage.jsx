import "./ContactPage.css"

function ContactPage() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("You will receive a call shortly");
    };

    return (
        <div className="container">
            <h1 className="title">Contact Us</h1>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" required pattern="[A-Za-z\s]{3,}" title="Name must be at least 3 letters long." />

                <input type="email" name="email" placeholder="Email" required  pattern="[a-zA-Z0-9._%+-]{3,}+@[a-zA-Z0-9.-]{3,}+\.[a-zA-Z]{2,}" 
                     title="Enter a valid email (e.g., example@mail.com)."  />

                <input type="tel" name="phone" placeholder="Phone" required pattern="\d{10}" title="Phone number must be exactly 10 digits." />

                <input type="text" name="company" placeholder="Company Name (Optional)" />

                <textarea name="message" placeholder="Type your message here..." ></textarea>

                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default ContactPage;
