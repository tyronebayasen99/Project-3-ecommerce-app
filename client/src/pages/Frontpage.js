import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import Nav1 from "../components/NavBottom";
import Input from "../components/Input";
import Button from "../components/Button";
import DateRange from "../components/DateRange";
// import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import FrontJumbotron from "../components/FrontJumbotron";
<<<<<<< HEAD
import PriceRange from "../components/PriceRange"


function FrontPage() {

=======
import PriceRange from "../components/PriceRange";
import { useAuth } from "../context/auth";

function FrontPage() {
  const { setAuthTokens } = useAuth();
  const { authTokens } = useAuth();

  function logOut() {
    setAuthTokens();
    localStorage.clear();
    window.location.reload();
  }
>>>>>>> dcf6aae36c957bf4d7c38587151cf10ffd3388f3

  return (
    <div>
      <Nav></Nav>
      <Nav1></Nav1>
      <FrontJumbotron></FrontJumbotron>

<<<<<<< HEAD

        </div>
    );
=======
      {authTokens ? <Button onClick={logOut}>Log out</Button> : <div></div>}
    </div>
  );
>>>>>>> dcf6aae36c957bf4d7c38587151cf10ffd3388f3
}

export default FrontPage;
