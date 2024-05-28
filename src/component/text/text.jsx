import React from "react";
import "./text.css";
import Img from "../../assets/images.webp";

function text() {
  return (
    <div className="texts">
      <div className="image">
        <img src={Img} className="main-images" alt="images" />
      </div>
      <div className="text">
        <h2 className="heading-2">Lorem ipsum dolor sit amet</h2>
        <p className="para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, ducimus sint corporis, placeat doloremque deserunt
          totam aut illo inventore asperiores qui eligendi, magnam ipsa
          aspernatur. Laboriosam voluptate doloribus culpa cum beatae dicta
          consequatur voluptatum modi odit quaerat! Iure laborum dolorum
          voluptas quis quia voluptatum assumenda dolorem, commodi hic totam,
          eum vel praesentium cumque possimus error.
        </p>
      </div>
    </div>
  );
}

export default text;
