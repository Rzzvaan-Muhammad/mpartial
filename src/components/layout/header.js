import React, { useState } from "react";
import { Collapse, NavbarToggler } from "reactstrap";
import Image from "../image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="header-main">
      <nav className="navbar navbar-expand-lg sticky-top main_navbar py-lg-0 py-xl-0 p-0">
        <div className="container">
          <a class="navbar-brand" href="#">
            <Image
              src="logo.png"
              style={{
                minWidth: "217px",
                height: 29,
              }}
            />
          </a>
          <button
            className="navbar-toggler"
            data-toggler="collapse"
            data-target="#navbarNav"
          >
            <NavbarToggler onClick={toggle}>
              <FontAwesomeIcon className="icon" icon={faBars} />
            </NavbarToggler>
          </button>

          <Collapse isOpen={isOpen} navbar>
            <ul class="ml-auto navbar-nav d-flex justify-content-end main_navbar">
              <li class="nav-item pr-0 pl-0 mr-0">
                <a class="nav-link" href="#">
                  Ground-Truth Data
                </a>
              </li>
              <li class="nav-item pr-0 pl-0 mr-0">
                <a class="nav-link" href="#">
                  How It Works
                </a>
              </li>
              <li class="nav-item pr-0 pl-0 mr-0">
                <a class="nav-link" href="#">
                  Fee Structure
                </a>
              </li>
              <li class="nav-item pr-0 pl-0 mr-0">
                <a class="nav-link" href="#">
                  Example Deliverables
                </a>
              </li>
              <li class="nav-item pr-0 pl-0 mr-0">
                <a class="nav-link" href="#">
                  Submission Portal
                </a>
              </li>
              <li class="nav-item pr-0 pl-0 mr-0">
                <a class="nav-link" href="#">
                  Contact Us
                </a>
              </li>
              <li class="nav-item pr-0 pl-0 mr-0">
                <a class="nav-link" href="#">
                  <button className="login_btn">Sign In</button>
                </a>
              </li>
            </ul>
          </Collapse>
        </div>
      </nav>
    </div>
  );
};

export default Header;
