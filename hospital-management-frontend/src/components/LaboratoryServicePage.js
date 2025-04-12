import React from 'react';
import { Link } from 'react-router-dom';

const LaboratoryServicePage = () => {
  return (
    <div style={{ padding: '50px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '80px 40px',
        borderRadius: '10px',
        marginBottom: '40px',
        textAlign: 'center',
        backgroundColor: '#4CAF50'
      }}>
        <h2 style={{ fontSize: '28px', marginBottom: '30px' }}>Advanced Laboratory Testing Services</h2>
        <p style={{ fontSize: '18px', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
          Our laboratory services combine advanced technology and expert analysis to ensure precise and timely diagnostic results. 
          With specialized departments in Clinical Biochemistry, Clinical Microbiology & Serology, Cytopathology, 
          Histopathology, and Molecular Biology, we deliver comprehensive solutions for patient care and research.
        </p>
      </div>

      {/* Image + Text Section */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '40px',
        marginBottom: '50px'
      }}>
        {/* Image Column */}
        <div style={{ flex: 1 }}>
          <img 
            src="/labb.jpg" 
            alt="Laboratory Equipment" 
            style={{ 
              width: '100%', 
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }} 
          />
        </div>
        
        {/* Text Column */}
        <div style={{ flex: 1 }}>
          <h3 style={{ 
            color: '#4CAF50', 
            fontSize: '24px',
            marginBottom: '20px'
          }}>
            Laboratory Facilities
          </h3>
          <p style={{ 
            fontSize: '16px', 
            lineHeight: '1.7',
            marginBottom: '15px'
          }}>
            Our laboratory is equipped with the latest diagnostic technology operated by 
            highly trained professionals. We maintain strict quality control measures 
            to ensure accurate and reliable test results.
          </p>
          <p style={{ 
            fontSize: '16px', 
            lineHeight: '1.7',
            marginBottom: '15px'
          }}>
            From routine blood tests to advanced molecular diagnostics, we provide 
            a comprehensive range of services to meet all your healthcare needs.
          </p>
          <ul style={{
            listStyleType: 'disc',
            paddingLeft: '20px',
            marginTop: '15px'
          }}>
            <li style={{ marginBottom: '8px' }}>ISO-certified laboratory</li>
            <li style={{ marginBottom: '8px' }}>Rapid test results</li>
            <li style={{ marginBottom: '8px' }}>Digital reporting system</li>
          </ul>
        </div>
      </div>

      {/* Service Cards Section - 2 columns, 3 rows */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '30px',
        marginTop: '40px'
      }}>
        {/* Card 1 */}
        <div style={{
          backgroundColor: '#f5f5f5',
          padding: '25px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ color: '#4CAF50', marginBottom: '15px' }}>Clinical Biochemistry</h3>
          <p style={{ lineHeight: '1.6' }}>
            Focuses on analyzing chemical processes in the body for accurate disease detection.
          </p>
        </div>

        {/* Card 2 */}
        <div style={{
          backgroundColor: '#f5f5f5',
          padding: '25px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ color: '#4CAF50', marginBottom: '15px' }}>Clinical Microbiology & Serology</h3>
          <p style={{ lineHeight: '1.6' }}>
            Specialize in identifying infectious agents and immune responses.
          </p>
        </div>

        {/* Card 3 */}
        <div style={{
          backgroundColor: '#f5f5f5',
          padding: '25px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ color: '#4CAF50', marginBottom: '15px' }}>Cytopathology</h3>
          <p style={{ lineHeight: '1.6' }}>
            Involves studying individual cells to detect diseases at an early stage.
          </p>
        </div>

        {/* Card 4 */}
        <div style={{
          backgroundColor: '#f5f5f5',
          padding: '25px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ color: '#4CAF50', marginBottom: '15px' }}>Histopathology</h3>
          <p style={{ lineHeight: '1.6' }}>
            Examines tissue samples to identify abnormalities and diseases, including cancer.
          </p>
        </div>

        {/* Card 5 */}
        <div style={{
          backgroundColor: '#f5f5f5',
          padding: '25px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ color: '#4CAF50', marginBottom: '15px' }}>Molecular Biology</h3>
          <p style={{ lineHeight: '1.6' }}>
            Focuses on analyzing genetic and molecular markers to uncover the root causes of diseases.
          </p>
        </div>

        {/* Card 6 */}
        <div style={{
          backgroundColor: '#f5f5f5',
          padding: '25px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ color: '#4CAF50', marginBottom: '15px' }}>Hematology</h3>
          <p style={{ lineHeight: '1.6' }}>
            Our laboratory performs data analyses of blood and white blood cells, providing comprehensive 
            hematological assessments for various conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LaboratoryServicePage;