import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./style/style.css";
import image from "./assets/image1.svg";

function App() {
  return (
    <div className="background">
      <div className="container">
        <h1 className="title">Made by marketing experts</h1>
        <h1 className="title2">for marketing experts</h1>
        <img className="img" src={image} alt="" />
      </div>
    </div>
  );
}

export default App;
