import React, { Component } from "react";
import Slider from "react-slick";
import "./Section1.css";
import arrowDown from "./../../assets/img/arrow-down.png";

class Section1 extends Component {
  sliderSettings = {
    adaptiveHeight: true,
    arrows: false,
    autoplay: true,
    dots: true,
    infinite: true,
    lazyLoad: "progressive",
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500
  };

  render() {
    return (
      <div className="section1">
        <Slider {...this.sliderSettings}>
          <div className="bg-img img1">
            <h1>Lorem Ipsum</h1>
            <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>
            <br />
            <a href="#Section2" className="arrowDown">
              <img src={arrowDown} alt="Next Section" />
            </a>
          </div>
          <div className="bg-img img1">
            <h1>Lorem Ipsum</h1>
            <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>
            <br />
            <a href="#Section2" className="arrowDown">
              <img src={arrowDown} alt="Next Section" />
            </a>
          </div>
          <div className="bg-img img1">
            <h1>Lorem Ipsum</h1>
            <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>
            <br />
            <a href="#Section2" className="arrowDown">
              <img src={arrowDown} alt="Next Section" />
            </a>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Section1;
