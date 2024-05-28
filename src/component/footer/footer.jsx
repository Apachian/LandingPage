import React from "react";
import "./footer.css";
import { FaHeart } from "react-icons/fa6";
import { AiFillThunderbolt } from "react-icons/ai";

function footer() {
  return (
    <div className="footer">
      <div className="products">
        <h1 className="product-heading">Product</h1>
        <ul className="lists">
          <li>Features</li>
          <br />
          <li>Integrations</li>
          <br />
          <li>Pricing</li>
        </ul>
      </div>
      <div className="resourses">
        <h1 className="product-heading1">Resources</h1>
        <ul className="resourses-lists">
          <li>Content Hub</li>
          <br />
          <li>API Documentation</li>
        </ul>
      </div>
      <div className="company">
        <h1 className="product-heading2">Company</h1>
        <ul className="company-lists">
          <li>About US</li>
          <br />
          <li>Contact US</li>
          <br />
          <li>PartnerShips</li>
          <br />
          <li>Carrers</li>
        </ul>
      </div>
      <div className="legal">
        <h1 className="product-heading3">Legal</h1>
        <ul className="legal-lists">
          <li>Terms & Conditions</li>
          <br />
          <li>Privacy Policy</li>
          <br />
          <li>Refund Policy</li>
          <br />
        </ul>
      </div>
      <h1 className="headi">
        Made with <FaHeart /> from India for the World
      </h1>

      <h1 className="kite">
        {" "}
        <AiFillThunderbolt />
        Employia
      </h1>
      <p className="copyright">
        Copyright &#169; 2024 employia.ltd.All rights reserved
      </p>
    </div>
  );
}

export default footer;
