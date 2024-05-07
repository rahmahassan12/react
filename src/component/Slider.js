import image1 from './Image/image1.jpeg';
import Image2 from './Image/image2.jpeg';
import Image3 from './Image/image3.jpeg';
import './Slider.css';
function Slider(){
    return(
          <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} className="d-block w-90 height-600" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Image2} className="d-block w-90 height-600" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Image3} className="d-block w-90height-600" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
    )
}export default Slider ;