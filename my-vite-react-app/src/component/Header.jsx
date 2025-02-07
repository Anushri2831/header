import React from "react";
import "./Header.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {faMicrophone} from '@fortawesome/free-solid-svg-icons';




const Header = () => {
  return (
    <header className="header">
      <div className="top-bar">
        <div className="logo">
          <span className="blue">Just</span><span className="orange">dial</span>
        </div>
        <nav className="nav-links">
          <a href="#">EN ▾</a>
          <a href="#">We are Hiring</a>
          <a href="#">Investor Relations</a>
          <a href="#">Leads</a>
          <a href="#">Advertise</a>
          <a href="#" className="business">BUSINESS</a>
          <a href="#">Free Listing</a>
          <button className="login-btn">Login / Sign Up</button>
        </nav>
      </div>

      <div className="search-bar">
        <h2>Search across ‘4.7 Crore+’ <span className="highlight">Businesses</span></h2>
        <div className="search-box">
          <input type="text" placeholder="📍 Betkuli, Karwar" className="location-input" />
          <input type="text" placeholder="Search in Karwar" className="search-input" />
          <button>
            <FontAwesomeIcon icon={faSearch} />
            </button>

            
          <button>
            <FontAwesomeIcon icon={faMicrophone} />
          </button>

      

       
          
        </div>
      </div>

      <div className="download-app">
        <button>Download App ⬇</button>
      </div>
    </header>
  );
};

export default Header;