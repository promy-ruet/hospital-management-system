import React from 'react';

const CafeteriaServices = () => {
  return (
    <div style={{ 
      maxWidth: '1000px',
      margin: '30px auto',
      padding: '0 20px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <h2 style={{ 
        color: '#e65100', 
        textAlign: 'center',
        marginBottom: '30px',
        fontSize: '28px',
        textTransform: 'uppercase'
      }}>Hospital Cafeteria Services</h2>
      
      <div style={{ 
        display: 'flex',
        alignItems: 'center',
        gap: '30px',
        backgroundColor: '#fff3e0',
        borderRadius: '10px',
        padding: '25px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        flexDirection: window.innerWidth < 768 ? 'column' : 'row'
      }}>
        <img 
          src="/cafe.jpg" 
          alt="Hospital Cafeteria" 
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
            color: '#ef6c00', 
            marginTop: '0',
            fontSize: '22px',
            borderBottom: '2px solid #ef6c00',
            paddingBottom: '10px',
            display: 'inline-block'
          }}>
            Nutritious Meals & Refreshments
          </h3>
          <p style={{ 
            lineHeight: '1.7', 
            color: '#555',
            fontSize: '16px',
            marginBottom: '20px'
          }}>
            Our hospital cafeteria provides healthy, hygienic meals for patients, visitors, and staff. 
            We offer a variety of nutritious options prepared under strict hygiene standards to 
            support patient recovery and provide comfort to visitors.
          </p>
          
          <div style={{ backgroundColor: '#ffe0b2', padding: '15px', borderRadius: '8px' }}>
            <h4 style={{ marginTop: '0', color: '#e65100' }}>Available Services:</h4>
            <ul style={{ 
              columns: '2',
              columnGap: '20px',
              paddingLeft: '20px',
              marginBottom: '0'
            }}>
              <li style={{ marginBottom: '8px' }}>Breakfast buffet</li>
              <li style={{ marginBottom: '8px' }}>Lunch & dinner meals</li>
              <li style={{ marginBottom: '8px' }}>Vegetarian options</li>
              <li style={{ marginBottom: '8px' }}>Diet-specific meals</li>
              <li style={{ marginBottom: '8px' }}>Beverages & snacks</li>
              <li style={{ marginBottom: '8px' }}>24/7 coffee service</li>
              <li style={{ marginBottom: '8px' }}>Patient meal delivery</li>
              <li style={{ marginBottom: '8px' }}>Visitor meal packages</li>
            </ul>
          </div>
          
          <p style={{
            fontStyle: 'italic',
            color: '#e65100',
            fontWeight: '500',
            marginTop: '20px',
            paddingTop: '10px',
            borderTop: '1px dashed #e65100'
          }}>
            Open daily from 6:00 AM to 10:00 PM with extended hours for staff.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CafeteriaServices;