import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import './RegistrationPage.css';

const RegistrationPage = ({ setIsAuthenticated }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.username.trim()) newErrors.username = 'Username is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await axios.post('http://localhost:3000/api/register', {
        fullName: formData.fullName,
        username: formData.username,
        password: formData.password
      });

      if (response.data.success) {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('username', formData.username);
        setIsAuthenticated(true);
        history.push('/appointment');
      }
    } catch (error) {
      setErrors({
        form: error.response?.data?.message || 'Registration failed. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-box">
        <div className="registration-header">
          <h2>Create New Account</h2>
          <p>Join our healthcare community today</p>
        </div>
        
        {errors.form && <div className="error-message">{errors.form}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="input-group">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter Your Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className={errors.fullName ? 'error' : ''}
              />
              {errors.fullName && <span className="error-text">{errors.fullName}</span>}
            </div>
            
            <div className="input-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder="Enter Your User Name"
                value={formData.username}
                onChange={handleChange}
                className={errors.username ? 'error' : ''}
              />
              {errors.username && <span className="error-text">{errors.username}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? 'error' : ''}
              />
              {errors.password && <span className="error-text">{errors.password}</span>}
            </div>
            
            <div className="input-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={errors.confirmPassword ? 'error' : ''}
              />
              {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
            </div>
          </div>

          <button 
            type="submit" 
            className="register-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Registering...' : 'Register'}
          </button>
          
          <div className="login-link">
            <span>Already have an account? </span>
            <Link to="/login">Login here</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;