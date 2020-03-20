import React from "react";
import "./style.css";
import { MdGetApp } from "react-icons/md";

const Card = ({ price, depart, arrival, itinerary = [] }) => {
  return (
    <div className="card">
      {/* <img src="..." className="card-img-top" alt="..."> */}
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
        <button>
          {" "}
          Save your trip <MdGetApp />
        </button>
        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>
  );
};
export default Card;
