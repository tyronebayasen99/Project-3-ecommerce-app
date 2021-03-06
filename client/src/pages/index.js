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
import { MdMonetizationOn } from "react-icons/md";

//components
import Test from "../components/testCard";
import Card from "../components/Card";
import Animations from "../components/Animations";

function Index() {
  const { setAuthTokens } = useAuth();
  const { authTokens } = useAuth();

  const [depart, setDepartState] = useState([]);
  const [arrival, setArrivalState] = useState([]);

  const [flights, setFlightState] = useState([
    { seatPrice: "Example", arriving: "Example", departing: "Example" }
  ]);

  // const handleSelect = ranges => {
  //   console.log(ranges);
  //   setDateState({ selection: ranges.selection });
  // };

  const handleDepartChange = e => {
    //console.log(e.target.value);
    setDepartState(e.target.value.toUpperCase());
  };

  const handleDestinationChange = e => {
    //console.log(e.target.value);
    setArrivalState(e.target.value.toUpperCase());
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

  return (
    <div>
      <Nav></Nav>
      <Nav1></Nav1>
      <Jumbotron></Jumbotron>

      <div>
        <Row>
          <div className="searchContainer">
            <div className="ranges">
              <h5 className="guideText">
                Coming Soon!-
                <div className="soonText">
                  Enter date and price range to find flights to somewhere you
                  didnt even know you wanted to go!
                </div>{" "}
              </h5>

              <DateRange></DateRange>
              <div className="pricesRange">
                {showPriceSlider === false ? (
                  <Button
                    onClick={() => {
                      setShowPriceSlider(true);
                    }}
                  >
                    Choose Price Range
                  </Button>
                ) : (
                  <>
                    <PriceRange />

                    <Button
                      onClick={() => {
                        setShowPriceSlider(false);
                      }}
                    >
                      Set Price Range
                    </Button>
                  </>
                )}
              </div>
            </div>
            <div className="destDep">
              <h5 className="guideText">
                Enter Airport Codes (Ex: SMF, JFK, LAX, etc.) to Begin Searching
                For Upcoming Flights!
              </h5>

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
              </Container>
            </div>

            <Button
              onClick={handleFormSubmit}
              type="success"
              className="searchBtn"
            >
              Search
            </Button>
          </div>
        </Row>
      </div>
      <div className="resultsBox">
        <Container>
          <Row>
            {flights.length > 1 ? (
              <h3 className="tripsPopulated">Trips Populated!</h3>
            ) : (
              <div></div>
            )}
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
      </div>
    </div>
  );
}

export default Index;
