import React from "react";
import "./questions.css";
import { FaArrowRight } from "react-icons/fa";
import Think from "../../assets/thinks.jpeg";
import { AiFillThunderbolt } from "react-icons/ai";

function questions() {
  return (
    <div className="questions">
      <div className="ourSolutions">
        <h1 className="heading1">Your Questions?</h1>
        <h2 className="heading2">Our Solutions!</h2>
        <div className="container">
          <div className="container-left">
            <div className="container-question">
              <h1 className="ques">
                lets help you figure out what ?{" "}
                <FaArrowRight className="arrowicon" />
              </h1>
            </div>
            <div className="container-question">
              <h1 className="ques">
                lets help you figure out what ?{" "}
                <FaArrowRight className="arrowicon" />
              </h1>
            </div>
            <div className="container-question">
              <h1 className="ques">
                lets help you figure out what ?{" "}
                <FaArrowRight className="arrowicon" />
              </h1>
            </div>
            <div className="container-question">
              <h1 className="ques">
                lets help you figure out what ?{" "}
                <FaArrowRight className="arrowicon" />
              </h1>
            </div>
            <div className="container-question">
              <h1 className="ques">
                lets help you figure out what ?{" "}
                <FaArrowRight className="arrowicon" />
              </h1>
            </div>
            <div className="container-question">
              <h1 className="ques">
                lets help you figure out what ?{" "}
                <FaArrowRight className="arrowicon" />
              </h1>
            </div>
          </div>
          <div className="container-right">
            <img className="imgs" src={Think} alt="" />
          </div>
          <h1 className="anotherHeading">
            Havent seen yous ? <span className="headSpan">ask me</span>{" "}
          </h1>
          <h2 className="headicon">
            {" "}
            <AiFillThunderbolt /> Employia
          </h2>
        </div>
      </div>
    </div>
  );
}

export default questions;
