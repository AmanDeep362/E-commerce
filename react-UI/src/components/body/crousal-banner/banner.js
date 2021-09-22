import React from 'react'
import './banne.css'
import crausalBanner1 from '../../../images/crausal-banner1.jpg'
import crausalBanner2 from '../../../images/crausal-banner2.jpg'
class Banner extends React.Component {
    render() {
        return (
            <>
                <div className="banner-container">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={crausalBanner2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item ">
      <img src={crausalBanner1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={crausalBanner2} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
           </div>     
            </>
        );
    }
}
export default Banner;
