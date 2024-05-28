import React from "react";
import "./Ready.css";
import { FaCreditCard } from "react-icons/fa";

function Ready() {
  return (
    <div className="ready">
      <div className="content">
        <h1>Ready to dive in ?</h1>
        <br />
        <p className="paragraph">
          We reached here with our hard work and dedication
        </p>
        <br />
        <button className="btn">Join Waitlist</button>
        <br />
        <br />
        <h5 className="card">
          No Credit Card Required. <FaCreditCard className="icons" />{" "}
        </h5>
      </div>
    </div>
  );
}

export default Ready;
