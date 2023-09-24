import React from "react";

function Menu(props) {
  const { menuItem } = props;
  return (
    <div className="Menu">
      <div>
        <h2>{menuItem.foodType}</h2>
        <p className="menuName">{menuItem.name}</p>
        <p className="menuDetail">{menuItem.desc}</p>
      </div>
      <div>
        <img className="menuImg" src={menuItem.img} alt="food" />
      </div>
    </div>
  );
}

export default Menu;
