import React from 'react';
import './CSS/About.css';

const About = () => {
  return (
    <div id='about'>
    <div className="about-container">
      <h1 className="about-heading">About Us</h1>
      <p>
  Welcome to <span className="highlight">प्राकृतिक आरोग्य</span> Food Products, where health meets tradition.<br />
  We are dedicated to providing nutritious, hygienic, and authentic Nepali<br />
  foods crafted from nature’s finest ingredients. <span>Certified by the Government of Nepal,</span><br />
  Our leading product, <span className='Sattu'>Sattu</span> <br />
  along with a range of wholesome snacks, offers a healthy alternative to<br />
  processed foods. Driven by our motto, "<span className="motto">स्वास्थ्यको सुरुवात, प्राकृतिक स्वादको साथ</span>",<br />
  we ensure each product supports wellness and brings the taste of natural<br />
  goodness to your table. <span>Join us on our journey toward a healthier lifestyle</span>,<br />
  inspired by Nepal's rich heritage and pure, local flavors.
</p>

      <button className="cta-button">Shop Now</button>
    </div>
    </div>
  );
}

export default About;
