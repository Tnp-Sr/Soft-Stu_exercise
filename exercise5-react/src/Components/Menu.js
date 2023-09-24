import React from "react";


function Menu(props) {
  const {menuItem} = props
  return (
    <div className="Menu">
          <img className="menuImg" src={menuItem.img} alt="food" />
          <h2>{menuItem.foodType}</h2>
          <p className="menuName">{menuItem.name}</p>
          <p className="menuDetail">{menuItem.desc}</p>
      </div>
  );
}

export default Menu;
