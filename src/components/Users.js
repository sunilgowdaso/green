import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser } from "react-icons/fa";
import "./Users.css";
import img1 from "./assets/vbnlogo2.jpg";

const Users = () => {
  const userData = [
    {
      id: 1,
      name: "Arjun",
      dob: "16/11/2000",
      role: "Software Engineer",
    },
    {
      id: 2,
      name: "mahesh",
      dob: "16/11/2000",
      role: "Software Engineer",
    },
    {
      id: 3,
      name: "Anil",
      dob: "16/11/2000",
      role: "Software Engineer",
    },
    
  ];

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="login-container">
      

      <div className="heading1">
        <input
        className="search"
          type="text"
          placeholder="Search by user name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      
      <div className="user-cards">
        {userData
          .filter((user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .slice(0, 4)
          .map((user) => (
            <div key={user.id} className="user-card">
              <h3>Employee id: {user.id}</h3>
              <p>Name: {user.name}</p>
              <p>DOB: {user.dob}</p>
              <p>Role: {user.role}</p>
            </div>
          ))}
      </div>

      
      <footer className="footer">
        <Link to="/EmployeeProductiveDashboard">
          <FaHome className="icon" />
        </Link>
        <Link to="/Users">
          <FaUser className="icon" />
        </Link>
      </footer>
    </div>
  );
};

export default Users;