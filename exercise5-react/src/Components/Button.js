import React from "react";

function Button({ value, vote,unvote }) {
    return (
        <div className="Button">
            <button className="operate-button" onClick={vote}>
                Click to Vote
            </button>
            <div className="vote-value">{value}</div>
            <button className="operate-button" onClick={unvote}>
                Click to Unvote
            </button>
        </div>
    );
}

export default Button;
