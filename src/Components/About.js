import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image-1.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">What we do?</p>
        <h1 className="primary-heading">
          mittiMate
        </h1>
        <p className="primary-text">
        We provide a data-driven solution that helps farmers optimize fertilizer use by recommending the ideal types and quantities based on soil health, crop type, and weather patterns.
        </p>
        <p className="primary-text">
        The goal is to promote sustainable farming practices, improve crop yields, and enhance farmer income, all through a user-friendly web application.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;