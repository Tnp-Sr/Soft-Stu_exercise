import React, { useState } from "react";

function Button(props) {
  const { parentAlert } = props;
  const [value, setValue] = useState(0);

  function increase() {
    if (value < 10) {
      setValue(value + 1);
    } else {
      parentAlert(1);
    }
  }
  
  function decrease() {
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
