import React, { useState } from 'react';
import { Link, Route, Switch, useRouteMatch, useHistory } from 'react-router-dom';

// Department Details Component
const DepartmentDetail = ({ department }) => {
  return (
    <div style={{ padding: '50px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ color: '#16a085', marginBottom: '20px' }}>{department.title}</h1>
      <div style={{ marginBottom: '30px' }}>
        <img 
          src={`/${department.title.toLowerCase().replace(/\s+/g, '-')}.jpg`} 
          alt={department.title}
          style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '10px' }}
        />
      </div>
      <div style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '10px', marginBottom: '20px' }}>
        <h2 style={{ color: '#0d6efd', marginBottom: '15px' }}>About {department.title}</h2>
        <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', textAlign: 'justify' }}>
          {department.fullDescription}
        </p>
      </div>
      <div style={{ backgroundColor: '#f0f8ff', padding: '30px', borderRadius: '10px', marginBottom: '20px' }}>
        <h2 style={{ color: '#0d6efd', marginBottom: '15px' }}>Services</h2>
        <ul style={{ paddingLeft: '20px' }}>
          {department.services.map((service, index) => (
            <li key={index} style={{ margin: '10px 0', color: '#555' }}>{service}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Departments Page Component
const DepartmentsPage = () => {
  const history = useHistory();

  const allDepartments = [
    {
      id: 1,
      title: "Cardiology",
      description: "Meditrust hospital has a full fledged cardiology department...",
      fullDescription: "Our cardiology department is equipped with the latest...",
      icon: "❤️",
      services: ["24/7 Emergency Cardiac Care", "ECG and Echocardiography"],
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
            <div key={dept.id} style={{ backgroundColor: 'white', padding: '30px', borderRadius: '8px' }}>
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

// Departments Dropdown Component
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
    history.push(`/departments/${deptId}`); // Navigate to the same page
    setIsOpen(false);  // Close dropdown
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
      fullDescription: "Meditrust hospital has a full fledged cardiology department which has advanced facilities for providing various types of cardio services for our patients. Our cardiology department is equipped with the latest technology and state-of-the-art equipment to diagnose and treat heart conditions. We have a team of experienced cardiologists who are dedicated to providing comprehensive care for all types of heart diseases. Our services include non-invasive and invasive cardiac procedures, cardiac rehabilitation, and preventive cardiology.",
      icon: "❤️",
      services: [
        "24/7 Emergency Cardiac Care",
        "ECG and Echocardiography",
        "Cardiac Catheterization",
        "Angioplasty and Stent Placement",
        "Pacemaker Implantation",
        "Cardiac Rehabilitation Programs",
        "Heart Disease Prevention Counseling"
      ],
    },
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