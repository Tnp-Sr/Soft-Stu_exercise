// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import menuItems from "./data";

//import components
import ContentBlock from "./Components/Menu";
import Button from "./Components/Button";
import Header from "./Components/Header";

function App() {
  // const [value, setValue] = useState("MIN");

  // function voteClick() {
  //   if (value === "MAX") {
  //     alert("Cannot vote more");
  //   } else if (value === "MIN") {
  //     setValue(1);
  //   } else if (value === 9) {
  //     setValue("MAX");
  //   } else {
  //     setValue(value + 1);
  //   }
  // }

  // function unvoteClick() {
  //   if (value === "MIN") {
  //     alert("Cannot unvote");
  //   } else if (value === "MAX") {
  //     setValue(9);
  //   } else if (value === 1) {
  //     setValue("MIN");
  //   } else {
  //     setValue(value - 1);
  //   }
  // }


  // function voteClick(operate) {
  //   if (operate === -1) {
  //     if (value === "MIN") {
  //       alert("Cannot unvote");
  //     } else if (value === "MAX") {
  //       setValue(9);
  //     } else if (value === 1) {
  //       setValue("MIN");
  //     } else {
  //       setValue(value + 1);
  //     }
  //   } else {
  //     if (value === "MAX") {
  //       alert("Cannot vote more");
  //     } else if (value === "MIN") {
  //       setValue(1);
  //     } else if (value === 9) {
  //       setValue("MAX");
  //     } else {
  //       setValue(value + operate);
  //     }
  //   }
  // }
    function handleAlert(aType) {
      if(aType === -1){
        alert("Cannot unvote");
      }
      else{
        alert("Cannot vote more");
      }
  }

  return (
    <div className="App">
      <Header />
      {menuItems.map((menuItem, index) => (
        <div className="menuCard">
          <ContentBlock key={index} menuItem={menuItem} />
          <Button parentAlert={handleAlert} />
        </div>
      ))}
    </div>
  );
}

export default App;
