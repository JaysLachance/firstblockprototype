import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
    return (
      <footer className="footer">
          <a href="https://www.firstblock.com" className="website-link">
            <p className="copyright">  First Block</p>
          </a>

        <p className="copyright">Copyright © {new Date().getFullYear()} Your Company Name</p>
      </footer>
    );
  }
  
export default Footer;