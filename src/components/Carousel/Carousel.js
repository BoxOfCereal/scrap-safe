import React, { useState, useEffect, useRef } from "react";

import "./Carousel.scss";
import ImageSlide from "./ImageSlide.js";
import Arrow from "./Arrow.js";

import electricMeter from "../../imgs/carousel/electricity-meter.jpg";
import gasMeter from "../../imgs/carousel/gas-meter.jpg";
import industry from "../../imgs/carousel/industry.jpg";
import meter from "../../imgs/carousel/meter.jpg";

const Carousel = () => {
  const [imgIndex, setImageIndex] = useState(0);
  const imgs = [
    {
      url: electricMeter,
      alt: "electric-meter",
      title: "Asset Recovery",
      text:
        "ScrapSafe provides an environmentally responsible and economic process for recycling retired meters."
    },
    {
      url: gasMeter,
      alt: "gas-meter",
      title: "Leave the dirty work to us.",
      text: `Ship all your dirty meters and we'll document our findings and make sure every meter with hazardous waste is accounted for.`
    },
    {
      url: industry,
      alt: "industry",
      title: "founded in 2010 by GE meter division executives",
      text: `Over 60 Years Combined Experience. `
    },
    {
      url: meter,
      alt: "meter",
      title: `we speak your language`,
      text: `ScrapSafe, Inc. is a company run by meter people for meter people.`
    }
  ];
  const nextSlide = () => {
    setImageIndex((imgIndex + 1) % imgs.length);
    console.log(imgIndex + 1);
    console.log((imgIndex + 1) % imgs.length);
  };
  const prevSlide = () => {
    setImageIndex((imgIndex - 1 + imgs.length) % imgs.length);
  };

  useInterval(nextSlide, 5000);

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  return (
    <div className="carousel-wrapper">
      <Arrow handler={prevSlide} left />
      {imgs.map((img, i) => {
        return (
          <ImageSlide
            key={i}
            {...img}
            classnames={i === imgIndex ? `display-flex` : `display-none`}
          />
        );
      })}
      <Arrow handler={nextSlide} right />
    </div>
  );
};

export default Carousel;
