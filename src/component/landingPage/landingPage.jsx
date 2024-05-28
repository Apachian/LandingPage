import React from "react";
import "./landingPage.css";
import { AiFillThunderbolt } from "react-icons/ai";

function landingPage() {
  return (
    <div className="landing">
      <br />
      <br />
      <br />
      <div className="search">
        <AiFillThunderbolt className="main-icon" />
        <h1 className="mains"> Employia</h1>
        <div className="login">
          <h1 className="login-Heading">Log in</h1>
        </div>
      </div>
      <div className="main-heading">
        <h2 className="main-headings">
          World's First Candidate Tracking Software.
        </h2>
        <br />
        <h5>Check with our CTS Whether<br/> You Should Hire Or Not!</h5>
        <br />
        <br />
        <button className="btn">Join  <span>WaitList</span></button>
      </div>
    </div>
  );
}

export default landingPage;
