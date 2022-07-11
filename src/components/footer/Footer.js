import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
     <footer className="footer">
     <div className="footer-info">
      <h1>Robyson De Paula</h1>
      <p>Kitchener-ON</p>
      </div>
      <div className="footer-contact">
          <h3>Contact me</h3>
      </div>
      <div className="footer-sns">
          <div className='design-by'>
              <br></br><br></br>Design by Robyson De Paula.
          </div>
          <div className="sns-links">
              <a href="https://www.linkedin.com/in/robysondepaula/" rel="noopener noreferrer">
                  <i className="fab fa-linkedin linkedin"></i>
              </a>
              <a href="mailto:robysondepaula.ca@gmail.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-envelope envelope"></i>
              </a>
              <a href="https://github.com/robysondepaula" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github github"></i>
              </a>
          </div>
      </div>
      </footer>
    )
  }
  
  export default Footer