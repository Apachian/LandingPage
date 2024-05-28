import React from "react";
import "./testimonials.css";
import person1 from "../../assets/person2.webp";
import person2 from "../../assets/person3.webp";
import { AiFillThunderbolt } from "react-icons/ai";

function testimonials() {
  return (
    <div className="testimonials">
      <h1>Testimonals that illustrate</h1>
      <h4>Our Service impact</h4>
      <br />
      <br />
      <br />
      <div className="scroll">
        <img className="peopleImg" src={person1} alt="" />
        <h1 className="name">Beven Groap</h1>
        <p className="paras">UI Designer</p>
        <br />
        <br />
        <p className="paras1">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
          excepturi ab dicta impedit esse, numquam necessitatibus quia ullam
          deserunt culpa molestiae porro, quisquam autem rerum, expedita aliquam
          nostrum ipsum maxime.
        </p>
        <h2>
          {" "}
          <AiFillThunderbolt className="employ" /> Employia
        </h2>
      </div>
      <br />
      <div className="scrolls">
        <img className="peopleImg" src={person2} alt="" />
        <h1 className="name1">Jason Duff</h1>
        <p className="paras">SEO EXPERT</p>
        <br />
        <br />
        <p className="paras1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          minus soluta molestias consectetur in asperiores praesentium veniam
          facere perspiciatis optio officiis tempora ut iure eligendi modi, iste
          culpa ab vero provident error vitae sit. Modi.
        </p>
        <h2>
          <AiFillThunderbolt className="employ" /> Employia
        </h2>
      </div>
    </div>
  );
}

export default testimonials;
