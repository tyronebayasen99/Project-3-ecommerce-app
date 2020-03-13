import React from "react";
// import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import Nav1 from "../components/NavBottom";
// import Input from "../components/Input";
// import Button from "../components/Button";

// import API from "../utils/API";
import { Container } from "../components/Grid";
import SavedCard from "../components/SavedCard";


function Saved() {
    return (
        <div>
            <Nav/>
            <Nav1/>
            <Container>
                <SavedCard/>
            </Container>

        </div>

    );

}

export default Saved;