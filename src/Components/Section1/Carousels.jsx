import "./Carousels.css"

function Carousels() {
    return (
        <>
            <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://www.wework.com/ideas/wp-content/uploads/sites/4/2021/02/Web_150DPI-20191213_WeWork_One-Seaport-Square-Boston_011_v1.jpg?fit=1440%2C810" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://s3-ap-south-1.amazonaws.com/uploaddocumentstomakeitpublic/wp-content/uploads/2024/09/03160434/PRAJ2599-1-1.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://png.pngtree.com/thumb_back/fw800/background/20241126/pngtree-modern-office-interior-with-open-plan-workspace-and-city-view-image_16667747.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://st5.depositphotos.com/68631180/66157/i/450/depositphotos_661572772-stock-photo-modern-business-office-conference-room.jpg" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
export default Carousels