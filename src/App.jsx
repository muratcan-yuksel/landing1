import { useState } from "react";
import "./style/style.css";
import image from "./assets/image1.svg";

function App() {
  return (
    <div className="background">
      <div className="container">
        <h1 className="title">Automate your marketing workflow</h1>
        {/* <h1 className="title2">for marketing experts</h1> */}
        <img className="img" src={image} alt="" />
        <div className="subContainer">
          <div className="subCont2">
            <h3 className="subTitle">Made by professionals</h3>
            <h3 className="subTitle">for professionals</h3>
          </div>
          <h3 className="button">click here</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
