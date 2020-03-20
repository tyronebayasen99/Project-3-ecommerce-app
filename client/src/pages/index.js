import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import Nav1 from "../components/NavBottom";
import Input from "../components/Input";
import Button from "../components/Button";
import { List, ListItem } from "../components/List";
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

  const [depart, setDepartState] = useState([]);
  const [arrival, setArrivalState] = useState([]);

  const [flights, setFlightState] = useState([{ price: "$0" }]);

  // const handleSelect = ranges => {
  //   console.log(ranges);
  //   setDateState({ selection: ranges.selection });
  // };

  const handleDepartChange = e => {
    console.log(e.target.value);
    setDepartState(e.target.value);
  };

  const handleDestinationChange = e => {
    console.log(e.target.value);
    setArrivalState(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    API.searchFlights(depart, arrival)
      .then(response => {
        // console.log(response);
        // console.log(response.data.length);
        response.data.map(item => {
          if (item.flightSchedule) {
            item.itinerary = Object.keys(item.flightSchedule).map(key => {
              return item.flightSchedule[key];
            });
          }
        });

        console.log(response.data);

        setFlightState(response.data);
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
      <Container>
        <Row>
          {flights.length ? (
            <List>
              {flights.map(flight => (
                <Test
                  price={flight.seatPrice}
                  arrival={flight.arriving}
                  depart={flight.departing}
                  itinerary={flight.itinerary}
                />
              ))}
            </List>
          ) : (
            <h3>No Results</h3>
          )}
        </Row>
      </Container>

      {authTokens ? <Button onClick={logOut}>Log out</Button> : <div></div>}
    </div>
  );
}

export default Index;
