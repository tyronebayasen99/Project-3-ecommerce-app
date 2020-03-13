import React from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import Nav1 from "../components/NavBottom";
import Input from "../components/Input";
import Button from "../components/Button";
import { useAuth } from '../context/auth';
import DateRange from "../components/DateRange";
// import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
// import { useSpring, animated } from 'react-spring';


//components
import Card from "../components/Card";
// import Animations from "../components/Animations";


function Index() {
    const { setAuthTokens } = useAuth();
    const { authTokens } = useAuth();
    // const [items, setitems] = useState([]);
    // const [itemSearch, setitemSearch] = useState("");

    function logOut() {
        setAuthTokens();
        localStorage.clear();
        window.location.reload();
    }

    return (
        <div>
            <Nav />
            <Nav1 />
            <Jumbotron />
            <div>
                <Row>

                    <Col size="xs-6 sm-6">
                        <Container>
                            <Input
                                placeholder="search for an item" />
                            <br></br>


                        </Container>
                    </Col>
                    <Col size="xs-3 sm-3">
                        <DateRange />
                    </Col>
                </Row>
            </div>

            <Container>
                <br/>
                <Card />
            </Container>


            {authTokens ? <Button onClick={logOut}>Log out</Button> : <div></div>}


        </div >
    );
}

export default Index;
