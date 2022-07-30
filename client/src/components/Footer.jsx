import React from "react";
import { Link } from "react-router-dom";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container ">
      <header className="footer-header">
        <h3>
          {" "}
          Welcome to our website{" "}
          <span>
            Bike
            <span className="text-primary">NG</span>o
          </span>
        </h3>

        <p>
          This is the graduation project of Hack Your Future students, class34
        </p>
      </header>
      <div className="footer-router">
        <ul className="footer-ul">
          <li className="footer-li">
            <Link to="/about-us">About us</Link>
          </li>
          <li className="footer-li">
            <Link to="/terms-of-use">Terms of Use</Link>
          </li>

          <li className="footer-li">
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
        </ul>

        <ul className="footer-ul">
          <li className="footer-li">
            <Link to="/developers">Developers</Link>
          </li>
        </ul>
      </div>
      <div className="footer-links">
        <div className="socialMedia-icons">
          <a
            href="https://www.facebook.com/BikenGo-106797538676285"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a
            href="https://twitter.com/CBikengo"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-twitter-square"></i>
          </a>
          <a
            href="https://www.pinterest.com/classhyfbikengo/_saved/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-pinterest-square"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <h6>
          Copyright{" "}
          <span>
            Bike
            <span className="text-primary">NG</span>o
          </span>
          ©2022
        </h6>
      </div>
    </div>
  );
};

export default Footer;
