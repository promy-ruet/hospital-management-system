import React from 'react';

const VaccinationCenter = () => {
  return (
    <div style={{ 
      maxWidth: '1000px',
      margin: '30px auto',
      padding: '0 20px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <h2 style={{ 
        color: '#00796b', 
        textAlign: 'center',
        marginBottom: '30px',
        fontSize: '28px',
        textTransform: 'uppercase'
      }}>Vaccination Center</h2>
      
      <div style={{ 
        display: 'flex',
        alignItems: 'center',
        gap: '30px',
        backgroundColor: '#e0f2f1',
        borderRadius: '10px',
        padding: '25px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        flexDirection: window.innerWidth < 768 ? 'column' : 'row'
      }}>
        <img 
          src="/vaccin.jpg" 
          alt="Vaccination Center" 
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
            color: '#00897b', 
            marginTop: '0',
            fontSize: '22px',
            borderBottom: '2px solid #00897b',
            paddingBottom: '10px',
            display: 'inline-block'
          }}>
            Safe and Effective Vaccinations
          </h3>
          <p style={{ 
            lineHeight: '1.7', 
            color: '#555',
            fontSize: '16px',
            marginBottom: '20px',
            textAlign: 'justify'
          }}>
            Our vaccination center provides immunizations for all age groups following national 
            guidelines. We maintain strict cold chain protocols and use only WHO-approved 
            vaccines administered by trained healthcare professionals.
          </p>
          
          <div style={{ backgroundColor: '#b2dfdb', padding: '15px', borderRadius: '8px' }}>
            <h4 style={{ marginTop: '0', color: '#00796b' }}>Available Vaccines:</h4>
            <ul style={{ 
              columns: '2',
              columnGap: '20px',
              paddingLeft: '20px',
              marginBottom: '0'
            }}>
              <li style={{ marginBottom: '8px' }}>Childhood Immunizations</li>
              <li style={{ marginBottom: '8px' }}>COVID-19 Vaccines</li>
              <li style={{ marginBottom: '8px' }}>Influenza (Flu) Vaccine</li>
              <li style={{ marginBottom: '8px' }}>Hepatitis A & B</li>
              <li style={{ marginBottom: '8px' }}>HPV Vaccine</li>
              <li style={{ marginBottom: '8px' }}>MMR (Measles, Mumps, Rubella)</li>
              <li style={{ marginBottom: '8px' }}>Pneumococcal Vaccine</li>
              <li style={{ marginBottom: '8px' }}>Travel Vaccinations</li>
            </ul>
          </div>
          
          <div style={{ 
            marginTop: '20px',
            backgroundColor: '#80cbc4',
            padding: '15px',
            borderRadius: '8px'
          }}>
            <h4 style={{ marginTop: '0', color: '#00796b' }}>Vaccination Process:</h4>
            <ol style={{ paddingLeft: '20px', marginBottom: '0' }}>
              <li style={{ marginBottom: '8px' }}>Registration at reception</li>
              <li style={{ marginBottom: '8px' }}>Medical screening</li>
              <li style={{ marginBottom: '8px' }}>Vaccine administration</li>
              <li style={{ marginBottom: '8px' }}>15-30 minute observation</li>
              <li style={{ marginBottom: '8px' }}>Receive vaccination certificate</li>
            </ol>
          </div>
          
          <div style={{ 
            marginTop: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap'
          }}>
            <div style={{ 
              backgroundColor: '#4db6ac',
              padding: '15px',
              borderRadius: '8px',
              flex: '1',
              minWidth: '250px',
              margin: '0 10px 10px 0'
            }}>
              <h4 style={{ marginTop: '0', color: '#004d40' }}>Operating Hours:</h4>
              <p style={{ margin: '5px 0' }}><strong>Monday-Friday:</strong> 8:00 AM - 6:00 PM</p>
              <p style={{ margin: '5px 0' }}><strong>Saturday:</strong> 9:00 AM - 3:00 PM</p>
              <p style={{ margin: '5px 0' }}><strong>Sunday:</strong> Closed</p>
            </div>
            
            <div style={{ 
              backgroundColor: '#26a69a',
              padding: '15px',
              borderRadius: '8px',
              flex: '1',
              minWidth: '250px',
              marginBottom: '10px'
            }}>
              <h4 style={{ marginTop: '0', color: '#004d40' }}>Requirements:</h4>
              <ul style={{ paddingLeft: '20px', margin: '5px 0' }}>
                <li style={{ marginBottom: '5px' }}>Photo ID</li>
                <li style={{ marginBottom: '5px' }}>Vaccination card (if available)</li>
                <li style={{ marginBottom: '5px' }}>Medical history information</li>
              </ul>
            </div>
          </div>
          
          <p style={{
            fontStyle: 'italic',
            color: '#00796b',
            fontWeight: '500',
            marginTop: '20px',
            paddingTop: '10px',
            borderTop: '1px dashed #00796b'
          }}>
            Walk-ins welcome, but appointments recommended for faster service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VaccinationCenter;