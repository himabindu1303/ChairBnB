function ContactPage(){
    
    return(
        <>
         <div>
            <input type="text" id="name" name="name" placeholder="Name" onChange={handleInput}/>
            <input type="email" id="email" name="email" placeholder="Email" onChange={handleInput}/>
            <input type="text" id="message" name="message" placeholder="Type the message here...." onChange={handleInput}/>
            <button type="submit" onClick={handleSubmit}>Send Message</button>

         </div>
        </>
    )

}
export default ContactPage