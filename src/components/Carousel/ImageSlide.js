import React from "react";
import "./ImageSlide.scss";

const ImageSlide = ({ url, alt, classnames, title, text }) => {
  return (
    <div
      className={`img-slide ${classnames}`}
      style={{ backgroundImage: `url(${url})` }}
      alt={alt}
    >
      <div className="img-cover">
        <div className="img-text-wrapper">
          <p className="img-title">{title}</p>
          <p className="img-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageSlide;
