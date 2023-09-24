import React, { useState } from "react";

function Button(props) {
  const { parentAlert } = props;
  const [value, setValue] = useState(0);

  // case vote
  const increase = () => {
    if (value < 10) {
      setValue(value + 1);
    } else {
      parentAlert(1); //use function in parent โดยส่งค่า 1 ไป
    }
  }
  // case unvote
  const decrease = () => {
    if (value > 0) {
      setValue(value - 1);
    } else {
      parentAlert(-1);
    }
  }

  return (
    <div className="Button">
      <button className="operate-button" onClick={increase}>
        Click to Vote
      </button>
      <div className="vote-value">
        {value === 0 ? "MIN" : value === 10 ? "MAX" : value}
      </div>
      <button className="operate-button" onClick={decrease}>
        Click to Unvote
      </button>
    </div>
  );
}

export default Button;
