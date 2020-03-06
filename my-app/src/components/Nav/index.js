import React from "react";
import "./style.css";

function Nav() {
    return (
        <nav className="navbar navbar-dark">
            <a className="navbar-brand" href="/">
                Google Books
      </a>
            <a className="navbar-brand" href="/saved">
                Saved
      </a>
        </nav>

    );
}