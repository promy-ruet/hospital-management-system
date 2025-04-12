import React, { useState } from 'react';
import { Link, Route, Switch, useRouteMatch, useHistory } from 'react-router-dom';

// Department Details Component remains the same
const DepartmentDetail = ({ department }) => {
  return (
    <div style={{ padding: '0', width: '100vw', margin: '0 auto' }}>
      {/* Dynamic Banner Image */}
      <img 
        src={process.env.PUBLIC_URL + department.bannerImage} 
        alt={department.title.toLowerCase()}
        style={{ 
          width: '100vw',
          height: '400px', 
          objectFit: 'cover', 
          borderRadius: '0'
        }}
      />
      
      {/* Department Description and Image in Flex Layout */}
      <div style={{ 
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '20px',
        margin: '30px 20px'
      }}>
        {/* Department Full Description */}
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '30px', 
          borderRadius: '10px',
          flex: '1',
          minWidth: '300px'
        }}>
          <h2 style={{ color: '#0d6efd', marginBottom: '15px' }}>{department.title}</h2>
          <p style={{
            fontSize: '16px',
            color: '#555',
            lineHeight: '1.8',
            textAlign: 'justify'
          }}>
            {department.fullDescription}
          </p>
        </div>

        {/* Dynamic Image next to description */}
        <div style={{ 
          flex: '1',
          minWidth: '300px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center'
        }}>
          <img 
            src={process.env.PUBLIC_URL + department.descriptionImage} 
            alt={department.title.toLowerCase()}
            style={{ 
              width: '100%',
              height: '400px', 
              objectFit: 'contain', 
              borderRadius: '0px'
            }}
          />
       

        </div>

      
      </div>
      
      {/* Equipment and Surgeries Section */}
      <div style={{ 
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '40px',
        margin: '30px 20px'
      }}>
        {/* Equipment List */}
        {department.equipment && department.equipment.length > 0 && (
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h3 style={{ color: '#0d6efd', marginBottom: '20px' }}>Our equipment list includes:</h3>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {department.equipment.map((item, index) => (
                <li key={index} style={{ 
                  marginBottom: '15px', 
                  display: 'flex', 
                  alignItems: 'center' 
                }}>
                  <span style={{ 
                    color: 'white', 
                    backgroundColor: '#16a085', 
                    borderRadius: '50%', 
                    width: '24px', 
                    height: '24px', 
                    display: 'inline-flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    marginRight: '10px'
                  }}>
                    ➔
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Services/Surgeries List */}
        {department.services && department.services.length > 0 && (
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h3 style={{ color: '#0d6efd', marginBottom: '20px' }}>
              {department.title === 'Cardiology' 
                ? "Our services include:" 
                : "Our services include:"}
            </h3>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {department.services.map((item, index) => (
                <li key={index} style={{ 
                  marginBottom: '15px', 
                  display: 'flex', 
                  alignItems: 'center' 
                }}>
                  <span style={{ 
                    color: 'white', 
                    backgroundColor: '#16a085', 
                    borderRadius: '50%', 
                    width: '24px', 
                    height: '24px', 
                    display: 'inline-flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    marginRight: '10px'
                  }}>
                    ➔
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

// Updated Departments Page Component with all departments
const DepartmentsPage = () => {
  const history = useHistory();

  const allDepartments = [
    {
      id: 1,
      title: "Cardiology",
      description: "Meditrust hospital has a full fledged cardiology department which has advanced facilities for providing various types of cardio services for our patients.",
      fullDescription: "Meditrust hospital has a full fledged cardiology department which has advanced facilities for providing various types of cardio services for our patients. Our hospital has the following specialized infrastructure for providing cardiac services.\n\nCardiac Operation Theatre- We are equipped with an advanced cardiac operation theatre which is capable of performing all types of cardiac services. Meditrust Hospitals has a team of dedicated cardiac surgeons who are available to perform surgeries 24 hours a day and deal with emergency cases at very short notice. Our surgical theatre is equipped with the following advanced equipment which is used for performing surgeries within the hospital.",
      icon: "❤️",
      bannerImage: "/cardd.jpg",
    descriptionImage: "/cardio.jpg",
      equipment: [
        "BOC Make Boyle Apparatus",
        "Hanaolox lighting system",
        "Defibrillator with pedals",
        "Intra Aortic Balloon",
        "Intra Aortic Balloon Pump(IABP) Machine"
        
      ],
      services: [
        "All types of Open and Closed Cardiac Surgeries",
        "Coronary Artery Bypass Graft Surgeries(CABG)",
        "Mitral Valve Replacement(MVR)",
        "Aortic Valve Replacement",
        "Atrial Septal Defects"
      ],
    },
    {
      id: 2,
      title: "General Medicine",
      description: "Meditrust hospital has a highly specialized department of general medicine which is equipped to deal with any type of medical injuries or emergency.",
      fullDescription: "Meditrust hospital has a highly specialized department of general medicine which is equipped to deal with any type of medical injuries or emergency.Our General Medicine department provides comprehensive care for adults with a wide range of medical conditions. Our team of experienced physicians and specialists are trained to diagnose and treat complex medical problems, with a focus on preventive care and health maintenance.",
      icon: "🩺",
      bannerImage: "/medi.jpg",
    descriptionImage: "/medii.jpg", 
      equipment: [
        "Electrocardiogram (ECG) Machine",
        "Pulse Oximeter",
        "Autoclave Sterilizer",
        "Oxygen Concentrator",
        "Otoscope and Ophthalmoscope"
        
      ],
      services: [
        "Primary care for adults",
        "Preventive health screenings",
        "Chronic disease management",
        "Acute illness treatment",
        "Health education and counseling"
      ]
    },
    {
      id: 3,
      title: "Orthopedics",
      description: "Our hospital's orthopaedic department has the highest standards of orthopaedic care and is renowned for its expertise and resources.",
      fullDescription: "Our hospital's orthopaedic department has the highest standards of orthopaedic care and is renowned for its expertise and resources.The Orthopedics department at Meditrust Hospital specializes in the diagnosis, treatment, and rehabilitation of disorders of the musculoskeletal system. Our team of orthopedic surgeons and specialists provide comprehensive care for bone, joint, ligament, tendon, muscle, and nerve conditions.",
      icon: "🦴",
      bannerImage: "/Ortho.jpg",
    descriptionImage: "/orthoo.jpg",
      equipment: [
        "Digital X-ray systems",
        "Arthroscopy equipment",
        "C-arm fluoroscopy",
        "Computer-assisted surgical systems",
        "Physical therapy equipment"
      ],
      services: [
        "Joint replacement surgery",
        "Arthroscopic surgery",
        "Spinal surgery",
        "Fracture care",
        "Sports medicine"
      ]
    },
    {
      id: 4,
      title: "Paediatrics",
      description: "Our Hospital offers one of the finest paediatric treatment services for children of different ages. We have highly specialized paediatric services.",
      fullDescription: "Our Hospital offers one of the finest paediatric treatment services for children of different ages. We have highly specialized paediatric services.Our Pediatrics department is dedicated to providing comprehensive medical care for infants, children, and adolescents. Our team of pediatricians and specialists are trained to address the unique healthcare needs of children in a child-friendly environment.",
      icon: "👶",
      bannerImage: "/padi.jpg",
    descriptionImage: "/paedi.jpg",
      equipment: [
        "Infant Radiant Warmer",
        "Neonatal Ventilator",
        "Neonatal Resuscitation Unit",
        "Paediatric Pulse Oximeter",
        "Paediatric Stethoscope"
      ],
      services: [
        "Well-child visits and immunizations",
        "Acute illness care",
        "Chronic condition management",
        "Developmental assessments",
        "Adolescent medicine"
      ]
    },
    {
      id: 5,
      title: "Anaesthesia",
      description: "Meditrust hospital has a full fledged Anesthesiology and critical care department which has been developed to help in the rapid recovery of patients.",
      fullDescription: "Meditrust hospital has a full fledged Anesthesiology and critical care department which has been developed to help in the rapid recovery of patients.Our Anesthesiology department provides perioperative care, developing anesthetic plans tailored to each patient's needs. Our anesthesiologists work closely with surgeons and other specialists to ensure patient safety and comfort during procedures.",
      icon: "💉",
      bannerImage: "/an.jpg",
      descriptionImage: "/ana.jpg",
      equipment: [
        "Anaesthesia Machine ",
        "Ventilator (Anaesthesia Workstation)",
        "Laryngeal Mask Airway ",
        "Anaesthesia Gas Monitor",
        "Pulse Oximeter"
        
      ],
      services: [
        "General anesthesia",
        "Regional anesthesia",
        "Pain management",
        "Critical care services",
        "Preoperative evaluation"
      ]
    },
    {
      id: 6,
      title: "Urology",
      description: "Meditrust hospital has one of the best facilities for urology and kidney transplantation. We are equipped with state of the art pre and post-operative care.",
      fullDescription: "Meditrust hospital has one of the best facilities for urology and kidney transplantation. We are equipped with state of the art pre and post-operative care.The Urology department at Meditrust Hospital provides comprehensive care for disorders of the urinary tract and male reproductive system. Our team of urologists specializes in both medical and surgical treatments for a wide range of urological conditions.",
      icon: "🚽",
      bannerImage: "/uroo.jpg",
      descriptionImage: "/urolo.jpg",
      equipment: [
        "Digital cystoscopy systems",
        "Lithotripsy machines",
        "Laparoscopic equipment",
        "Urodynamic testing systems",
        "Da Vinci surgical system"
      ],
      services: [
        "Kidney stone treatment",
        "Prostate care",
        "Urinary incontinence treatment",
        "Urologic oncology",
        "Kidney transplantation"
      ]
    }
  ];

  return (
    <div style={{ padding: '50px 0', backgroundColor: '#f8f9fa' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '32px', color: '#333', fontWeight: '600' }}>
          Our Departments
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '30px' }}>
        {allDepartments.map(dept => (
  <div 
    key={dept.id} 
    style={{ 
      backgroundColor: 'white', 
      padding: '30px', 
      borderRadius: '8px',
      transition: 'all 0.3s ease',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: '#f0f8ff',
        transform: 'translateY(-5px)',
        boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
      }
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.backgroundColor = '#f0f8ff';
      e.currentTarget.style.transform = 'translateY(-5px)';
      e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.backgroundColor = 'white';
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }}
  >
    <div style={{ fontSize: '36px', marginBottom: '20px', color: '#2c9687', textAlign: 'center' }}>
      {dept.icon}
    </div>
    
    <h3 style={{ fontSize: '22px', marginBottom: '15px', color: '#333', fontWeight: '600', textAlign: 'left' }}>
      {dept.title}
    </h3>

    <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.6', marginBottom: '20px', textAlign: 'justify' }}>
      {dept.description}
    </p>

    <button 
      onClick={() => history.push(`/departments/${dept.id}`)}
      style={{ 
        background: 'none', 
        color: '#16a085', 
        fontWeight: 'bold', 
        fontSize: '14px', 
        border: 'none', 
        cursor: 'pointer',
        textDecoration: 'none' 
      }}
    >
      READ MORE <span style={{ marginLeft: '5px' }}>+</span>
    </button>
  </div>
))}
        </div>
      </div>
    </div>
  );
};



// Departments Dropdown Component remains the same
const DepartmentsDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory();
  
    const departments = [
      { id: 1, name: "Cardiology" },
      { id: 2, name: "General Medicine" },
      { id: 3, name: "Orthopedics" },
      { id: 4, name: "Paediatrics" },
      { id: 5, name: "Anaesthesia" },
      { id: 6, name: "Urology" },
    ];
  
    const handleNavigation = (deptId) => {
      history.push(`/departments/${deptId}`);
      setIsOpen(false);
    };
  
    return (
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <button 
          style={{
            background: "none",
            border: "none",
            padding: "10px 15px",
            fontSize: "16px",
            cursor: "pointer",
            color: "#333",
            display: "flex",
            alignItems: "center"
          }}
          onClick={(e) => {
            e.preventDefault(); 
            setIsOpen(!isOpen);
          }}
        >
          DEPARTMENTS <span style={{ marginLeft: "5px" }}>▼</span>
        </button>
        {isOpen && (
          <div style={{
            position: 'absolute',
            backgroundColor: '#fff',
            minWidth: '200px',
            boxShadow: '0px 8px 16px rgba(0,0,0,0.2)',
            zIndex: 1,
            borderRadius: '5px',
            padding: '10px 0'
          }}>
            {departments.map(dept => (
              <button
                key={dept.id}
                onClick={() => handleNavigation(dept.id)}
                style={{
                  color: '#333',
                  padding: '12px 16px',
                  textDecoration: 'none',
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#f1f1f1'}
                onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                {dept.name}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

// Main Department Component that handles routing
const DepartmentsRouter = () => {
  const { path } = useRouteMatch();
  
  const allDepartments = [
    {
      id: 1,
      title: "Cardiology",
      description: "Meditrust hospital has a full fledged cardiology department which has advanced facilities for providing various types of cardio services for our patients.",
      fullDescription: "Meditrust hospital has a full fledged cardiology department which has advanced facilities for providing various types of cardio services for our patients. Our hospital has the following specialized infrastructure for providing cardiac services.\n\nCardiac Operation Theatre- We are equipped with an advanced cardiac operation theatre which is capable of performing all types of cardiac services. Meditrust Hospitals has a team of dedicated cardiac surgeons who are available to perform surgeries 24 hours a day and deal with emergency cases at very short notice. Our surgical theatre is equipped with the following advanced equipment which is used for performing surgeries within the hospital.",
      icon: "❤️",
      bannerImage: "/cardd.jpg",
    descriptionImage: "/cardio.jpg",
      equipment: [
        "BOC Make Boyle Apparatus",
        "Hanaolox lighting system",
        "Defibrillator with pedals",
        "Intra Aortic Balloon",
        "Intra Aortic Balloon Pump(IABP) Machine"
        
      ],
      services: [
        "All types of Open and Closed Cardiac Surgeries",
        "Coronary Artery Bypass Graft Surgeries(CABG)",
        "Mitral Valve Replacement(MVR)",
        "Aortic Valve Replacement",
        "Atrial Septal Defects"
      ],
    },
    {
      id: 2,
      title: "General Medicine",
      description: "Meditrust hospital has a highly specialized department of general medicine which is equipped to deal with any type of medical injuries or emergency.",
      fullDescription: "Meditrust hospital has a highly specialized department of general medicine which is equipped to deal with any type of medical injuries or emergency.Our General Medicine department provides comprehensive care for adults with a wide range of medical conditions. Our team of experienced physicians and specialists are trained to diagnose and treat complex medical problems, with a focus on preventive care and health maintenance.",
      icon: "🩺",
      bannerImage: "/medi.jpg",
    descriptionImage: "/medii.jpg",

      equipment: [
        "Electrocardiogram (ECG) Machine",
        "Pulse Oximeter",
        "Autoclave Sterilizer",
        "Oxygen Concentrator",
        "Otoscope and Ophthalmoscope"
        
      ],
      services: [
        "Primary care for adults",
        "Preventive health screenings",
        "Chronic disease management",
        "Acute illness treatment",
        "Health education and counseling"
      ]
    },
    {
      id: 3,
      title: "Orthopedics",
      description: "Our hospital's orthopaedic department has the highest standards of orthopaedic care and is renowned for its expertise and resources.",
      fullDescription: "Our hospital's orthopaedic department has the highest standards of orthopaedic care and is renowned for its expertise and resources.The Orthopedics department at Meditrust Hospital specializes in the diagnosis, treatment, and rehabilitation of disorders of the musculoskeletal system. Our team of orthopedic surgeons and specialists provide comprehensive care for bone, joint, ligament, tendon, muscle, and nerve conditions.",
      icon: "🦴",
      bannerImage: "/Ortho.jpg",
    descriptionImage: "/orthoo.jpg",
      equipment: [
        "Digital X-ray systems",
        "Arthroscopy equipment",
        "C-arm fluoroscopy",
        "Computer-assisted surgical systems",
        "Physical therapy equipment"
      ],
      services: [
        "Joint replacement surgery",
        "Arthroscopic surgery",
        "Spinal surgery",
        "Fracture care",
        "Sports medicine"
      ]
    },
    {
      id: 4,
      title: "Paediatrics",
      description: "Our Hospital offers one of the finest paediatric treatment services for children of different ages. We have highly specialized paediatric services.",
      fullDescription: "Our Hospital offers one of the finest paediatric treatment services for children of different ages. We have highly specialized paediatric services.Our Pediatrics department is dedicated to providing comprehensive medical care for infants, children, and adolescents. Our team of pediatricians and specialists are trained to address the unique healthcare needs of children in a child-friendly environment.",
      icon: "👶",
      bannerImage: "/padi.jpg",
    descriptionImage: "/paedi.jpg",
      equipment: [
        "Infant Radiant Warmer",
        "Neonatal Ventilator",
        "Neonatal Resuscitation Unit",
        "Paediatric Pulse Oximeter",
        "Paediatric Stethoscope"
      ],
      services: [
        "Well-child visits and immunizations",
        "Acute illness care",
        "Chronic condition management",
        "Developmental assessments",
        "Adolescent medicine"
      ]
    },
    {
      id: 5,
      title: "Anaesthesia",
      description: "Meditrust hospital has a full fledged Anesthesiology and critical care department which has been developed to help in the rapid recovery of patients.",
      fullDescription: "Meditrust hospital has a full fledged Anesthesiology and critical care department which has been developed to help in the rapid recovery of patients.Our Anesthesiology department provides perioperative care, developing anesthetic plans tailored to each patient's needs. Our anesthesiologists work closely with surgeons and other specialists to ensure patient safety and comfort during procedures.",
      icon: "💉",
      bannerImage: "/an.jpg",
      descriptionImage: "/ana.jpg",
      equipment: [
        "Anaesthesia Machine ",
        "Ventilator (Anaesthesia Workstation)",
        "Laryngeal Mask Airway ",
        "Anaesthesia Gas Monitor",
        "Pulse Oximeter"
        
      ],
      services: [
        "General anesthesia",
        "Regional anesthesia",
        "Pain management",
        "Critical care services",
        "Preoperative evaluation"
      ]
    },
    {
      id: 6,
      title: "Urology",
      description: "Meditrust hospital has one of the best facilities for urology and kidney transplantation. We are equipped with state of the art pre and post-operative care.",
      fullDescription: "Meditrust hospital has one of the best facilities for urology and kidney transplantation. We are equipped with state of the art pre and post-operative care.The Urology department at Meditrust Hospital provides comprehensive care for disorders of the urinary tract and male reproductive system. Our team of urologists specializes in both medical and surgical treatments for a wide range of urological conditions.",
      icon: "🚽",
      bannerImage: "/uroo.jpg",
      descriptionImage: "/urolo.jpg",
      equipment: [
        "Digital cystoscopy systems",
        "Lithotripsy machines",
        "Laparoscopic equipment",
        "Urodynamic testing systems",
        "Da Vinci surgical system"
      ],
      services: [
        "Kidney stone treatment",
        "Prostate care",
        "Urinary incontinence treatment",
        "Urologic oncology",
        "Kidney transplantation"
      ]
    }
  ];
  
  return (
    <Switch>
      <Route exact path={path}>
        <DepartmentsPage />
      </Route>
      <Route path={`${path}/:departmentId`}>
        {({ match }) => {
          const departmentId = parseInt(match.params.departmentId);
          const department = allDepartments.find(dept => dept.id === departmentId);
          return department ? (
            <DepartmentDetail department={department} />
          ) : (
            <div style={{ textAlign: 'center', padding: '50px' }}>
              <h2>Department not found</h2>
              <Link to="/departments" style={{ 
                display: 'inline-block',
                marginTop: '20px',
                padding: '10px 20px',
                backgroundColor: '#16a085',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '5px'
              }}>
                Back to Departments
              </Link>
            </div>
          );
        }}
      </Route>
    </Switch>
  );
};



// Export the components
export { DepartmentsRouter, DepartmentsDropdown };