import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import Nav1 from "../components/NavBottom";
import Input from "../components/Input";
import Button from "../components/Button";
import DateRange from "../components/DateRange";
import PriceRange from "../components/PriceRange/index"
// import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import { useSpring, animated } from 'react-spring';


//components
import Card from "../components/Card";
import Animations from "../components/Animations";


function Index() {

    const [items, setitems] = useState([]);
    const [itemSearch, setitemSearch] = useState("");


    const [showPriceSlider, setShowPriceSlider] = useState(false)
    return (
        <div>
            <Nav>
            </Nav>
            <Nav1></Nav1>
            <Jumbotron ></Jumbotron>



            <Row>

                <Col size="xs-6 sm-6">
                    <Container>
                        {/* <Input
                            placeholder="search for an item" />
                        <br></br> */}



                        {showPriceSlider === false ?
                            <button onClick={() => { setShowPriceSlider(true) }}>Choose Price Range</button>


                            :

                            <>
                                <PriceRange />

                                <button onClick={() => { setShowPriceSlider(false) }}>Set Price Range</button>

                            </>
                        }
                    </Container>
                </Col>
                <Col size="xs-6 sm-6">


                    <DateRange></DateRange>
                </Col>
            </Row>


            <Container>
                <br></br>
                <Card></Card>
            </Container>

        </div >
    );
}

export default Index;
