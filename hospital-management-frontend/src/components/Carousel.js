import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div style={{ width: "100%", margin: "auto", paddingTop: "20px" }}>
      <Slider {...settings}>
        <div>
          <img src="/Home.png" alt="Slide 1" style={{ width: "100%", height: "550px", objectFit: "cover" }} />
        </div>
        <div>
          <img src="/health.png" alt="Slide 2" style={{ width: "100%", height: "550px", objectFit: "cover" }} />
        </div>
        <div>
          <img src="/health3.png" alt="Slide 3" style={{ width: "100%", height: "550px", objectFit: "cover" }} />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
