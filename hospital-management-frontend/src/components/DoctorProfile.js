import React from 'react';
import { useParams } from 'react-router-dom';

const DoctorProfile = () => {
  const { department, doctorId } = useParams();
  
  // Complete doctors database
  const doctors = {
    // Cardiology
    101: {
      name: 'Dr. Jawwad Kazi',
      designation: 'Interventional Cardiologist',
      specialty: 'General Medicine | Cardiology',
      subSpecialty: 'Intensive Care Medicine',
      qualifications: [
        'M.B.B.S from Bangalore',
        'M.D in General Medicine from Government Vijaynagar Institute of Medical Sciences, Bellary',
        'D.M in Cardiology from Sri Jayadeva Institute of Cardiology, Bangalore'
      ],
      awards: 'Merit in Government Vijaynagar Institute of Medical Sciences',
      languages: 'English | Hindi | Bangla',
      skills: [
        'Thorough knowledge of ECG',
        'Sound ECHO assessment',
        'Expert in TMT analysis',
        'Dobutamine Stress testing',
        'CT Coronary Angiogram specialist',
        'Performed 1000+ angiograms (radial and femoral)',
        '500+ Coronary Angioplasties',
        'ASD/VSD/PDA device closures',
        'Temporary Pacemaker implantation',
        'Pericardiocentesis specialist',
        'Transesophageal Echocardiography (TEE)'
      ],
      services: [
        'Cardioversion',
        'Heart Failure Management',
        'Hypertension Treatment',
        'Acute MI Treatment',
        'Thrombolysis',
        'Peripheral Arterial Disease Management',
        'Pulmonary Edema Management',
        'Vascular Surgery',
        'Congenital Heart Defect Repair',
        'Preventive Cardiology'
      ],
      description: `Specializes in complex coronary interventions with 15+ years of experience. 
      Expert in adult and pediatric cardiac care with extensive experience in coronary artery bypass surgery, 
      valve repairs, and congenital heart defect corrections. Committed to providing comprehensive 
      cardiac care using the latest evidence-based treatments.`,
      experience: '18 years',
      education: 'DM Cardiology, MD Medicine, MBBS',
      availability: 'Monday to Friday: 9AM - 5PM',
      contact: 'clinic@example.com | +880 1234 567890'
    },
    102: {
      name: 'Dr. Aijaz Baig',
      designation: 'Consultant Cardiologist',
      specialty: 'Cardiology',
      subSpecialty: 'Interventional Cardiology',
      qualifications: [
        'M.B.B.S from Dhaka Medical College',
        'M.D in Cardiology from National Institute of Cardiovascular Diseases',
        'Fellowship in Interventional Cardiology from Apollo Hospitals, India'
      ],
      awards: 'Best Young Cardiologist Award 2015',
      languages: 'English | Bengali | Hindi',
      skills: [
        'Complex coronary interventions',
        'Primary PCI for STEMI',
        'IVUS and OCT guided interventions',
        'Rotablation expert',
        'Chronic total occlusion specialist',
        'Structural heart interventions',
        'TAVI procedures',
        'Cardiac resynchronization therapy'
      ],
      services: [
        'Emergency Cardiac Care',
        'Coronary Angiography',
        'Angioplasty & Stenting',
        'Pacemaker Implantation',
        'Cardiac Rehabilitation',
        'Lipid Management',
        'Arrhythmia Treatment',
        'Cardiac Risk Assessment'
      ],
      description: `Interventional cardiologist with special interest in complex coronary cases and 
      primary PCI. Trained in latest techniques including IVUS guided interventions and rotablation. 
      Focuses on minimally invasive procedures for faster patient recovery.`,
      experience: '12 years',
      education: 'MD Cardiology, MBBS',
      availability: 'Sunday to Thursday: 10AM - 7PM',
      contact: 'dr.aijaz@example.com | +880 1711 223344'
    },

    // General Medicine
    201: {
      name: 'Dr. Sami Uz Zaman',
      designation: 'Senior Medicine Specialist',
      specialty: 'General Medicine',
      subSpecialty: 'Internal Medicine',
      qualifications: [
        'M.B.B.S from Dhaka University',
        'M.D in Internal Medicine from BSMMU',
        'Fellowship in Diabetes Management'
      ],
      awards: 'Gold Medalist in MD Examination',
      languages: 'English | Bengali | Hindi',
      skills: [
        'Chronic disease management',
        'Diabetes care',
        'Hypertension management',
        'Thyroid disorders',
        'Infectious diseases',
        'Geriatric care',
        'Preventive medicine',
        'Nutrition counseling'
      ],
      services: [
        'General Health Checkup',
        'Diabetes Management',
        'Hypertension Treatment',
        'Thyroid Disorder Management',
        'Fever & Infection Treatment',
        'Geriatric Care',
        'Travel Medicine',
        'Health Screening'
      ],
      description: `Senior physician with extensive experience in managing complex medical cases. 
      Special interest in diabetes and metabolic disorders. Provides comprehensive care with focus 
      on prevention and long-term health maintenance.`,
      experience: '20 years',
      education: 'MD Medicine, MBBS',
      availability: 'Monday to Friday: 9AM - 5PM',
      contact: 'dr.sami@example.com | +880 1555 678901'
    },

    // Orthopedics
    301: {
      name: 'Dr. Akram',
      designation: 'Orthopedic Surgeon',
      specialty: 'Orthopedics',
      subSpecialty: 'Joint Replacement Surgery',
      qualifications: [
        'M.B.B.S from Chittagong Medical College',
        'M.S in Orthopedics from Dhaka Medical College',
        'Fellowship in Joint Replacement (India)'
      ],
      awards: 'Best Paper Award at SAARC Ortho Conference 2018',
      languages: 'English | Bengali | Hindi',
      skills: [
        'Total knee replacement',
        'Hip replacement surgery',
        'Arthroscopic surgery',
        'Sports injury management',
        'Fracture management',
        'Spinal surgeries',
        'Pediatric orthopedics',
        'Minimally invasive techniques'
      ],
      services: [
        'Joint Replacement Surgery',
        'Arthroscopic Surgery',
        'Fracture Treatment',
        'Sports Injury Management',
        'Spine Care',
        'Pediatric Orthopedics',
        'Orthopedic Trauma Care',
        'Rehabilitation'
      ],
      description: `Specialist in joint replacement and arthroscopic surgeries with 15 years of 
      surgical experience. Performs 200+ joint replacements annually using latest techniques 
      for faster recovery and better outcomes.`,
      experience: '15 years',
      education: 'MS Orthopedics, MBBS',
      availability: 'Monday to Saturday: 10AM - 4PM',
      contact: 'dr.akram@example.com | +880 1811 334455'
    },

    // Pediatrics
    401: {
      name: 'Dr. Farhana Ahmed',
      designation: 'Pediatric Specialist',
      specialty: 'Pediatrics',
      subSpecialty: 'Neonatology',
      qualifications: [
        'M.B.B.S from Shaheed Suhrawardy Medical College',
        'D.C.H from Bangladesh Institute of Child Health',
        'Fellowship in Neonatology (Singapore)'
      ],
      awards: 'Best Pediatrician Award 2019',
      languages: 'English | Bengali | Hindi',
      skills: [
        'Neonatal intensive care',
        'Childhood vaccinations',
        'Growth monitoring',
        'Developmental assessment',
        'Asthma management',
        'Nutrition counseling',
        'Infectious disease treatment',
        'Adolescent health'
      ],
      services: [
        'Well Baby Checkups',
        'Vaccination',
        'Neonatal Care',
        'Childhood Illness Treatment',
        'Growth Monitoring',
        'Nutrition Guidance',
        'Developmental Assessment',
        'Adolescent Health'
      ],
      description: `Specialized in newborn and childhood care with gentle approach to pediatric medicine. 
      Expert in neonatal intensive care and childhood development. Focuses on preventive care and 
      early intervention for optimal child health.`,
      experience: '14 years',
      education: 'DCH, FCPS (Pediatrics), MBBS',
      availability: 'Daily: 8AM - 2PM',
      contact: 'dr.farhana@example.com | +880 1911 445566'
    },
    402: {
      name: 'Dr. Rahman Ali',
      designation: 'Neonatal Specialist',
      specialty: 'Pediatrics',
      subSpecialty: 'Neonatal Intensive Care',
      qualifications: [
        'M.B.B.S from Rajshahi Medical College',
        'M.D in Pediatrics from BSMMU',
        'Fellowship in Neonatology (Thailand)'
      ],
      awards: 'Neonatal Excellence Award 2020',
      languages: 'English | Bengali | Arabic',
      skills: [
        'Preterm baby care',
        'Neonatal resuscitation',
        'NICU management',
        'High-risk newborn care',
        'Neonatal ventilation',
        'Developmental follow-up',
        'Breastfeeding support',
        'Congenital anomaly management'
      ],
      services: [
        'NICU Care',
        'Preterm Baby Care',
        'High-risk Newborn Care',
        'Neonatal Screening',
        'Developmental Follow-up',
        'Breastfeeding Support',
        'Neonatal Vaccination',
        'Parent Education'
      ],
      description: `Neonatal specialist with expertise in managing preterm and high-risk newborns. 
      Leads our Level III NICU with state-of-the-art equipment. Passionate about improving 
      survival and outcomes for critically ill newborns.`,
      experience: '10 years',
      education: 'MD Pediatrics, MBBS',
      availability: 'Monday to Thursday: 10AM - 4PM',
      contact: 'dr.rahman@example.com | +880 1311 556677'
    },

    // Anesthesia
    501: {
      name: 'Dr. Nusrat Jahan',
      designation: 'Anesthesiologist',
      specialty: 'Anesthesia',
      subSpecialty: 'Pain Management',
      qualifications: [
        'M.B.B.S from Mymensingh Medical College',
        'DA from Bangladesh College of Physicians & Surgeons',
        'Fellowship in Pain Management (Malaysia)'
      ],
      awards: 'Best Anesthetist Award 2021',
      languages: 'English | Bengali | Hindi',
      skills: [
        'General anesthesia',
        'Regional anesthesia',
        'Pain management',
        'Critical care',
        'Epidural anesthesia',
        'Pediatric anesthesia',
        'Obstetric anesthesia',
        'Ultrasound guided blocks'
      ],
      services: [
        'Surgical Anesthesia',
        'Pain Management',
        'Epidural Anesthesia',
        'Critical Care',
        'Chronic Pain Treatment',
        'Labor Analgesia',
        'Palliative Care',
        'Post-op Pain Control'
      ],
      description: `Expert anesthesiologist providing safe anesthesia for all types of surgeries. 
      Special interest in regional anesthesia and pain management. Committed to pain-free surgical 
      experience with minimal side effects.`,
      experience: '12 years',
      education: 'DA, FCPS (Anesthesia), MBBS',
      availability: 'On-call 24/7',
      contact: 'dr.nusrat@example.com | +880 1611 667788'
    },

    // Urology
    601: {
      name: 'Dr. Kamal Hossain',
      designation: 'Urological Surgeon',
      specialty: 'Urology',
      subSpecialty: 'Endourology',
      qualifications: [
        'M.B.B.S from Sher-e-Bangla Medical College',
        'M.S in Urology from Bangabandhu Sheikh Mujib Medical University',
        'Fellowship in Endourology (India)'
      ],
      awards: 'Young Urologist Award 2017',
      languages: 'English | Bengali | Hindi',
      skills: [
        'Laser prostate surgery',
        'PCNL for kidney stones',
        'URSL for ureteric stones',
        'Laparoscopic urology',
        'Uro-oncology',
        'Andrology',
        'Female urology',
        'Reconstructive urology'
      ],
      services: [
        'Kidney Stone Treatment',
        'Prostate Surgery',
        'Bladder Surgery',
        'Uro-oncology',
        'Male Infertility Treatment',
        'Female Urology',
        'Pediatric Urology',
        'Urinary Incontinence Treatment'
      ],
      description: `Specialist in minimally invasive urological procedures including laser surgeries 
      and stone management. Performs 300+ endoscopic urological procedures annually with excellent 
      outcomes and quick recovery.`,
      experience: '13 years',
      education: 'MS Urology, MBBS',
      availability: 'Sunday to Thursday: 11AM - 7PM',
      contact: 'dr.kamal@example.com | +880 1711 778899'
    },
    602: {
      name: 'Dr. Sabrina Chowdhury',
      designation: 'Consultant Urologist',
      specialty: 'Urology',
      subSpecialty: 'Urogynecology',
      qualifications: [
        'M.B.B.S from Sir Salimullah Medical College',
        'M.S in Urology from Bangabandhu Sheikh Mujib Medical University',
        'Fellowship in Urogynecology (USA)'
      ],
      awards: 'Women in Urology Award 2020',
      languages: 'English | Bengali | Hindi',
      skills: [
        'Female urology',
        'Neurourology',
        'Reconstructive urology',
        'Laparoscopic urology',
        'Urinary incontinence treatment',
        'Pelvic organ prolapse',
        'Urodynamics',
        'Minimally invasive procedures'
      ],
      services: [
        'Female Urological Disorders',
        'Urinary Incontinence Treatment',
        'Pelvic Organ Prolapse',
        'Neurogenic Bladder',
        'Reconstructive Urology',
        'Urodynamic Studies',
        'Minimally Invasive Urology',
        'Laparoscopic Urology'
      ],
      description: `Specialized in female urological disorders and reconstructive urology. Provides 
      compassionate care for sensitive urological conditions with focus on minimally invasive 
      treatments for better quality of life.`,
      experience: '9 years',
      education: 'MS Urology, MBBS',
      availability: 'Monday, Wednesday, Friday: 9AM - 3PM',
      contact: 'dr.sabrina@example.com | +880 1911 889900'
    }
  };

  const doctor = doctors[doctorId];

  if (!doctor) {
    return <div style={{ 
      textAlign: 'center', 
      padding: '50px', 
      fontSize: '24px',
      color: '#d32f2f'
    }}>Doctor profile not found</div>;
  }

  // Styles
  const styles = {
    doctorProfile: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      color: '#333',
      lineHeight: '1.6'
    },
    doctorHeader: {
      backgroundColor: '#005b96',
      color: 'white',
      padding: '30px',
      borderRadius: '8px',
      marginBottom: '30px',
      textAlign: 'center',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    },
    doctorName: {
      fontSize: '2.2rem',
      marginBottom: '10px',
      fontWeight: '600'
    },
    doctorDesignation: {
      fontSize: '1.5rem',
      marginBottom: '15px',
      fontWeight: 'normal',
      opacity: '0.9'
    },
    specialty: {
      fontSize: '1.1rem',
      margin: '10px 0',
      fontStyle: 'italic',
      opacity: '0.9'
    },
    subSpecialty: {
      fontSize: '1rem',
      margin: '5px 0',
      opacity: '0.8'
    },
    doctorDetails: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '25px',
      marginTop: '30px'
    },
    section: {
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      padding: '25px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
      border: '1px solid #e0e0e0'
    },
    sectionTitle: {
      color: '#005b96',
      borderBottom: '2px solid #005b96',
      paddingBottom: '10px',
      marginBottom: '20px',
      fontSize: '1.3rem',
      fontWeight: '600'
    },
    listItem: {
      marginBottom: '10px',
      lineHeight: '1.6',
      position: 'relative',
      paddingLeft: '20px'
    },
    listItemBullet: {
      position: 'absolute',
      left: '0',
      color: '#005b96'
    },
    keyInfo: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '20px',
      margin: '25px 0'
    },
    infoItem: {
      padding: '20px',
      backgroundColor: '#f0f7ff',
      borderRadius: '8px',
      textAlign: 'center',
      boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
    },
    infoLabel: {
      fontWeight: '600',
      color: '#005b96',
      marginBottom: '8px',
      fontSize: '0.9rem'
    },
    infoValue: {
      fontSize: '1.1rem',
      fontWeight: '500'
    },
    contactInfo: {
      marginTop: '30px',
      textAlign: 'center',
      fontStyle: 'italic',
      color: '#555'
    }
  };

  return (
    <div style={styles.doctorProfile}>
      <div style={styles.doctorHeader}>
        <h1 style={styles.doctorName}>{doctor.name}</h1>
        <h2 style={styles.doctorDesignation}>{doctor.designation}</h2>
        <p style={styles.specialty}>{doctor.specialty}</p>
        {doctor.subSpecialty && <p style={styles.subSpecialty}>{doctor.subSpecialty}</p>}
      </div>
      
      {/* Key Information */}
      <div style={styles.keyInfo}>
        <div style={styles.infoItem}>
          <div style={styles.infoLabel}>Experience</div>
          <div style={styles.infoValue}>{doctor.experience || 'Not specified'}</div>
        </div>
        <div style={styles.infoItem}>
          <div style={styles.infoLabel}>Education</div>
          <div style={styles.infoValue}>{doctor.education || 'Not specified'}</div>
        </div>
        <div style={styles.infoItem}>
          <div style={styles.infoLabel}>Availability</div>
          <div style={styles.infoValue}>{doctor.availability || 'Not specified'}</div>
        </div>
      </div>

      <div style={styles.doctorDetails}>
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Professional Summary</h3>
          <p>{doctor.description}</p>
        </div>
        
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Education & Qualifications</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {doctor.qualifications.map((qual, index) => (
              <li key={index} style={styles.listItem}>
                <span style={styles.listItemBullet}>•</span> {qual}
              </li>
            ))}
          </ul>
        </div>
        
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Awards & Recognition</h3>
          <p>{doctor.awards || 'No awards information available'}</p>
        </div>
        
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Languages Spoken</h3>
          <p>{doctor.languages}</p>
        </div>
        
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Clinical Skills & Expertise</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {doctor.skills.map((skill, index) => (
              <li key={index} style={styles.listItem}>
                <span style={styles.listItemBullet}>•</span> {skill}
              </li>
            ))}
          </ul>
        </div>
        
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Services & Treatments</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {doctor.services.map((service, index) => (
              <li key={index} style={styles.listItem}>
                <span style={styles.listItemBullet}>•</span> {service}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {doctor.contact && (
        <div style={styles.contactInfo}>
          <p>For appointments: {doctor.contact}</p>
        </div>
      )}
    </div>
  );
};

export default DoctorProfile;