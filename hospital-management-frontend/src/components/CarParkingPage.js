import React from 'react';

const CarParkingServices = () => {
  return (
    <div style={{ 
      maxWidth: '1000px',
      margin: '30px auto',
      padding: '0 20px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <h2 style={{ 
        color: '#2e7d32', 
        textAlign: 'center',
        marginBottom: '30px',
        fontSize: '28px',
        textTransform: 'uppercase'
      }}>Hospital Parking Facilities</h2>
      
      <div style={{ 
        display: 'flex',
        alignItems: 'center',
        gap: '30px',
        backgroundColor: '#e8f5e9',
        borderRadius: '10px',
        padding: '25px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        flexDirection: window.innerWidth < 768 ? 'column' : 'row'
      }}>
        <img 
          src="/park.jpg" 
          alt="Hospital Parking Area" 
          style={{ 
            width: '500px',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            objectFit: 'cover'
          }}
        />
        
        <div style={{
          flex: 1,
          padding: '0 10px'
        }}>
          <h3 style={{ 
            color: '#388e3c', 
            marginTop: '0',
            fontSize: '22px',
            borderBottom: '2px solid #388e3c',
            paddingBottom: '10px',
            display: 'inline-block'
          }}>
            Safe & Convenient Parking
          </h3>
          <p style={{ 
            lineHeight: '1.7', 
            color: '#555',
            fontSize: '16px',
            marginBottom: '20px',
            textAlign: 'justify'
          }}>
            Our hospital provides ample parking space for patients, visitors, and staff with 
            24/7 security surveillance. The parking area is well-lit and conveniently located 
            near the main entrance for easy access to the hospital.
          </p>
          
          <div style={{ backgroundColor: '#c8e6c9', padding: '15px', borderRadius: '8px' }}>
            <h4 style={{ marginTop: '0', color: '#1b5e20' }}>Parking Features:</h4>
            <ul style={{ 
              columns: '2',
              columnGap: '20px',
              paddingLeft: '20px',
              marginBottom: '0'
            }}>
              <li style={{ marginBottom: '8px' }}>24/7 security monitoring</li>
              <li style={{ marginBottom: '8px' }}>Disabled parking spaces</li>
              <li style={{ marginBottom: '8px' }}>Emergency vehicle access</li>
              <li style={{ marginBottom: '8px' }}>Covered parking areas</li>
              <li style={{ marginBottom: '8px' }}>Electric vehicle charging</li>
              <li style={{ marginBottom: '8px' }}>Valet parking service</li>
              <li style={{ marginBottom: '8px' }}>Short-term and long-term parking</li>
              <li style={{ marginBottom: '8px' }}>Clear wayfinding signage</li>
            </ul>
          </div>
          
          <div style={{ 
            marginTop: '20px',
            backgroundColor: '#a5d6a7',
            padding: '15px',
            borderRadius: '8px'
          }}>
            <h4 style={{ marginTop: '0', color: '#1b5e20' }}>Parking Rates:</h4>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <p style={{ margin: '5px 0', fontWeight: 'bold' }}>First 30 minutes:</p>
                <p style={{ margin: '5px 0', fontWeight: 'bold' }}>1-2 hours:</p>
                <p style={{ margin: '5px 0', fontWeight: 'bold' }}>2-4 hours:</p>
                <p style={{ margin: '5px 0', fontWeight: 'bold' }}>Daily maximum:</p>
              </div>
              <div>
                <p style={{ margin: '5px 0' }}>Free</p>
                <p style={{ margin: '5px 0' }}>₹20</p>
                <p style={{ margin: '5px 0' }}>₹50</p>
                <p style={{ margin: '5px 0' }}>₹100</p>
              </div>
            </div>
          </div>
          
          <p style={{
            fontStyle: 'italic',
            color: '#2e7d32',
            fontWeight: '500',
            marginTop: '20px',
            paddingTop: '10px',
            borderTop: '1px dashed #2e7d32'
          }}>
            Parking attendants available at all times to assist with directions and special needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarParkingServices;