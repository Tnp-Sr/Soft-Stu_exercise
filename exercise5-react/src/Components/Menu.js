import React, { useState } from "react";
import menuItems from "../data";
import Button from "./Button";


function Menu() {
  return (
    <div className="Menu">
          <img className="menuImg" src={item.img} alt="food" />
          <h2>{item.foodType}</h2>
          <p className="menuName">{item.name}</p>
          <p className="menuDetail">{item.desc}</p>
    </div>
  );
}

export default Menu;
