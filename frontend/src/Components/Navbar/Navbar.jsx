import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logomain.png';
import cart_icon from '../Assets/cart_icon.png';


const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash.replace("#", "");
        if (hash) {
            const section = document.getElementById(hash);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    const handleScrollToSection = (id, path) => {
        setMenu(id);
        navigate(path, { replace: true, hash: id });

        setTimeout(() => {
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt='' />
                <p>PRAKRITIK AAROGYA</p>  
            </div>
            <ul className='nav-menu'>
                <li onClick={() => handleScrollToSection("home", "/")}>
                    <Link to="/">Home</Link>
                    {menu === "home" ? <hr /> : null}
                </li>
                <li onClick={() => handleScrollToSection("about", "/about")}>
                    <Link to="/about">About</Link>
                    {menu === "about" ? <hr /> : null}
                </li>
                <li onClick={() => handleScrollToSection("products", "/products")}>
                    <Link to="/products">Products</Link> {/* Link Products to /products */}
                    {menu === "products" ? <hr /> : null}
                </li>
                <li onClick={() => handleScrollToSection("blog", "/blog")}>
                    <Link to="/blog">Blog</Link>
                    {menu === "blog" ? <hr /> : null}
                </li>
                <li onClick={() => handleScrollToSection("contact", "/contact")}>
                    <Link to="/contact">Contact</Link>
                    {menu === "contact" ? <hr /> : null}
                </li>
            </ul>
            <div className='nav-login-cart'>
                <button onClick={() => navigate('/login')}>Login</button>
                <img src={cart_icon} alt='' />
                <div className="nav-card-count">0</div>
            </div>
        </div>   
    );
};

export default Navbar;
