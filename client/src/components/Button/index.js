import React from "react";
import "./style.css";

// Destructuring the type, className, children and onClick props, applying them to the button element
function Button({ type = "default", className, children, myFunction }) {
    return (
        <button onClick={myFunction} className={["btn btn-lg", `btn-${type}`, className].join(" ")}>
            {children}
        </button>
    );
}

export default Button;
