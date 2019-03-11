import React, { useState, useEffect } from "react";

import "./Carousel.scss";
import ImageSlide from "./ImageSlide.js";

import electricMeter from "../../imgs/carousel/electricity-meter.jpg";
import gasMeter from "../../imgs/carousel/gas-meter.jpg";
import industry from "../../imgs/carousel/industry.jpg";
import meter from "../../imgs/carousel/meter.jpg";

const Carousel = () => {
  const [imgIndex, setImageIndex] = useState(0);
  const imgs = [
    { url: electricMeter, alt: "electric-meter" },
    { url: gasMeter, alt: "gas-meter" },
    { url: industry, alt: "industry" },
    { url: meter, alt: "meter" }
  ];
  const nextSlide = () => {
    setImageIndex((imgIndex + 1) % imgs.length);
    console.log(imgIndex);
  };
  const prevSlide = () => {
    setImageIndex((imgIndex - 1 + imgs.length) % imgs.length);
  };

  return (
    <div className="carousel-wrapper">
      <div className="left-button" onClick={prevSlide}>
        left
      </div>
      {imgs.map((img, i) => {
        return (
          <ImageSlide
            key={i}
            {...img}
            classnames={i === imgIndex ? `display-flex` : `display-none`}
          />
        );
      })}
      <div className="right-button" onClick={nextSlide}>
        right
      </div>
    </div>
  );
};

export default Carousel;
