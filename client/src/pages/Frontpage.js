import React from "react";
// import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import Nav1 from "../components/NavBottom";
// import Input from "../components/Input";
// import Button from "../components/Button";
// import DateRange from "../components/DateRange";
// import API from "../utils/API";
// import { Container, Row, Col } from "../components/Grid";
import FrontJumbotron from "../components/FrontJumbotron";


function FrontPage() {
    return (
        <div>
            <Nav/>
            <Nav1/>
            <FrontJumbotron/>
        </div>
    );
}

export default FrontPage;