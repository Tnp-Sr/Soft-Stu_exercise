// import logo from './logo.svg';
import React from "react";
import "./App.css";
import menuItems from "./data";

//import components
import ContentBlock from "./Components/Menu";
import Button from "./Components/Button";

function App() {

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
      <h1>โหวตอาหาร</h1>
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
