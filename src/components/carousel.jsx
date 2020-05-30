import React from "react";
import banner1 from '../images/Banner 1.jpg'
import banner2 from "../images/Banner 2.jpg";
import banner3 from "../images/Banner 3.jpg";
import banner4 from "../images/Banner 4.jpg";
import banner5 from "../images/Banner 5.jpg";
import banner6 from "../images/Banner 6.jpg";

const Carousel = () => {
  return (
    <section>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <a
            href="https://www.youtube.com/channel/UCf_U0-K7i3qnRTlGci7z1yQ?view_as=subscriber"
            target="_blank"
            rel="nofollow"
          >
            <div className="carousel-item active" data-interval="60000">
              <img src={banner1} className="d-block w-100" alt="Banner 1" />
            </div>
            <div className="carousel-item" data-interval="3000">
              <img src={banner2} className="d-block w-100" alt="Banner 2" />
            </div>
            <div className="carousel-item" data-interval="6000">
              <img src={banner3} className="d-block w-100" alt="Banner 3" />
            </div>
            <div className="carousel-item" data-interval="3000">
              <img src={banner4} className="d-block w-100" alt="Banner 4" />
            </div>
            <div className="carousel-item" data-interval="3000">
              <img src={banner5} className="d-block w-100" alt="Banner 5" />
            </div>
            <div className="carousel-item" data-interval="3000">
              <img src={banner6} className="d-block w-100" alt="Banner 6" />
            </div>
          </a>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleInterval"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleInterval"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
  );
};

export default Carousel;
