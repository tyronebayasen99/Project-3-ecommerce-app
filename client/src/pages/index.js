import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import Nav1 from "../components/NavBottom";
import Input from "../components/Input";
import Button from "../components/Button";
import API from "./../utils/API";
import { useAuth } from "../context/auth";
import DateRange from "../components/DateRange";
import PriceRange from "../components/PriceRange/index";
// import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import { useSpring, animated } from "react-spring";

//components
import Test from "../components/testCard";
import Card from "../components/Card";
import Animations from "../components/Animations";

function Index() {
  const { setAuthTokens } = useAuth();
  const { authTokens } = useAuth();
  const [items, setitems] = useState([]);
  const [itemSearch, setitemSearch] = useState("");
  let [state, setState] = useState("NoFlights");
  const [depart, setDepartState] = useState([]);
  const [arrival, setArrivalState] = useState([]);
  const [flights, setFlightState] = useState([]);
  let flightArray = [];

  const handleDepartChange = e => {
    //console.log(e.target.value);
    setDepartState(e.target.value);
  };

  const handleDestinationChange = e => {
    //console.log(e.target.value);
    setArrivalState(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    setState("Flights");
    API.searchFlights(depart, arrival)
      .then(res => {
        //console.log(res.data);
        let data = res.data;
        data.forEach(object => {
          let x = Object.entries(object);
          flightArray.push(x);
        })
        console.log(flightArray[1][1]);
        setFlightState(flightArray);
        setDepartState("");
        setArrivalState("");
      })
      .catch(err => console.log(err));
  };

  const [showPriceSlider, setShowPriceSlider] = useState(false);
  function logOut() {
    setAuthTokens();
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div>
      <Nav></Nav>
      <Nav1></Nav1>
      <Jumbotron></Jumbotron>

      <div>
        <Row>
          <Col size="xs-6 sm-6">
            <Container>
              <Input
                onChange={handleDepartChange}
                value={depart}
                placeholder="Departure"
              />
              <Input
                onChange={handleDestinationChange}
                value={arrival}
                placeholder="Destination"
              />
              <br></br>
              <Button onClick={handleFormSubmit} type="success">
                Search
              </Button>
            </Container>
          </Col>
          <Col size="xs-3 sm-3">
            <DateRange></DateRange>

            {showPriceSlider === false ? (
              <button
                onClick={() => {
                  setShowPriceSlider(true);
                }}
              >
                Choose Price Range
              </button>
            ) : (
                <>
                  <PriceRange />

                  <button
                    onClick={() => {
                      setShowPriceSlider(false);
                    }}
                  >
                    Set Price Range
                </button>
                </>
              )}
          </Col>
        </Row>
      </div>

      <div>
        <Container>
          <Row>
            <Col size="xs-12">
              {flights.map(flight => {
                return (
                  <Test
                    price={flight[0][1]}
                    arrival={flight[3][1]}
                    depart={flight[2][1]}
                    itinerary={flight[1][0]}
                  />
                );
              })}
            </Col>
          </Row>
        </Container>
      </div>
      {authTokens ? <Button onClick={logOut}>Log out</Button> : <div></div>}
    </div>
  );
}

export default Index;
