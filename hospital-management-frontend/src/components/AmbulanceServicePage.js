import React, { useState, useEffect } from 'react';
import './AmbulanceServicePage.css';

const AmbulanceServicePage = () => {
  // State declarations
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [authData, setAuthData] = useState({
    username: '',
    password: '',
    fullName: '',
    phoneNumber: '',
    isRegistering: false
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // API configuration
  const API_BASE_URL = 'http://localhost:3001/api';

  // Handle authentication submission
  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    try {
      const endpoint = authData.isRegistering ? 'register' : 'login';
      const payload = {
        username: authData.username,
        password: authData.password
      };
      
      if (authData.isRegistering) {
        payload.fullName = authData.fullName;
        payload.phoneNumber = authData.phoneNumber;
      }
      
      const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Authentication failed');
      }

      const data = await response.json();
      
      if (data.success) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        setUser(data.user);
        setIsLoggedIn(true);
        setShowAuthForm(false);
        setSuccess(authData.isRegistering ? 
          'Registration successful!' : 
          'Login successful!');
      } else {
        throw new Error(data.message || 'Authentication failed');
      }
    } catch (err) {
      console.error('Authentication error:', err);
      setError(err.message || 'Failed to connect to server. Please try again.');
    }
  };

  // Handle form input changes
  const handleAuthChange = (e) => {
    setAuthData({
      ...authData,
      [e.target.name]: e.target.value
    });
  };

  // Toggle between login and register modes
  const toggleAuthMode = () => {
    setAuthData({
      ...authData,
      isRegistering: !authData.isRegistering
    });
    setError('');
    setSuccess('');
  };

  // Handle ambulance booking submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isLoggedIn) {
      setShowAuthForm(true);
      return;
    }
    
    const formData = {
      patientName: e.target.elements[0].value,
      location: e.target.elements[1].value,
      phoneNumber: e.target.elements[2].value,
      emergencyType: 'Standard'
    };
    
    try {
      const response = await fetch(`${API_BASE_URL}/ambulance-bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (data.success) {
        setIsSubmitted(true);
        e.target.reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Failed to book ambulance. Please try again.');
    }
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUser(null);
  };

  // Scroll to form function
  const scrollToForm = () => {
    document.querySelector('.booking-form-container').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  // Check for existing session on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');
    
    if (token && savedUser) {
      setIsLoggedIn(true);
      setUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <div className="ambulance-service-page">
      {/* Hero Section with Cover Image Only */}
      <section className="hero-section">
        <div className="cover-image">
          <img src="/ambu.jpg" alt="Ambulance" className="cover-img" />
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
        
        
      </section>
    </div>
  );
};

export default AmbulanceServicePage;