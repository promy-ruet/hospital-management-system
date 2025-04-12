import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './ContactPage.css';

const ContactUs = () => {
    const history = useHistory();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to your backend
        console.log('Form submitted:', formData);
        
        // Show success message
        setIsSubmitted(true);
        
        // Reset form
        setFormData({
            name: '',
            phone: '',
            message: ''
        });
        
        // Hide success message after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
        }, 3000);
    };

    return (
        <div className="contact-container">
            {/* Cover Image - make sure to add this image to your public folder */}
            <img 
                src="/contact.png" 
                alt="Contact Us" 
                className="contact-cover"
            />
            
            <div className="contact-content">
                <div className="contact-info">
                    <h3>Contact Information</h3>
                    
                    <div className="info-item">
                        <h4>Location</h4>
                        <p>
                            Dhanmondi, Dhaka
                        </p>
                    </div>
                    
                    <div className="info-item">
                        <h4>E-Mail Us</h4>
                        <p>meditrusthospital@gmail.com</p>
                    </div>
                    
                    <div className="info-item">
                        <h4>Let's Talk</h4>
                        <p>019712889348</p>
                    </div>
                    
                    <div className="info-item">
                        <h4>24X7</h4>
                        <p>Available</p>
                    </div>
                    
                    
                </div>
                
                <div className="contact-form">
                    <h3>Feel Free to Contact Us</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={formData.name}
                                onChange={handleChange}
                                required 
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="phone">Your Phone</label>
                            <input 
                                type="tel" 
                                id="phone" 
                                name="phone" 
                                value={formData.phone}
                                onChange={handleChange}
                                required 
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="message">Your Message/Question</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        
                        <button type="submit" className="send-btn">
                            Send Message
                        </button>
                        
                        {isSubmitted && (
                            <div className="success-message">
                                Your message has been sent successfully!
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;