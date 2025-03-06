import "./ContactPage.css"

function ContactPage() {
    return (
        <>
            <div className="container">
                <h1 className="title">Contact Us</h1>
                <form className="contact-form">
                    <input type="text" name="name" placeholder="Name" required  pattern="/^[a-zA-Z]{3,}$/" />
                    <input type="email" name="email" placeholder="Email" required pattern="/^[a-zA-Z0-9._+-]+@[a-zA-Z0-9]+\\.[a-zA-Z]{2,}$/" />
                    <input type="tel" name="phone" placeholder="Phone" required />
                    <input type="text" name="company" placeholder="Company Name (Optional)" />
                    <textarea name="message" placeholder="Type your message here..." ></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </>

    )
}
export default ContactPage

// onClick={handleSubmit}
// onChange={handleInput}