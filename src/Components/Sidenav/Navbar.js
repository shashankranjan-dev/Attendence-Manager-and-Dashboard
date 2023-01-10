import React from "react";
import { Link } from "react-router-dom";

import "../../App.css";

function Sidenav() {
  return (
    <div className="contain">
      <nav>
        <ul>
          <li>
            <a href="#!" className="logo">
              <img
                src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_960_720.png"
                alt="#"
              />
              <span className="nav-item">Admin</span>
            </a>
          </li>
          <li>
            <Link to="/">
              <i className="fas fa-menorah"></i>
              <span className="nav-item">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link className=" text-black" to="/message">
              <i className="fas fa-comment"></i>
              <span className="nav-item">Message</span>
            </Link>
          </li>
          <li>
            <a href="#!">
              <i className="fas fa-database"></i>
              <span className="nav-item">Report</span>
            </a>
          </li>
          <li>
            <a href="#!">
              <i className="fas fa-chart-bar"></i>
              <span className="nav-item">Attendance</span>
            </a>
          </li>
          <li>
            <a href="#!">
              <i className="fas fa-cog"></i>
              <span className="nav-item">Setting</span>
            </a>
          </li>

          <li>
            <a href="#!" className="logout">
              <i className="fas fa-sign-out-alt"></i>
              <span className="nav-item">Log out</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidenav;
