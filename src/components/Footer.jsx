import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section copyright">
          <h1>Your Website Name</h1>
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <nav className="footer-nav">
          <a href="/privacy" aria-label="Privacy Policy">Privacy Policy</a>
          <a href="/terms" aria-label="Terms of Service">Terms of Service</a>
          <a href="/contact" aria-label="Contact Us">Contact Us</a>
        </nav>

        <div className="footer-section social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i> {/* Example: Font Awesome icon */}
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;