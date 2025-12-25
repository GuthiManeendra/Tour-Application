import React, { useEffect, useRef } from "react";
import { Container, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Header.css";

const nav_links = [
  { path: "/home", display: "Homee" },
  { path: "/about", display: "About" },
  { path: "/tours", display: "Tours" },
  { path: "/login", display: "Login" },
  { path: "/register", display: "Register" },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        headerRef.current.classList.add("stickey__header");
      } else {
        headerRef.current.classList.remove("stickey__header");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    menuRef.current.classList.toggle("show__menu");
  };

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_wrapper">

            {/* Logo */}
            <div className="logo">
              <img src={logo} alt="Logo" className="logoImg" />
            </div>

            {/* Navigation */}
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu">
                {nav_links.map((item, index) => (
                  <li
                    key={index}
                    className={`nav__item ${
                      item.display === "Register" ? "register__btn" : ""
                    }`}
                  >
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        isActive ? "active__link" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Menu Icon */}
            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>

          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;