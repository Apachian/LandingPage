import React from "react";
import "./foldertwo.css";
import Software from "../../assets/software.webp";

function foldertwo() {
  return (
    <div className="foldertwo">
      <div className="texting">
        <h1 className="time">Lorem ipsum dolor sit amet.</h1>
        <h4 className="times">Lorem ipsum dolor sit amet.</h4>
        <br />
        <p className="para-times">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A modi vitae
          consequuntur animi soluta voluptates dolores iste facilis similique.
          At minus nihil officia fugiat dolorem earum esse blanditiis ab iusto
          voluptatum, maiores ipsa voluptas accusantium laudantium eligendi aut
          suscipit ad ea, ipsum cupiditate accusamus. Cumque nisi eius suscipit
          asperiores, eos quasi perspiciatis eligendi a ea neque quis earum
          adipisci ipsum corporis! Error labore unde quas ullam eius.
          Exercitationem ab dolorem maiores, voluptatum fugiat,
        </p>
      </div>
      <div className="images">
        <img className="img" src={Software} alt="" />
      </div>
    </div>
  );
}

export default foldertwo;
