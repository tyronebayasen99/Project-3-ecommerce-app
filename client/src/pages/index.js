import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import Nav1 from "../components/NavBottom";
import Input from "../components/Input";
import Button from "../components/Button";
// import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";


//components
import Card from "../components/Card";


function Index() {

    const [items, setitems] = useState([]);
    const [itemSearch, setitemSearch] = useState("");
    return (
        <div>
            <Nav> <Input
                placeholder="search for an item" />
            </Nav>
            <Nav1></Nav1>
            <Jumbotron ></Jumbotron>

            {/* <Row>
                <Col size="md-12"> */}

            <Container>
                {/* <Row>
                            <Col size="xs-9 sm-10">
                                <Input
                                    // onChange={handleBookChange}
                                    // value={booksSearch}
                                    placeholder="Search For a Book"
                                />
                            </Col>
                            <Col size="xs-3 sm-2">
                                <Button
                                    // onClick={handleFormSubmit}
                                    type="success"
                                    className="input-lg" >
                                    Search
                    </Button>
                            </Col>
                        </Row> */}

                <Card></Card>
            </Container>
            {/* 
                </Col>
            </Row > */}
        </div >
    );
}

export default Index;
