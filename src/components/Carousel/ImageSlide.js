import React from "react";
import "./ImageSlide.scss";

const ImageSlide = ({ url, alt, classnames }) => {
  return (
    <div
      className={`img-slide ${classnames}`}
      style={{ backgroundImage: `url(${url})` }}
      alt={alt}
    />
  );
};

export default ImageSlide;
