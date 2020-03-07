import React from "react";
import "./style.css";
import { MdShoppingCart } from 'react-icons/md';

function Nav() {

    return (
        <nav className="navbar">
            <a className="navbar-brand" href="/" id="nav">
                Maximalist
      </a>







            <a className="navbar-brand" href="/saved" id="nav">

                <h4>   <MdShoppingCart /> Cart</h4>


            </a>

        </nav>


    );
}

export default Nav;
