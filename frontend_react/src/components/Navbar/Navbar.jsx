import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

import images from "../../constants/index";

import "./Navbar.css";

export default function Navbar() {
  /**
   * navbar links
   */
  const navLinks = [
    { id: "home", text: "home" },
    { id: "about", text: "about us" },
    { id: "services", text: "services" },
    { id: "gallery", text: "gallery" },
    { id: "contact", text: "contact us" },
  ];

  /**
   * navbar toggle
   */

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  /**
   * header show when scroll down to 80px
   */

  const [headerShow, setHeaderShow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setHeaderShow(true);
    } else {
      setHeaderShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`header ${headerShow ? "active" : ""}`}>
        <div className="container">
          <Link to="/home" className="logo">
            <img
              src={images.logo}
              width="120"
              height="64"
              alt="sikharthy infotech"
            />
          </Link>

          <nav className={`navbar ${isOpen ? "active" : ""}`}>
            <div className="wrapper">
              <Link to="/" className="logo">
                <img
                  src={images.logoDark}
                  width="120"
                  height="64"
                  alt="sikharthy infotech"
                />
              </Link>

              <button
                className="nav-close-btn"
                aria-label="close menu"
                onClick={closeNavbar}
              >
                <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
              </button>
            </div>

            <ul className="navbar-list">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <NavLink to={`/${link.id}`} className="navbar-link">
                    {link.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="nav-open-btn"
            aria-label="open menu"
            onClick={toggleNavbar}
          >
            <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
          </button>

          <Link to="/contact" className="btn btn-primary has-before has-after">
            Let’s Talk 👋
          </Link>

          <div
            className={`overlay ${isOpen ? "active" : ""}`}
            onClick={closeNavbar}
          ></div>
        </div>
      </header>
    </>
  );
}
