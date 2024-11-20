import React from 'react';
import './Heromain.css';
import Himal from '../Assets/Himal.jpg'; // You can replace with your own image
import Nature from '../Assets/Nature.jpg';
import NepalBeauty2 from '../Assets/NepalBeauty2.jpg' // Replace with another vibrant image

const Heromain = () => {
  return (
    <div id="home">
      {/* Hero Section */}
      <div
        className="hero-container"
        style={{
          backgroundImage: `url(${NepalBeauty2})`, // Dynamic Background
        }}
      >
        {/* Overlay */}
        <div className="overlay"></div>

        {/* Content */}
        <div className="hero-content">
          <h1 className="main-text">प्राकृतिक आरोग्य</h1>
          <p className="motto">“स्वास्थ्यको सुरुवात, प्राकृतिक स्वादको साथ”</p>
          <button className="cta-button">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default Heromain;
