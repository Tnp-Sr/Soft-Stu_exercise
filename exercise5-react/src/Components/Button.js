import React from "react";


function Button(props) {
    const [value, setValue] = useState("MIN");

    function handleClick(operate) {
        if (operate === -1) {
          if (value < 10) {
            setValue(value + operate);
          } 
          else {
            
          }
        } else {
          if (value === "MAX") {
            alert("Cannot vote more");
          } else if (value === "MIN") {
            setValue(1);
          } else if (value === 9) {
            setValue("MAX");
          } else {
            setValue(value + operate);
          }
        }
      }

//   function handleClick(operate) {
//     if (operate === -1) {
//       if (value === "MIN") {
//         alert("Cannot unvote");
//       } else if (value === "MAX") {
//         setValue(9);
//       } else if (value === 1) {
//         setValue("MIN");
//       } else {
//         setValue(value + operate);
//       }
//     } else {
//       if (value === "MAX") {
//         alert("Cannot vote more");
//       } else if (value === "MIN") {
//         setValue(1);
//       } else if (value === 9) {
//         setValue("MAX");
//       } else {
//         setValue(value + operate);
//       }
//     }
//   }

    return (
        <div className="Button">
            <button className="operate-button" onClick={handleClick(1)}>
                Click to Vote
            </button>
            <div className="vote-value">{value === 0 ? "MIN" : value === 10 ? "MAX" : value}</div>
            <button className="operate-button" onClick={handleClick(-1)}>
                Click to Unvote
            </button>
        </div>
    );
}

export default Button;
