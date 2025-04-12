import React, { useState } from 'react';
import './AmbulanceServicePage.css';

const AmbulanceServicePage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setIsSubmitted(true);
    
    // Reset the form
    e.target.reset();
    
    // Hide the message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const scrollToForm = () => {
    document.querySelector('.booking-form-container').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="ambulance-service-page">
      {/* Hero Section with Cover Image and Booking Form */}
      <section className="hero-section">
        <div className="cover-image">
          <img src="/ambu.jpg" alt="Ambulance" className="cover-img" />
          <div className="overlay"></div>
        </div>
        
        <div className="booking-form-container" id="book">
          <div className="form-header">
            <h1>Ambulance Services</h1>
            <p>Services 24/7</p>
            <h2>Book an Appointment</h2>
          </div>
          
          {isSubmitted && (
            <div className="success-message">
              Your booking request has been submitted successfully!
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="booking-form">
            <div className="form-group">
              <input type="text" placeholder="Enter your Name" required />
            </div>
            
            <div className="form-group">
              <select required>
                <option value="">Select City</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Mymensingh">Mymensingh</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Khulna">Khulna</option>
                <option value="Barisal">Barisal</option>
                <option value="Sylhet">Sylhet</option>
                <option value="Chittagong">Chittagong</option>
              </select>
            </div>
            
            <div className="form-group">
              <input type="tel" placeholder="Phone Number" required />
            </div>
            
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </section>


      {/* Our Services Section */}
      <section className="services-section">
        <h2>Our Ambulance Services</h2>
        
        <div className="service-cards">
          <div className="service-card">
            <h3>Basic Life Support (BLS) Ambulances</h3>
            <p>For non-critical conditions requiring basic medical support during transit.</p>
          </div>
          
          <div className="service-card">
            <h3>Advanced Life Support (ALS) Ambulances</h3>
            <p>Designed for critical emergencies, with equipment like ventilators, defibrillators, and trained medical personnel.</p>
          </div>
          
          <div className="service-card">
            <h3>Cardiac Ambulances</h3>
            <p>Specialized for heart-related emergencies, equipped with cardiac monitors and resuscitation devices.</p>
          </div>
          
          <div className="service-card">
            <h3>Neonatal and Pediatric Ambulances</h3>
            <p>Tailored for newborns and children, with incubators and specialized pediatric care equipment.</p>
          </div>
          
          <div className="service-card">
            <h3>Bike Ambulances</h3>
            <p>Swift navigation through urban congestion with essential medical equipment and trained responders for rapid stabilization.</p>
          </div>
          
          <div className="service-card">
            <h3>Air Ambulances</h3>
            <p>Long-distance emergency transfers with a fully equipped medical crew and critical care capabilities for remote areas.</p>
          </div>
        </div>
      </section>

      {/* Emergency Instructions Section */}
      <section className="emergency-section">
        <h2>What to Do in an Emergency?</h2>
        <p>In a medical emergency, stay calm and follow these steps:</p>
        
        <ol className="emergency-steps">
          <li><strong>Dial Our Emergency Hotline:</strong> Call 1066 for immediate assistance.</li>
          <li><strong>Provide Key Details:</strong> Share your location, patient's condition, and contact number.</li>
          <li><strong>Follow Guidance:</strong> Our team will guide you until the ambulance arrives.</li>
        </ol>
        
        <div className="contact-info">
          <h3>Contact Us Now</h3>
          <p className="emergency-number">For emergency assistance, call <strong>1066</strong></p>
          <p className="non-emergency">Need non-emergency transport? 
            <button onClick={scrollToForm} className="book-now-btn">Book an Ambulance Now →</button>
          </p>
        </div>
      </section>
    </div>
  );
};

export default AmbulanceServicePage;