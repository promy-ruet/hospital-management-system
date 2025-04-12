import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = ({ setIsAuthenticated }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/login', formData);
      if (response.data.success) {
        setMessage('Login successful');
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('username', response.data.username);
        setIsAuthenticated(true);
        history.push('/appointment');
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'Invalid username or password');
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-form-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        {message && <p className="message">{message}</p>}
        <div className="create-account">
          Don't have an account? <Link to="/register">Create new account</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;