import React, { Component } from "react";
import Slider from "react-slick";
import "./Section2.css";
import img1 from "./../../assets/img/img1.jpg";

class Section2 extends Component {
  sliderSettings = {
    adaptiveHeight: true,
    arrows: true,
    dots: false,
    infinite: true,
    lazyLoad: "progressive",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    slidesToScroll: 3,
    slidesToShow: 3,
    speed: 500
  };

  render() {
    return (
      <div id="Section2" className="section2">
        <Slider {...this.sliderSettings}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(e => (
            <div className="slider-item">
              <img src={img1} alt={"img1-" + e} />
              <b className="title">Lorem Ipsum</b>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default Section2;
