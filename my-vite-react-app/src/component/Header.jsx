import React from "react";
import "./Header.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';





const Header = () => {
  return (
    <header className="header">
      <div className="top-bar">
        <div className="logo">
          <span className="blue">Just</span><span className="orange">dial</span>
        </div>
        <nav className="nav-links">
          <a href="#" style={{color:'blue'}}><i className="fas fa-comments"></i>EN ▾</a>
          <a href="#">We are Hiring</a>
          <a href="#">Investor Relations</a>
          <a href="#"></a>
          <a href="#"><i className="fas fa-envelope"></i>Leads</a>
          <a href="#"> <i className="fas fa-bullhorn"></i>Advertise</a>

          <div className="business-container">
          <a href="#" className="business">BUSINESS</a>
          <a href="#"><i className="fas fa-chart-line"></i>Free Listing</a>
          </div>
          <i className="fas fa-bell"></i>
          <button className="login-btn">
           Login / Sign Up</button>
        </nav>
      </div>

      <div className="download-option">
        <button className="down">Download App </button>
        <button className="download-arrow"><i className="fas fa-minus"></i><i className="fas fa-arrow-down"></i></button>
      </div>

      <div className="search-bar">
        <h2>Search across ‘4.7 Crore+’ <span className="highlight">Businesses</span></h2>
        <div className="search-box">
          <input type="text"placeholder=" Betkuli, Karwar" className="location-input" style={{background:'#f0f0f0'}}  />

          <div className="Search-input">
          
     
          <input type="text" placeholder="Search in Karwar" className="search-input" />
      
         
          
     
          </div>
         
        </div>
      </div>

     
    </header>
  );
};

export default Header;