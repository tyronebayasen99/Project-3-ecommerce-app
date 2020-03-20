import React from "react";
import "./style.css";
import { MdGetApp } from "react-icons/md";
import Button from "../Button";
import { useAuth } from "../../context/auth";
import { DBConnection } from "auth0-js";
import { Redirect } from "react-router-dom";
import Axios from "axios";

const Card = ({ price, depart, arrival, itinerary = [] }) => {
  const { authTokens } = useAuth();

  function handleSave() {
    let token = localStorage.getItem("tokens");
    Axios.post("/api/flight/save", {
      seatPrice: price,
      layovers: itinerary.length,
      token: token,
      destination: arrival,
      departure: depart
    }).then(result => console.log(result));
  };

  function login() {
    window.location.assign("/login");
  }

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Depart: {depart} </h5>
        <h5 className="card-title">Arrival: {arrival}</h5>
        <p className="card-text">
          Trip & description:{" "}
          {itinerary.map((item, i) => {
            return <h5 key={i}>{item.departingAirport}</h5>;
          })}{" "}
        </p>
        <p className="card-text">Price: {price}</p>

        {authTokens ? <Button onClick={handleSave}>
          {" "}
          Save your trip <MdGetApp />
        </Button> : <Button onClick={login}>
            {" "}
          Save your trip <MdGetApp />
          </Button>}
      </div>
    </div>
  );
};
export default Card;
