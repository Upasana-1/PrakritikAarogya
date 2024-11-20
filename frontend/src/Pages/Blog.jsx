import React from 'react';
import './CSS/Blog.css';
import { Link } from 'react-router-dom'; // Import Link for routing
import logomain from '../Components/Assets/logomain.png';
import BusinessRegister from '../Components/Assets/BusinessRegister.jpg';
import originofsattu from '../Components/Assets/originofsattu.webp';
import healthyfoods from '../Components/Assets/healthyfoods.jpg';

const BlogSection = () => {
    const blogPosts = [
        { title: 'Prakritik Aarogya Food Products', image: logomain, description: 'A journey through the registration process of our brand...', link: '/PrakritikAarogya' },
        { title: 'The Registration Journey', image: BusinessRegister, description: 'A journey through the registration process of our brand...', link: '/Registration' },
        { title: 'The Origin of Sattu', image: originofsattu, description: 'The roots of Sattu and its rich nutritional benefits...', link: '/blog/sattu-origin' },
        { title: 'Healthy Eating Habits', image: healthyfoods, description: 'A guide to understanding healthy eating...', link: '/blog/healthy-eating' },
    ];

    return (
        <div id="blog"> 
            <div className="blog-section">
                <h1 className="contact-heading">Our Stories</h1>
                <div className="blog-cards-container">
                    {blogPosts.map((post, index) => (
                        <div key={index} className="blog-card">
                            <img src={post.image} alt={post.title} className="blog-thumbnail" />
                            <h3 className="blog-title">{post.title}</h3>
                            <p className="blog-description">{post.description}</p>
                            <Link to={post.link} className="read-more-btn">Read More</Link> {/* Use post.link dynamically */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogSection;
