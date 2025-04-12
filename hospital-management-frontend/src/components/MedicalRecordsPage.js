import React from 'react';

const MedicalRecordsServices = () => {
  return (
    <div style={{ 
      maxWidth: '1000px',
      margin: '30px auto',
      padding: '0 20px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <h2 style={{ 
        color: '#1565c0', 
        textAlign: 'center',
        marginBottom: '30px',
        fontSize: '28px',
        textTransform: 'uppercase'
      }}>Medical Records </h2>
      
      <div style={{ 
        display: 'flex',
        alignItems: 'center',
        gap: '30px',
        backgroundColor: '#e3f2fd',
        borderRadius: '10px',
        padding: '25px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        flexDirection: window.innerWidth < 768 ? 'column' : 'row'
      }}>
        <img 
          src="/medical.jpg" 
          alt="Medical Records Department" 
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
            color: '#1976d2', 
            marginTop: '0',
            fontSize: '22px',
            borderBottom: '2px solid #1976d2',
            paddingBottom: '10px',
            display: 'inline-block'
          }}>
            Secure Health Information Management
          </h3>
          <p style={{ 
            lineHeight: '1.7', 
            color: '#555',
            fontSize: '16px',
            marginBottom: '20px',
            textAlign: 'justify'
          }}>
            Our Medical Records Department maintains complete, accurate, and confidential 
            patient health records in compliance with all regulatory requirements. We provide 
            efficient access to medical records while ensuring the highest standards of 
            data privacy and security.
          </p>
          
          <div style={{ backgroundColor: '#bbdefb', padding: '15px', borderRadius: '8px' }}>
            <h4 style={{ marginTop: '0', color: '#0d47a1' }}>Services Offered:</h4>
            <ul style={{ 
              columns: '2',
              columnGap: '20px',
              paddingLeft: '20px',
              marginBottom: '0'
            }}>
              <li style={{ marginBottom: '8px' }}>Medical records retrieval</li>
              <li style={{ marginBottom: '8px' }}>Discharge summary copies</li>
              <li style={{ marginBottom: '8px' }}>Lab/test results</li>
              <li style={{ marginBottom: '8px' }}>Radiology reports</li>
              <li style={{ marginBottom: '8px' }}>Insurance documentation</li>
              <li style={{ marginBottom: '8px' }}>Medico-legal requests</li>
              <li style={{ marginBottom: '8px' }}>Electronic health records</li>
              <li style={{ marginBottom: '8px' }}>Health information transfer</li>
            </ul>
          </div>
          
          <div style={{ 
            marginTop: '20px',
            backgroundColor: '#90caf9',
            padding: '15px',
            borderRadius: '8px'
          }}>
            <h4 style={{ marginTop: '0', color: '#0d47a1' }}>Request Process:</h4>
            <ol style={{ paddingLeft: '20px', marginBottom: '0' }}>
              <li style={{ marginBottom: '8px' }}>Complete the authorization form</li>
              <li style={{ marginBottom: '8px' }}>Provide valid photo ID</li>
              <li style={{ marginBottom: '8px' }}>Specify records needed</li>
              <li style={{ marginBottom: '8px' }}>Allow 3-5 business days for processing</li>
              <li style={{ marginBottom: '8px' }}>Pick up or receive via secure delivery</li>
            </ol>
            <p style={{ margin: '10px 0 0 0', fontStyle: 'italic' }}>
              Emergency requests are processed within 24 hours when medically necessary.
            </p>
          </div>
          
          <p style={{
            fontStyle: 'italic',
            color: '#1565c0',
            fontWeight: '500',
            marginTop: '20px',
            paddingTop: '10px',
            borderTop: '1px dashed #1565c0'
          }}>
            Open Monday-Friday, 8:00 AM to 5:00 PM. For after-hours emergencies, contact hospital administration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MedicalRecordsServices;