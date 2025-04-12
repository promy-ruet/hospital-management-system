import React from 'react';

const BloodBankServices = () => {
  return (
    <div style={{ 
      maxWidth: '1000px',
      margin: '30px auto',
      padding: '0 20px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <h2 style={{ 
        color: '#c62828', 
        textAlign: 'center',
        marginBottom: '30px',
        fontSize: '28px',
        textTransform: 'uppercase'
      }}>Blood Bank Services</h2>
      
      <div style={{ 
        display: 'flex',
        alignItems: 'center',
        gap: '30px',
        backgroundColor: '#fff5f5',
        borderRadius: '10px',
        padding: '25px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        flexDirection: window.innerWidth < 768 ? 'column' : 'row'
      }}>
        <img 
          src="/blod.jpg" 
          alt="Blood Donation Process" 
          style={{ 
            width: '550px',
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
            color: '#d32f2f', 
            marginTop: '0',
            fontSize: '22px',
            borderBottom: '2px solid #d32f2f',
            paddingBottom: '10px',
            display: 'inline-block'
          }}>
            Safe Blood Transfusion
          </h3>
          <p style={{ 
            lineHeight: '1.7', 
            color: '#555',
            fontSize: '16px',
            textAlign: 'justify',
            marginBottom: '20px'
          }}>
            Blood Bank of Meditrust Hospital caters to both in-patients and out-patients. 
            We receive blood from healthy donors following a thorough history and physical examination, 
            blood grouping and Rh typing by modern Gel Card System.
          </p>
          
          <div style={{ backgroundColor: '#ffebee', padding: '15px', borderRadius: '8px' }}>
            <h4 style={{ marginTop: '0', color: '#b71c1c' }}>Quality Assurance:</h4>
            <ul style={{ 
              paddingLeft: '20px',
              marginBottom: '0'
            }}>
              <li style={{ marginBottom: '8px' }}>Stringent screening following WHO guidelines</li>
              <li style={{ marginBottom: '8px' }}>AABB (American Association of Blood Banks) compliance</li>
              <li style={{ marginBottom: '8px' }}>Modern Gel Card System for blood typing</li>
              <li style={{ marginBottom: '8px' }}>Infection-free blood units</li>
            </ul>
          </div>
          
          <p style={{
            fontStyle: 'italic',
            color: '#d32f2f',
            fontWeight: '500',
            marginTop: '20px',
            paddingTop: '10px',
            borderTop: '1px dashed #d32f2f'
          }}>
            This goes a long way in supporting the lives of patients who need blood urgently.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BloodBankServices;