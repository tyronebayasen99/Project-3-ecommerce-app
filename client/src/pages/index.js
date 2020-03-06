import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import Input from "../components/Input";
import Button from "../components/Button";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";

//components
import Card from "../components/Card";


function Index() {
    return (
        <div>
            <Nav></Nav>
            <Jumbotron></Jumbotron>
        </div>
    );
}

export default Index;
