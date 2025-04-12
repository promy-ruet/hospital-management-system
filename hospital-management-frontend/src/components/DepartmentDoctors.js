import React from 'react';
import { Link, useParams } from 'react-router-dom';

const DepartmentDoctors = () => {
  const { department } = useParams();
  
  // Sample data - in a real app, this would come from an API
  const doctorsData = {
    'cardiology': [
        {
            id: 101,
            name: 'Dr. Jawwad Kazi',
            designation: 'Interventional Cardiologist',
            availability: 'Daily Consultation'
          },
          
    ],
    'General Medicine':[
        {
            id: 201,
            name: 'Dr. Sami Uz Zaman',
            designation: 'Senior Medicine Specialist',
            availability: 'Mon-Fri: 9AM-5PM'
          }
    ],
    'Orthopedics':[
        {
            id: 301,
            name: 'Dr. Akram',
            designation: 'Orthopedic Surgeon',
            availability: 'Mon-Sat: 10AM-4PM'
          }
    ],
    'Pediatrics':[
        {
            id: 401,
            name: 'Dr. Farhana Ahmed',
            designation: 'Pediatric Specialist',
            availability: 'Daily: 8AM-2PM'
          },
          

    ],
    'Anesthesia':[
        {
            id: 501,
            name: 'Dr. Nusrat Jahan',
            designation: 'Anesthesiologist',
            availability: 'On-call 24/7'
          }
    ],
    'Urology':[
        {
            id: 601,
            name: 'Dr. Kamal Hossain',
            designation: 'Urological Surgeon',
            availability: 'Sun-Thu: 11AM-7PM'
          },
          
    ]
  };

  const departmentName = department.replace('-', ' ').toUpperCase();
  const doctors = doctorsData[department] || [];

  return (
    <div className="department-doctors">
      <h1>{departmentName}</h1>
      <p className="tagline">Your Health Matters...</p>
      
      <div className="doctors-grid">
        {doctors.map(doctor => (
          <div key={doctor.id} className="doctor-card">
            <img src={`/images/${doctor.image}`} alt={doctor.name} />
            <h3>{doctor.name}</h3>
            <p className="designation">{doctor.designation}</p>
            <p className="availability">{doctor.availability}</p>
            <Link to={`/consultants/${department}/${doctor.id}`} className="view-profile-btn">
              View Profile
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentDoctors;