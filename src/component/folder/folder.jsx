import React from "react";
import "./folder.css";
import Work from "../../assets/workes.jpeg";

function folder() {
  return (
    <div className="folder">
      <div className="containers">
        <h1 className="topheads heam">By</h1>
        <h2 className="topheadsu heam">UseCase</h2>
        <br />
        <br />
        <br />
        <h4 className="nexthead heam">Use Case 1</h4>
        <br />
        <h4 className="nextheads heam">Use Case 1</h4>
        <br />
        <h4 className="nextheads heam">USe Case 1</h4>
        <br />
        <h4 className="nextheads heam">USe Case 1</h4>
        <div className="cont-content">
          <div className="rights-cont">
            <p className="rights-contents">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
              sint non saepe. Fuga nesciunt velit dolor ipsam nihil harum ullam
              placeat sed. Et explicabo suscipit ex blanditiis necessitatibus
              illo quibusdam perferendis quia, pariatur vel quidem magni atque?
              Sit, iste quibusdam sunt rem deleniti vero doloribus veniam,
              eveniet voluptate nisi eligendi! Dolores libero, modi a
              repellendus fugit ipsam. Ducimus esse voluptas qui hic nobis
              nostrum vero, in debitis nam fugit. Ullam?
            </p>
          </div>
          <div className="lefts-cont">
            <img className="workes" src={Work} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default folder;
