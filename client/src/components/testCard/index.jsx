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
        <p className="card-text">
          Trip & description:{" "}
          {itinerary.map((item, i) => {
            return <h5 key={i}>{item.departingAirport}</h5>;
          })}{" "}
        </p>
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
