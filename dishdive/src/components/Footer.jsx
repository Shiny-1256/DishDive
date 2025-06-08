import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">Dish Dive</h3>
          <p className="footer-description">
            Discover amazing recipes from around the world. From sweet treats to savory delights, 
            find your perfect dish for any occasion.
          </p>
        </div>
    
        <div className="footer-section">
          <h4 className="footer-heading">Connect</h4>
          <div className="social-links">
            <a href="https://www.facebook.com/" target="_blank" className="social-link">Facebook</a>
            <a href="https://www.instagram.com/"  target="_blank" className="social-link">Instagram</a>
            <a href="https://www.threads.com/" target="_blank" className="social-link">Threads</a>
            <a href="https://www.pinterest.com/" target="_blank" className="social-link">Pinterest</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Dish Dive. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
