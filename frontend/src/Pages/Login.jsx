import { Link } from 'react-router-dom';
import './CSS/Login.css';
import './CSS/LoginSignup.css';

const Login = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1 className="loginsignup-title">Login</h1>
        <div className="loginsignup-fields">
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <div className="loginsignup-remember">
          <label>
            <input type="checkbox" /> Remember Me
          </label>
        </div>
        <button className="loginsignup-button">Login</button>
        <div className="loginsignup-options">
          <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
        </div>
        <p className="loginsignup-login">
          Don’t have an account? <Link to="/Signup"><span>Sign Up</span></Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
