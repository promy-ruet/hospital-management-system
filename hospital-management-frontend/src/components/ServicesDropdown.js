// components/ServicesDropdown.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const ServicesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const services = [
    { name: 'Laboratory Service', path: '/services/laboratory' },
    { name: 'Ambulance Service', path: '/services/ambulance' },
    { name: 'ATM', path: '/services/atm' },
    { name: 'Blood Bank', path: '/services/blood-bank' },
    { name: 'Cafeteria', path: '/services/cafeteria' },
    { name: 'Car Parking', path: '/services/car-parking' },
    { name: 'Medical Records', path: '/services/medical-records' },
    { name: 'Pharmacy', path: '/services/pharmacy' },
    { name: 'Vaccination Center', path: '/services/vaccination' },
    { name: 'Emergency Service', path: '/services/emergency' }
  ];

  const isActive = (path) => {
    return location.pathname.startsWith(path);
  };

  const buttonStyle = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '10px 15px',
    margin: '0 5px',
    color: isActive('/services') ? '#4CAF50' : '#333',
    fontWeight: isActive('/services') ? 'bold' : 'normal',
    fontSize: 'inherit',
    position: 'relative'
  };

  return (
    <div style={{ position: 'relative' }}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={buttonStyle}
      >
        OUR SERVICES
        <span style={{ marginLeft: '5px' }}>{isOpen ? '▲' : '▼'}</span>
      </button>
      
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: '0',
          backgroundColor: 'white',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          borderRadius: '4px',
          zIndex: '1000',
          minWidth: '200px'
        }}>
          {services.map((service, index) => (
            <Link 
              key={index}
              to={service.path}
              style={{
                display: 'block',
                padding: '10px 15px',
                color: isActive(service.path) ? '#4CAF50' : '#333',
                textDecoration: 'none',
                borderBottom: '1px solid #eee',
                fontWeight: isActive(service.path) ? 'bold' : 'normal',
                backgroundColor: isActive(service.path) ? '#f5f5f5' : 'transparent',
                ':hover': {
                  backgroundColor: '#f5f5f5'
                }
              }}
              onClick={() => setIsOpen(false)}
            >
              {service.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServicesDropdown;