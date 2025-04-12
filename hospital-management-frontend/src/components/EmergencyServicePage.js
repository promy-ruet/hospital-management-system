import React from 'react';

const EmergencyServices = () => {
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
        textTransform: 'uppercase',
        textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
      }}>Emergency Services</h2>
      
      <div style={{ 
        display: 'flex',
        alignItems: 'center',
        gap: '30px',
        backgroundColor: '#ffebee',
        borderRadius: '10px',
        padding: '25px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        flexDirection: window.innerWidth < 768 ? 'column' : 'row',
        borderLeft: '5px solid #c62828'
      }}>
        <img 
          src="/emergency.jpg" 
          alt="Emergency Department" 
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
          <div style={{
            backgroundColor: '#ef9a9a',
            padding: '10px 15px',
            borderRadius: '5px',
            marginBottom: '15px'
          }}>
            <h3 style={{ 
              color: '#b71c1c', 
              margin: '0',
              fontSize: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span style={{ fontSize: '28px' }}>⏰</span> 24/7 Emergency Care
            </h3>
          </div>
          
          <p style={{ 
            lineHeight: '1.7', 
            color: '#555',
            fontSize: '16px',
            marginBottom: '20px',
            textAlign: 'justify'
          }}>
            Our Emergency Department is staffed round-the-clock with experienced emergency physicians, 
            nurses and specialists to handle all medical emergencies. We are equipped with state-of-the-art 
            technology to provide immediate care for critical conditions.
          </p>
          
          <div style={{ 
            backgroundColor: '#ffcdd2', 
            padding: '15px',
            borderRadius: '8px',
            marginBottom: '20px'
          }}>
            <h4 style={{ 
              marginTop: '0', 
              color: '#c62828',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{ fontSize: '20px' }}>🚨</span> Emergency Contact
            </h4>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '30px',
              flexWrap: 'wrap'
            }}>
              <div style={{ textAlign: 'center' }}>
                <p style={{ margin: '5px 0', fontWeight: 'bold' }}>Emergency Number</p>
                <p style={{ 
                  margin: '0',
                  fontSize: '22px',
                  color: '#c62828',
                  fontWeight: 'bold'
                }}>12345</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <p style={{ margin: '5px 0', fontWeight: 'bold' }}>Ambulance</p>
                <p style={{ 
                  margin: '0',
                  fontSize: '22px',
                  color: '#c62828',
                  fontWeight: 'bold'
                }}>1066</p>
              </div>
            </div>
          </div>
          
          <div style={{ 
            backgroundColor: '#ef9a9a',
            padding: '15px',
            borderRadius: '8px',
            marginBottom: '20px'
          }}>
            <h4 style={{ marginTop: '0', color: '#b71c1c' }}>Services Available:</h4>
            <ul style={{ 
              columns: '2',
              columnGap: '20px',
              paddingLeft: '20px',
              marginBottom: '0'
            }}>
              <li style={{ marginBottom: '8px' }}>Trauma Care</li>
              <li style={{ marginBottom: '8px' }}>Cardiac Emergencies</li>
              <li style={{ marginBottom: '8px' }}>Stroke Management</li>
              <li style={{ marginBottom: '8px' }}>Pediatric Emergencies</li>
              <li style={{ marginBottom: '8px' }}>Critical Care</li>
              <li style={{ marginBottom: '8px' }}>Burn Treatment</li>
              <li style={{ marginBottom: '8px' }}>Poison Management</li>
              <li style={{ marginBottom: '8px' }}>Emergency Surgery</li>
            </ul>
          </div>
          
          <div style={{ 
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '15px'
          }}>
            <div style={{ 
              backgroundColor: '#ffcdd2',
              padding: '15px',
              borderRadius: '8px',
              flex: '1',
              minWidth: '200px'
            }}>
              <h4 style={{ marginTop: '0', color: '#c62828' }}>When to Visit ER:</h4>
              <ul style={{ paddingLeft: '20px', margin: '5px 0' }}>
                <li style={{ marginBottom: '5px' }}>Chest pain</li>
                <li style={{ marginBottom: '5px' }}>Difficulty breathing</li>
                <li style={{ marginBottom: '5px' }}>Severe bleeding</li>
                <li style={{ marginBottom: '5px' }}>Loss of consciousness</li>
              </ul>
            </div>
            
            <div style={{ 
              backgroundColor: '#ffcdd2',
              padding: '15px',
              borderRadius: '8px',
              flex: '1',
              minWidth: '200px'
            }}>
              <h4 style={{ marginTop: '0', color: '#c62828' }}>What to Bring:</h4>
              <ul style={{ paddingLeft: '20px', margin: '5px 0' }}>
                <li style={{ marginBottom: '5px' }}>ID Proof</li>
                <li style={{ marginBottom: '5px' }}>Insurance Card</li>
                <li style={{ marginBottom: '5px' }}>Medication List</li>
                <li style={{ marginBottom: '5px' }}>Medical History</li>
              </ul>
            </div>
          </div>
          
          <p style={{
            fontStyle: 'italic',
            color: '#c62828',
            fontWeight: '500',
            marginTop: '20px',
            paddingTop: '10px',
            borderTop: '1px dashed #c62828',
            textAlign: 'center'
          }}>
            In life-threatening emergencies, come directly to ER or call ambulance - DO NOT DELAY!
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmergencyServices;