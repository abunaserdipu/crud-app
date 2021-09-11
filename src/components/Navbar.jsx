import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid d-flex justify-content-between">
            <Link className="navbar-brand fw-bold" to="/">
              Suffix IT Limited
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
                <li className="nav-item ms-3">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item ms-3">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item ms-3">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item ms-3">
                  <Link className="nav-link" to="/users">
                    Users
                  </Link>
                </li>
              </ul>
              <Link
                className="nav-link text-secondary"
                onClick={() => alert("Worked on it!")}
                to="/"
              >
                Logout
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
