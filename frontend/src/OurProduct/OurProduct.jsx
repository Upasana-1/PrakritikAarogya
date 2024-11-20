
import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './OurProduct.css'
import Sattu from '../Components/Assets/Sattu.png'; 
import Bananachips from '../Components/Assets/Bananachips.png';
import pustakari from '../Components/Assets/pustakari.png'
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const OurProduct = () => {
  return (
    <div id='products'>
    <div className="product-container">
      <h1 className="contact-heading">Our Products</h1>
      <Carousel responsive={responsive}>
        <div className="product-card">
          <img src={Sattu} alt="Mix Sattu" className="product-image" />
          <h2 className="product-name">Mix Sattu</h2>
          <p className="product-description">A healthy and nutritious drink mix made with natural ingredients.</p>
          <button className="cta-button">Add to Cart</button>
        </div>

        <div className="product-card">
          <img src={Bananachips} alt="Organic Honey" className="product-image" />
          <h2 className="product-name">Banana Chips</h2>
          <p className="product-description">Crispy and Crunchy Banana Chips.</p>
          <button className="cta-button">Add to Cart</button>
        </div>

        <div className="product-card">
          <img src={pustakari} alt="Healthy Snack" className="product-image" />
          <h2 className="product-name">Pustakari</h2>
          <p className="product-description">Authentic Nepali Taste Pustakari.</p>
          <button className="cta-button">Add to Cart</button>
        </div>

        <div className="product-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMW2lipeOYEuLuNm6GiPPAN3ZplIFWEcrUXQ&s" alt="Energy Bar" className="product-image" />
          <h2 className="product-name">Energy Bar</h2>
          <p className="product-description">A wholesome bar packed with energy-boosting ingredients.</p>
          <button className="cta-button">Add to Cart</button>
        </div>
      </Carousel>
    </div>
    </div>
  );
};

export default OurProduct;
