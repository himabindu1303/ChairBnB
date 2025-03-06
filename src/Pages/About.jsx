import "./About.css"
import Reviews from "../Components/Section4/Reviews"
function About(){
    return(
        <>
          <div className="Container1">
            <div className="Container1-text">
                <h1>Your Ideal Office Space, Just a Click Away!</h1>
                <p>Chairbnb offers premium workspaces designed to inspire creativity and innovation. We are redefining the Indian 
                  startup ecosystem with flexible, high-quality workspaces.</p>
            </div>
            <div className="Container-img">
                <img src="https://thumbs.dreamstime.com/b/modern-green-home-office-interior-design-d-rendering-mock-up-116995719.jpg" alt="image"/>
            </div>
          </div>

          <div className="Container2">
            <h2>About Us</h2>
            <p>Since its inception in 2018 by its Founders Tarun Mor and Ekta Bansal Mor, CoKarma Coworking Spaces has been a trailblazer in 
              creating inclusive environments that foster creativity and collaborations. Throughout the years, we have continuously evolved to 
              meet the needs of businesses, startups, enterprises, large corporations and individuals alike, providing them with the best 
              flexible coworking spaces environment. At CoKarma, we understand the importance of creating an inclusive workspace that inspires 
              productivity and enables meaningful connections. We value each and every one of our clients, recognizing that their success is at 
              the heart of what we do. From offering best-in-class amenities to fostering a vibrant community, we strive to exceed expectations 
              and provide an exceptional coworking experience. At CoKarma, we strive to provide flexible options that cater to your preferences. 
              Whether you need a fully customized space for 20 to 200 people or have a short-term workspace requirment of day pass, dedicated 
              private cabin, or a meeting room for important discussions, we have the right solutions to support your work and help you thrive. 
              Experience the convenience and flexibility of our services at CoKarma Coworking Spaces.</p>
          </div>

          <Reviews />
        </>
    )
}
export default About