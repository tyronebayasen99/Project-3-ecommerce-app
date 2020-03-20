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
  }

  function login() {
    window.location.assign("/login");
  }

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Depart: {depart} </h5>
        <h5 className="card-title">Arrival: {arrival}</h5>
        <div className="card-text">
          Trip & description:{" "}
          {itinerary.map((item, i) => {
            const departTime = new Date(item.departTime);
            const arriveTime = new Date(item.arriveTime);
            const departHours = departTime
              .toLocaleTimeString
              // (navigator.language,
              // { hour: "2-digit", minute: "2-digit" }).replace(
              //   /(:\d{2}| [AP]M)$/,
              //   ""
              // )
              ();
            const arriveHours = arriveTime.toLocaleTimeString();
            return (
              <div>
                <p>
                  {item.departingAirport}-{item.arrivalAirport}
                </p>
                <p>Departing time: {departHours}</p>
                <p>Arriving time: {arriveHours}</p>
              </div>
            );
          })}{" "}
        </div>
        <p className="card-text">Price: {price}</p>

        {authTokens ? (
          <Button onClick={handleSave}>
            {" "}
            Save your trip <MdGetApp />
          </Button>
        ) : (
          <Button onClick={login}>
            {" "}
            Save your trip <MdGetApp />
          </Button>
        )}
      </div>
    </div>
  );
};
export default Card;
