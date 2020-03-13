import React from "react";
import "./style.css";
import { MdFlightTakeoff } from 'react-icons/md';
import { MdGetApp } from 'react-icons/md';


function Nav() {

    return (
        <nav className="navbar">
            <a className="navbar-brand" href="/maximalist" id="nav">
                Maximalist
      </a>

            <a className="navbar-brand" href="/" id="nav">
                <MdFlightTakeoff /> Search Trip
      </a>







            <a className="navbar-brand" href="/saved" id="nav">

                <h4>   <MdGetApp /> Saved</h4>


            </a>

        </nav>


    );
}

export default Nav;
