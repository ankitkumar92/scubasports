import Car1 from "./images/car1.jpg";
import Car2 from "./images/car2.jpg"
import Car3 from "./images/car3.jpeg"

function CustomCarousel() {
  return(
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={Car1} class="d-block w-100" alt="water activity"/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={Car2} class="d-block w-100" alt="water activity"/>
    </div>
    <div class="carousel-item">
      <img src={Car3} class="d-block w-100" alt="water activity"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default CustomCarousel;