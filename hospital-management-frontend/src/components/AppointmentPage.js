import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import './AppointmentPage.css';

const AppointmentPage = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    patientName: '',
    dob: '',
    sex: 'male',
    mobile: '',
    email: '',
    preferredDate: '',
    preferredTime: '',
    address: '',
    medicalHistory: ''
  });

  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const username = localStorage.getItem('username');
    if (!username) {
      history.push('/login');
    }
  }, [history]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.patientName.trim()) {
      setMessage('Patient name is required');
      return false;
    }
    if (!formData.mobile || !/^\d{11}$/.test(formData.mobile)) {
      setMessage('Valid 11-digit mobile number is required');
      return false;
    }
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      setMessage('Valid email is required');
      return false;
    }
    if (!formData.preferredDate || !formData.preferredTime) {
      setMessage('Appointment date and time are required');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setMessage('Processing your appointment...');
    
    try {
      const response = await axios.post('http://localhost:3000/api/appointments', {
        ...formData,
        dob: new Date(formData.dob).toISOString(),
        preferredDate: new Date(formData.preferredDate).toISOString()
      });

      if (response.data.success) {
        setMessage('Appointment booked successfully!');
        setFormData({
          patientName: '',
          dob: '',
          sex: 'male',
          mobile: '',
          email: '',
          preferredDate: '',
          preferredTime: '',
          address: '',
          medicalHistory: ''
        });
      }
    } catch (error) {
      setMessage('Error while booking appointment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="appointment-page-container">
      <div className="appointment-form-container">
        <h2>Book Appointment</h2>
        {message && (
          <div className={`message ${message.includes('success') ? 'success' : 'error'}`}>
            {message}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="appointment-form">
          <div className="form-row">
            <div className="input-group">
              <label>Full Name</label>
              <input
                type="text"
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
                placeholder="Enter full name"
                required
              />
            </div>
            
            <div className="input-group">
              <label>Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Gender</label>
              <select name="sex" value={formData.sex} onChange={handleChange}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="input-group">
              <label>Mobile Number</label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="01XXXXXXXXX"
                maxLength={11}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                required
              />
            </div>
            
            <div className="input-group">
              <label>Preferred Date</label>
              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label>Preferred Time</label>
            <input
              type="time"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your full address"
              rows={3}
            />
          </div>

          <div className="input-group">
            <label>Medical History (Optional)</label>
            <textarea
              name="medicalHistory"
              value={formData.medicalHistory}
              onChange={handleChange}
              placeholder="Any relevant medical history"
              rows={3}
            />
          </div>

          <button type="submit" disabled={isSubmitting} className="submit-btn">
            {isSubmitting ? 'Booking...' : 'Book Appointment'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentPage;