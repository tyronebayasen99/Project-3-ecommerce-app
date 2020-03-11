import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import Nav1 from "../components/NavBottom";
import Input from "../components/Input";
import Button from "../components/Button";

// import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import SavedCard from "../components/SavedCard";


function Saved() {
    return (
        <div>
            <Nav>
            </Nav>
            <Nav1></Nav1>


            <Container>

                <SavedCard></SavedCard>
            </Container>

        </div>

    );

}

export default Saved;