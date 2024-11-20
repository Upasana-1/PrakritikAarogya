import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "de73bd70-3127-46e5-9f34-b9fb1278f6d9");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.error("Error:", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setResult("An error occurred. Please try again later.");
    }
  };

  return (
    <div id="contact">
      <div className="contact-container">
        <h1 className="contact-heading">Contact Us</h1>

        {/* Contact Info Section */}
        <div className="contact-info">
          <div className="info-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="info-icon" />
            <p>Panauti, Bagmati Province, Nepal</p>
          </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faPhone} className="info-icon" />
            <p>+977-9847383287</p>
          </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
            <p>prakritikaarogya@gmail.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={onSubmit}>
          <label>
            Name:
            <input type="text" name="name" placeholder="Your Name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" placeholder="Your Email" required />
          </label>
          <label>
            Message:
            <textarea name="message" rows="4" placeholder="Your Message" required></textarea>
          </label>
          <button type="submit" className="submit-button">Send Message</button>
        </form>

        {result && (
  <div className={`popup ${result === "Form Submitted Successfully" ? "success" : "error"}`}>
    <div className="popup-content">
      {result === "Form Submitted Successfully" && (
        <span className="tick-icon">✔️</span>
      )}
      <p>{result}</p>
    </div>
  </div>
)}


        {/* Map Section */}
        <div className="map-section">
          <h2>Find Us Here</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4412726295886!2d85.51528071506108!3d27.706345582792173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b5b8c4d1a75%3A0x5b429bc6bca8b6c8!2sBanepa%2C%20Nepal!5e0!3m2!1sen!2snp!4v1636286832543!5m2!1sen!2snp"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            title="Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
