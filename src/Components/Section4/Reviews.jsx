import "./Reviews.css"
function Reviews() {
    return (
        <>
            <h1>Hear the Chairbnb Roar</h1>

            <div class="main-container">

                <div class="main-card">
                    <span class="quote-icon">❝</span>
                    <p class="main-text">Loved the convenience great workspaces, flexible options, and an amazing atmosphere!</p>
                    <div class="reviewer">
                        <img src="https://i.pinimg.com/474x/bb/8a/b8/bb8ab86ea42abb9e340c79663e398e5a.jpg" alt="Reviewer 1" />
                        <div class="reviewer-info">
                            <span class="reviewer-name">Vikram Chauhan</span>
                            <span class="reviewer-title">Managing Director, NextTech</span>
                        </div>
                    </div>
                </div>

                <div class="main-card">
                    <span class="quote-icon">❝</span>
                    <p class="main-text">Effortless booking, top-notch amenities, and the ideal environment for productivity!</p>
                    <div class="reviewer">
                        <img src="https://hips.hearstapps.com/elleuk.cdnds.net/16/27/640x963/gettyimages-459474284_master.jpg?resize=980:*" alt="Reviewer 2" />
                        <div class="reviewer-info">
                            <span class="reviewer-name">Parth Samthaan</span>
                            <span class="reviewer-title">CEO, InnovateX</span>
                        </div>
                    </div>
                </div>

                <div class="main-card">
                    <span class="quote-icon">❝</span>
                    <p class="main-text">A game-changer for remote workers—found a perfect spot with stunning rooftop views!</p>
                    <div class="reviewer">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvDuOStexXwnGb4CB_cMjzXBrJZQXSQv_f3g&s" alt="Reviewer 3" />
                        <div class="reviewer-info">
                            <span class="reviewer-name">Hema Chandra</span>
                            <span class="reviewer-title">Team Lead, CapGemini</span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Reviews