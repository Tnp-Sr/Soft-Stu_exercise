import React from "react";
import Button from "./Button";
import menuItems from "../data"; 

function Menu() {
  // function ตรวจจับการเกิด alert
  const handleAlert = (aType) => {
    if (aType === -1) {
      alert("Cannot unvote");
    } else {
      alert("Cannot vote more");
    }
  }

  return (
    <div className="Menu">
      {menuItems.map((menuItem) => (
        <div className="menuCard">
          <div className="menuContent">
            <div>
              <h2>{menuItem.foodType}</h2>
              <p className="menuName">{menuItem.name}</p>
              <p className="menuDesc">{menuItem.desc}</p>
            </div>
            <div>
              <img className="menuImg" src={menuItem.img} alt="food" />
            </div>
          </div>
          <Button parentAlert={handleAlert} />
        </div>
      ))}
    </div>
  );
}

export default Menu;
