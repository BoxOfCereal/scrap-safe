import React from "react";
import "./ImageSlide.scss";

const ImageSlide = ({ url, alt, classnames }) => {
  return (
    <div
      className={`img-slide ${classnames}`}
      style={{ backgroundImage: `url(${url})` }}
      alt={alt}
    >
      <div className="img-cover">
        <div className="img-text-wrapper">
          <p className="img-title">WASTE MANAGEMENT</p>
          <p className="img-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio unde
            minus ullam illum iusto.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageSlide;
