import React from 'react';
import { Link } from 'react-router-dom'; 
import './CSS/LoginSignup.css';


const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1 className="loginsignup-title">Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button className="loginsignup-button">Continue</button>
        <p className="loginsignup-login">
          Already have an account?<Link to="/login"><span>Login</span></Link>
          
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" id="agree" />
          <label htmlFor="agree">
            By continuing, I agree to the terms of use and privacy policy.
          </label>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
