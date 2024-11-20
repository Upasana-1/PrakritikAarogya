import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import OurProduct from './OurProduct/OurProduct';
import Contact from './Pages/Contact';
import Heromain from './Components/Heromain/Heromain';
import PrakritikAarogya from './Stories/PrakritikAarogya';
import Registration from './Stories/Registration';
import Login from './Pages/Login';

const App = () => {
  return (
    <BrowserRouter>
      {/* Static Navbar visible on all pages */}
     

      <Routes>
        {/* Route for Home page with additional sections */}
        <Route
          path="/"
          element={
            <>
            <Navbar/>
              <Heromain />
              <About />
            
              <OurProduct />
              <Blog />
              <Contact />
            </>
          }
        />

        {/* Other individual routes */}
        <Route path="/PrakritikAarogya" id='prakritik' element={<PrakritikAarogya />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/about" id='about' element={<About category="About" />} />
        <Route path="/blog" element={<Blog category="blog" />} />
        <Route path="/products" element={<OurProduct category="OurProduct" />} />
        <Route path="/contact" element={<Contact category="Contact" />} />
        <Route path="/login" element={<Login />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<LoginSignup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
