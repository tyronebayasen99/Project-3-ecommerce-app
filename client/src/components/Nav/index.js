import React from "react";
import "./style.css";
import { MdFlightTakeoff } from 'react-icons/md';
import { MdGetApp } from 'react-icons/md';
import { useAuth } from '../../context/auth';
import Button from "../Button";

function Nav() {
    const { setAuthTokens } = useAuth();


    function logOut() {
        setAuthTokens();
        localStorage.clear();
        window.location.reload();
    }


    const { authTokens } = useAuth();
    return (
        <nav className="navbar">
            <a className="navbar-brand" href="/maximalist" id="nav">
                Maximalist
      </a>

            <a className="navbar-brand" href="/" id="nav">
                <MdFlightTakeoff /> Search Trip
      </a>




            <div>
                {authTokens ?

                    <a className="navbar-brand" href="/saved" id="nav">

                        <h4>   <MdGetApp /> Saved</h4>


                    </a> :
                    <a className="navbar-brand" href="/login" id="nav">

                        <h4>Login</h4>


                    </a>
                }

                {authTokens ? <Button id="change" onClick={logOut}>Log out</Button> : <div></div>}
            </div>
        </nav>


    );
}

export default Nav;
