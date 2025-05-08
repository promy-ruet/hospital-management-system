import React from 'react';
import './ContactPage.css';

const ContactUs = () => {
    return (
        <div className="contact-container">
            {/* Cover Image */}
            <img 
                src="/contact.png" 
                alt="Contact Us" 
                className="contact-cover"
            />

            {/* Centered Contact Information */}
            <div className="contact-content single-column">
                <div className="contact-info">
                    <h3>Contact Information</h3>

                    <div className="info-item">
                        <h4>Location</h4>
                        <p>Dhanmondi, Dhaka</p>
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
            </div>
        </div>
    );
};

export default ContactUs;
