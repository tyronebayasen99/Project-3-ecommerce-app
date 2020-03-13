import React from "react";
import "./style.css";
import { MdFlightTakeoff } from 'react-icons/md';
import { MdGetApp } from 'react-icons/md';
import { useAuth } from '../../context/auth';


function Nav() {
    const { authTokens } = useAuth();
    return (
        <nav className="navbar">
            <a className="navbar-brand" href="/maximalist" id="nav">
                Maximalist
      </a>

            <a className="navbar-brand" href="/" id="nav">
                <MdFlightTakeoff /> Search Trip
      </a>





            {authTokens ?

                <a className="navbar-brand" href="/saved" id="nav">

                    <h4>   <MdGetApp /> Saved</h4>


                </a> :
                <a className="navbar-brand" href="/login" id="nav">

                    <h4>Login</h4>


                </a>
            }
        </nav>


    );
}

export default Nav;
