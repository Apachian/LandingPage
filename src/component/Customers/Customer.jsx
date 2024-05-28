import React from "react";
import "./Customer.css";
import { MdWifiTetheringErrorRounded } from "react-icons/md";
import { LuHeartHandshake } from "react-icons/lu";

function Customer() {
  return (
    <div className="customer">
      <h1 className="head1">Our Customers</h1>
      <br />
      <br />
      <h3 className="third-heading">
        Empowering seamless recruitment experiences for our valued customers.
      </h3>
      <div className="images">
        <div className="img1">
          <h4>
            {" "}
            <span className="spans">OIO </span>reform.
          </h4>
        </div>
        <div className="img2">
          <h4 className="head2">
            /THE
            <br /> HACKING
            <br /> SCHOOL/
          </h4>
        </div>
        <div className="img3">
          <h4 className="head3 third">
            <MdWifiTetheringErrorRounded className="icons1" /> goodmind.
            <span className="apps">app</span>
          </h4>
        </div>
        <div className="img4 third fouth">
          <LuHeartHandshake className="ice" />
        </div>
      </div>
    </div>
  );
}

export default Customer;
