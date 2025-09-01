import React from "react";
import { Link } from "react-router-dom";
import url from "../assets/LOGOblack2.png";

export default function ViChainNavbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand fw-bold" to="#">
       <img src={url} alt="" id="logo"/> ViChain Tech
        </Link>

        {/* Hamburger on Right */}
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Content */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Centered Nav Links */}
          <ul className="navbar-nav mx-auto text-center text-lg-center">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Service">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Pricing
              </Link>
            </li>
          </ul>

          {/* CTA Button – goes below links on mobile */}
          <div className="text-lg-end text-start ms-lg-3 mt-2 mt-lg-0">
            <button type="button" className="btn btn-info px-4 btnctn">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
