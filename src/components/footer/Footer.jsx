import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/images/logo.png";

import {
  User,
  Github,
  Linkedin,
  Instagram,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="row gy-4">

          {/* Logo & Description */}
          <div className="col-lg-4 col-md-12">
            <img
              src={logo}
              alt="TravelWorld Logo"
              className="footer-logo img-fluid"
            />

            <p className="footer-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
              natus!
            </p>

            <div className="footer-social">
              <Link to="#"><User size={18} /></Link>
              <Link to="#"><Github size={18} /></Link>
              <Link to="#"><Linkedin size={18} /></Link>
              <Link to="#"><Instagram size={18} /></Link>
            </div>
          </div>

          {/* Discover */}
          <div className="col-lg-2 col-md-4 col-sm-6">
            <h6 className="footer-title">Discover</h6>
            <ul className="footer-links">
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/tours">Tours</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-4 col-sm-6">
            <h6 className="footer-title">Quick Links</h6>
            <ul className="footer-links">
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-4 col-md-4">
            <h6 className="footer-title">Contact</h6>

            <div className="footer-contact">
              <div className="footer-contact-item">
                <MapPin size={16} />
                <span><strong>Address:</strong> Moosapet,Hyderabad</span>
              </div>

              <div className="footer-contact-item">
                <Mail size={16} />
                <span><strong>Email:</strong> Maneendraguthi@gmail.com</span>
              </div>

              <div className="footer-contact-item">
                <Phone size={16} />
                <span><strong>Phone:</strong> +91 6304054870</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>
            © {year} Designed & Developed by Guthi Maneendra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
