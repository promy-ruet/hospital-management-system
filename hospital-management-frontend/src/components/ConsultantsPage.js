import React from 'react';
import { Link } from 'react-router-dom';
const consultantsBanner = '/doc.jpg'; 

const ConsultantsPage = () => {
  const departmentsData = [
    {
      id: 1,
      name: 'Cardiology',
      specialists: [
        {
          id: 101,
          name: 'Dr. Jawwad Kazi',
          designation: 'Interventional Cardiologist',
          availability: 'Daily Consultation'
        }
      ]
    },
    {
      id: 2,
      name: 'General Medicine',
      specialists: [
        {
          id: 201,
          name: 'Dr. Sami Uz Zaman',
          designation: 'Senior Medicine Specialist',
          availability: 'Mon-Fri: 9AM-5PM'
        }
      ]
    },
    {
      id: 3,
      name: 'Orthopedics',
      specialists: [
        {
          id: 301,
          name: 'Dr. Akram',
          designation: 'Orthopedic Surgeon',
          availability: 'Mon-Sat: 10AM-4PM'
        }
      ]
    },
    {
      id: 4,
      name: 'Pediatrics',
      specialists: [
        {
          id: 401,
          name: 'Dr. Farhana Ahmed',
          designation: 'Pediatric Specialist',
          availability: 'Daily: 8AM-2PM'
        }
      ]
    },
    {
      id: 5,
      name: 'Anesthesia',
      specialists: [
        {
          id: 501,
          name: 'Dr. Nusrat Jahan',
          designation: 'Anesthesiologist',
          availability: 'On-call 24/7'
        }
      ]
    },
    {
      id: 6,
      name: 'Urology',
      specialists: [
        {
          id: 601,
          name: 'Dr. Kamal Hossain',
          designation: 'Urological Surgeon',
          availability: 'Sun-Thu: 11AM-7PM'
        }
      ]
    }
  ];

  // Inline styles with hover effects
  const styles = {
    consultantsPage: {
      maxWidth: '100%',
      margin: '0 auto',
      padding: '0',
      fontFamily: 'Arial, sans-serif'
    },
    banner: {
      width: '100%',
      marginBottom: '30px'
    },
    bannerImage: {
      width: '100%',
      height: '400px',
      objectFit: 'cover',
      objectPosition: 'center'
    },
    departmentsGrid: {
      textAlign: 'center'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px'
    },
    departmentListContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '40px',
      overflowX: 'auto',
      padding: '10px 0'
    },
    departmentList: {
      display: 'inline-flex',
      gap: '15px',
      padding: '0 20px'
    },
    departmentButton: {
      padding: '12px 25px',
      backgroundColor: '#fff',
      color: '#2a5885',
      border: '2px solid #2a5885',
      borderRadius: '30px',
      cursor: 'pointer',
      fontWeight: '600',
      fontSize: '16px',
      transition: 'all 0.3s ease',
      whiteSpace: 'nowrap',
      textDecoration: 'none',
      ':hover': {
        backgroundColor: '#2a5885',
        color: '#fff'
      }
    },
    departmentSection: {
      marginBottom: '40px',
      padding: '25px',
      backgroundColor: '#f8f9fa',
      borderRadius: '10px',
      scrollMarginTop: '20px'
    },
    sectionTitle: {
      color: '#2a5885',
      marginBottom: '20px',
      paddingBottom: '10px',
      borderBottom: '2px solid #e0e0e0'
    },
    departmentDescription: {
      color: '#555',
      lineHeight: '1.7',
      marginBottom: '25px'
    },
    specialistCard: {
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 3px 10px rgba(0,0,0,0.08)',
      padding: '20px',
      marginBottom: '20px',
      display: 'flex'
    },
    doctorInfo: {
      flex: 1
    },
    doctorName: {
      color: '#2a5885',
      fontSize: '20px',
      marginBottom: '5px'
    },
    doctorDesignation: {
      color: '#666',
      fontSize: '16px',
      marginBottom: '5px'
    },
    doctorAvailability: {
      color: '#4CAF50',
      fontWeight: '600',
      marginBottom: '15px'
    },
    viewProfileBtn: {
      display: 'inline-block',
      padding: '10px 20px',
      backgroundColor: '#2a5885',
      color: '#fff',
      borderRadius: '5px',
      textDecoration: 'none',
      fontWeight: '500',
      transition: 'background-color 0.3s',
      ':hover': {
        backgroundColor: '#1d3c6e'
      }
    }
  };

  const departmentDescriptions = {
    cardiology: `We have vast experience in the most complicated coronary artery bypass surgery, surgery for all types of cardiovascular heart diseases, pediatric heart surgery, adult and pediatric heart transplantation. Our medical professionals deliver advanced services using state-of-the-art facilities and diagnostic equipment.`,
    'general medicine': `Our general medicine specialists provide comprehensive care for adults, diagnosing and treating a wide range of conditions and coordinating care with other specialists. We offer personalized treatment plans for acute and chronic illnesses with a focus on preventive care and overall wellness.`,
    orthopedics: `Our orthopedic department specializes in the diagnosis, treatment, and rehabilitation of disorders of the musculoskeletal system. We provide advanced surgical and non-surgical treatments for joint problems, sports injuries, fractures, and spinal conditions using the latest minimally invasive techniques.`,
    pediatrics: `Our pediatric team provides compassionate care for infants, children, and adolescents. We focus on preventive health, growth and development monitoring, and treatment of childhood illnesses in a child-friendly environment with specialized pediatric equipment and facilities.`,
    anesthesia: `Our anesthesia department provides safe and effective pain management for surgical procedures, labor and delivery, and chronic pain conditions. Our team includes specialists in general anesthesia, regional anesthesia, and pain management with 24/7 availability for emergency cases.`,
    urology: `The urology department offers comprehensive care for disorders of the urinary tract and male reproductive system. Our services include minimally invasive surgeries, kidney stone treatment, prostate care, and advanced diagnostics using the latest urological technologies and techniques.`
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div style={styles.consultantsPage}>
      <div style={styles.banner}>
        <img src={consultantsBanner} alt="Our Consultants" style={styles.bannerImage} />
      </div>

      <div style={styles.departmentsGrid}>
        <h2 style={{ color: '#2a5885', marginBottom: '30px', fontSize: '32px' }}>OUR SPECIALISTS</h2>
        
        <div style={styles.container}>
          {/* Department Navigation - Single Line */}
          <div style={styles.departmentListContainer}>
            <div style={styles.departmentList}>
              {departmentsData.map(dept => (
                <div
                  key={dept.id}
                  onClick={() => scrollToSection(dept.name.toLowerCase())}
                  style={{
                    ...styles.departmentButton,
                    ':hover': styles.departmentButton[':hover']
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#2a5885';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#fff';
                    e.currentTarget.style.color = '#2a5885';
                  }}
                >
                  {dept.name}
                </div>
              ))}
            </div>
          </div>

          {/* Department Sections */}
          {departmentsData.map(dept => (
            <div key={dept.id} id={dept.name.toLowerCase()} style={styles.departmentSection}>
              <h2 style={styles.sectionTitle}>{dept.name} Specialists</h2>
              <p style={styles.departmentDescription}>
                {departmentDescriptions[dept.name.toLowerCase()]}
              </p>
              
              {dept.specialists.map(doctor => (
                <div key={doctor.id} style={styles.specialistCard}>
                  <div style={styles.doctorInfo}>
                    <h3 style={styles.doctorName}>{doctor.name}</h3>
                    <p style={styles.doctorDesignation}>{doctor.designation}</p>
                    <p style={styles.doctorAvailability}>{doctor.availability}</p>
                    <Link 
                      to={`/consultants/${dept.name.toLowerCase()}/${doctor.id}`}
                      style={styles.viewProfileBtn}
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConsultantsPage;