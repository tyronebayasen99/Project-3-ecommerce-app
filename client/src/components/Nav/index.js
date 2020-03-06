import React from "react";
import "./style.css";

function Nav() {
    return (
        <nav className="navbar">
            <a className="navbar-brand" href="/" id="nav">
                Maximalist
      </a>

            <a className="navbar-brand" href="/saved" id="nav">


                Cart
      </a>
        </nav>

    );
}

export default Nav;
