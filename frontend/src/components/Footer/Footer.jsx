import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets.js";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nihil
            vitae blanditiis ipsum fuga iusto quas, quae natus, esse quisquam
            fugiat, porro ducimus dolorem adipisci! Adipisci illo iure deserunt
            earum?
          </p>
          <div className="footer-social-icons">
            <img src="" alt="" />
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>tugceicigen0917@gmail.com</li>
            <li>+90544-649-17-55</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        © 2025 Food Delivery. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
