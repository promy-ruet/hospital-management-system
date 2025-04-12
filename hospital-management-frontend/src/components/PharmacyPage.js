import React from 'react';

const PharmacyServices = () => {
  return (
    <div style={{ 
      maxWidth: '1000px',
      margin: '30px auto',
      padding: '0 20px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <h2 style={{ 
        color: '#6a1b9a', 
        textAlign: 'center',
        marginBottom: '30px',
        fontSize: '28px',
        textTransform: 'uppercase'
      }}>Hospital Pharmacy Services</h2>
      
      <div style={{ 
        display: 'flex',
        alignItems: 'center',
        gap: '30px',
        backgroundColor: '#f3e5f5',
        borderRadius: '10px',
        padding: '25px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        flexDirection: window.innerWidth < 768 ? 'column' : 'row'
      }}>
        <img 
          src="/phar.jpg" 
          alt="Hospital Pharmacy" 
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
            color: '#8e24aa', 
            marginTop: '0',
            fontSize: '22px',
            borderBottom: '2px solid #8e24aa',
            paddingBottom: '10px',
            display: 'inline-block'
          }}>
            Complete Medication Care
          </h3>
          <p style={{ 
            lineHeight: '1.7', 
            color: '#555',
            fontSize: '16px',
            marginBottom: '20px',
            textAlign: 'justify'
          }}>
            Our hospital pharmacy provides comprehensive pharmaceutical services with 
            qualified pharmacists available to ensure safe and effective medication use. 
            We maintain a complete inventory of medicines following all regulatory standards.
          </p>
          
          <div style={{ backgroundColor: '#e1bee7', padding: '15px', borderRadius: '8px' }}>
            <h4 style={{ marginTop: '0', color: '#6a1b9a' }}>Pharmacy Services:</h4>
            <ul style={{ 
              columns: '2',
              columnGap: '20px',
              paddingLeft: '20px',
              marginBottom: '0'
            }}>
              <li style={{ marginBottom: '8px' }}>In-patient medication dispensing</li>
              <li style={{ marginBottom: '8px' }}>Out-patient pharmacy services</li>
              <li style={{ marginBottom: '8px' }}>Emergency medications</li>
              <li style={{ marginBottom: '8px' }}>Chronic disease medications</li>
              <li style={{ marginBottom: '8px' }}>Vaccinations and immunizations</li>
              <li style={{ marginBottom: '8px' }}>Medication counseling</li>
              <li style={{ marginBottom: '8px' }}>Specialty medications</li>
              <li style={{ marginBottom: '8px' }}>Compounding services</li>
            </ul>
          </div>
          
          <div style={{ 
            marginTop: '20px',
            backgroundColor: '#ce93d8',
            padding: '15px',
            borderRadius: '8px'
          }}>
            <h4 style={{ marginTop: '0', color: '#6a1b9a' }}>Operating Hours:</h4>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <p style={{ margin: '5px 0', fontWeight: 'bold' }}>Weekdays:</p>
                <p style={{ margin: '5px 0', fontWeight: 'bold' }}>Saturdays:</p>
                <p style={{ margin: '5px 0', fontWeight: 'bold' }}>Sundays/Holidays:</p>
              </div>
              <div>
                <p style={{ margin: '5px 0' }}>7:00 AM - 10:00 PM</p>
                <p style={{ margin: '5px 0' }}>8:00 AM - 8:00 PM</p>
                <p style={{ margin: '5px 0' }}>9:00 AM - 6:00 PM</p>
              </div>
            </div>
            <p style={{ margin: '10px 0 0 0', fontStyle: 'italic' }}>
              24-hour emergency pharmacy services available for hospitalized patients.
            </p>
          </div>
          
          <p style={{
            fontStyle: 'italic',
            color: '#6a1b9a',
            fontWeight: '500',
            marginTop: '20px',
            paddingTop: '10px',
            borderTop: '1px dashed #6a1b9a'
          }}>
            Our pharmacists are available for medication consultations during all operating hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PharmacyServices;