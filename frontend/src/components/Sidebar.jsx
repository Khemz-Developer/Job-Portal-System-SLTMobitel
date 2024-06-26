import React, { useState } from "react";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";
import "./sidebar.css";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/create",
      name: "Job Creation",
      icon: <FaTh />,
    },
    {
      path: "/modification",
      name: "Job Update",
      icon: <FaUserAlt />,
    },
    {
      path: "/received",
      name: "Received CVs",
      icon: <FaRegChartBar />,
    },
    {
      path: "/accept",
      name: "Accepted CVs",
      icon: <FaCommentAlt />,
    },
    {
      path: "/role",
      name: "Users",
      icon: <FaUserAlt />,
    },
  ];

  return (
    <div className="containerr">
      <div
        id="sidebar"
        style={{ width: isOpen ? "200px" : "50px" }}
        className="sidebar"
      >
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Admin
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassname="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
