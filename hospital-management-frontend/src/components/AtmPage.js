import React from 'react';

const ATMServices = () => {
  return (
    <div style={{ 
      maxWidth: '1000px',
      margin: '30px auto',
      padding: '0 20px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <h2 style={{ 
        color: '#2c3e50', 
        textAlign: 'center',
        marginBottom: '30px',
        fontSize: '28px'
      }}>ATM Services</h2>
      
      <div style={{ 
        display: 'flex',
        alignItems: 'center',
        gap: '30px',
        backgroundColor: '#f8f9fa',
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        flexDirection: window.innerWidth < 768 ? 'column' : 'row'
      }}>
        <img 
           src="/atm.jpg"
          alt="ATM Booth" 
          style={{ 
            width: '600px',
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
            color: '#3498db', 
            marginTop: '0',
            fontSize: '22px',
            borderBottom: '2px solid #3498db',
            paddingBottom: '10px',
            display: 'inline-block'
          }}>
            Convenient ATM Access
          </h3>
          <p style={{ 
            lineHeight: '1.7', 
            color: '#555',
            fontSize: '16px',
            marginBottom: '20px'
          }}>
            We have ATM booths of different Banks beside the hospital building that make your accessibility easy and safe to Cash.
          </p>
          
          <div style={{ backgroundColor: '#e8f4fc', padding: '15px', borderRadius: '8px' }}>
            <h4 style={{ marginTop: '0', color: '#2980b9' }}>Available Services:</h4>
            <ul style={{ 
              columns: '2',
              columnGap: '20px',
              paddingLeft: '20px',
              marginBottom: '0'
            }}>
              <li style={{ marginBottom: '8px' }}>Cash Withdrawal</li>
              <li style={{ marginBottom: '8px' }}>Balance Inquiry</li>
              <li style={{ marginBottom: '8px' }}>Fund Transfer</li>
              <li style={{ marginBottom: '8px' }}>Mobile Recharge</li>
              <li style={{ marginBottom: '8px' }}>Mini Statement</li>
              <li style={{ marginBottom: '8px' }}>Bill Payment</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ATMServices;