import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section footer-brand">
            <h3 className="footer-logo">
              <span className="logo-icon">⚡</span>
              ElectroRent
            </h3>
            <p className="footer-description">
              Your trusted platform for renting premium electronics. Quality products,
              affordable prices, hassle-free experience.
            </p>
            <div className="footer-contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt />
                <span>VIT Bhopal University, Bhopal, India</span>
              </div>
              <div className="contact-item">
                <FaEnvelope />
                <span>support@electrorent.com</span>
              </div>
              <div className="contact-item">
                <FaPhone />
                <span>+91 1234567890</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/team">Our Team</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/">Browse Products</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-section">
            <h4>Legal</h4>
            <ul className="footer-links">
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/dashboard">My Account</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div className="footer-section">
            <h4>Connect With Us</h4>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
            <p className="social-description">
              Follow us on social media for updates, deals, and tech tips!
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} ElectroRent. All rights reserved.</p>
          <p className="footer-credits">Designed for Capstone 103 | Made with ❤️ by Team ElectroRent</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;