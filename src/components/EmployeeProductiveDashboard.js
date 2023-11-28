import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser } from "react-icons/fa";
import "./Employee.css";
import img1 from "./assets/vbnlogo2.jpg";

const EmployeeProductiveDashboard = () => {
  const productivityData = [
    { day: "Monday", percentage: 40 },
    { day: "Tuesday", percentage: 25 },
    { day: "Wednesday", percentage: 40 },
    { day: "Thursday", percentage: 80 },
  ];

  return (
    <div className="login-container">
      <div className="logodiv">
        <img src={img1} alt="Logo" className="logo1" />
      </div>

      <div className="heading1">
        <h1>Employee productive Dashboard</h1>
      </div>
      <div className="heading">
        <div className="innerbox">
          {productivityData.map((data, index) => (
            <React.Fragment key={index}>
              <p className={`proclass`}>
                Productivity on {data.day}
                <span className={`percentage-green`}>{data.percentage}%</span>
              </p>
              <div
                className={`progress-bar green progress-bar-${data.percentage}`}
              >
                <div style={{ width: `${data.percentage}%` }}></div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      

      
      <footer className="footer">
      <Link to="/EmployeeProductiveDashboard">
          <FaHome className="icon" />
        </Link>
        <Link to="/Users"><FaUser className="icon" />
        </Link>
      </footer>
    </div>
  );
};

export default EmployeeProductiveDashboard;


