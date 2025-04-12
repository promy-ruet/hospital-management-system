// components/ServicePage.js
import React from 'react';

const ServicePage = ({ title }) => {
  // You can add specific content for each service here
  const serviceDescriptions = {
    'Laboratory Services': 'Our state-of-the-art laboratory provides comprehensive diagnostic services with quick turnaround times and accurate results.',
    'Ambulance Service': '24/7 emergency ambulance service with trained paramedics and life-saving equipment for critical care during transport.',
    'ATM': 'Conveniently located ATM machines for easy cash access within the hospital premises.',
    'Blood Bank': 'Fully equipped blood bank with all blood types available, ensuring timely availability for emergencies and surgeries.',
    'Cafeteria': 'Hygienic and nutritious food options available for patients, visitors, and staff at reasonable prices.',
    'Car Parking': 'Secure and spacious parking facility with valet services available for patient convenience.',
    'Medical Records': 'Efficient medical records management system for easy retrieval and maintenance of patient health information.',
    'Pharmacy': 'Well-stocked pharmacy with all essential medicines available, including specialized medications.',
    'Vaccination Center': 'Complete vaccination services for children and adults, including travel vaccines and immunization programs.',
    'Emergency Service': '24/7 emergency department staffed with experienced doctors and equipped with advanced life support systems.'
  };

  return (
    <div style={{ padding: '50px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ color: '#4CAF50', marginBottom: '30px' }}>{title}</h1>
      <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
        {serviceDescriptions[title] || `This is the detailed page for ${title}. Here you can find all the information about this service.`}
      </p>
      <div style={{ marginTop: '30px', backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '5px' }}>
        <h3>Service Details</h3>
        <ul style={{ marginTop: '15px' }}>
          <li>Available 24/7</li>
          <li>Staffed by trained professionals</li>
          <li>Modern equipment and facilities</li>
          <li>Affordable pricing</li>
          <li>Quick service delivery</li>
        </ul>
      </div>
    </div>
  );
};

export default ServicePage;