import React from "react";
import "./style.css";
import { MdLoyalty, MdFlightTakeoff } from 'react-icons/md';
import { MdAirplanemodeActive } from 'react-icons/md';
import Axios from "axios";

const Card = () => {
    let token = localStorage.getItem("tokens")
    Axios.get("/api/flight/" + token).then(result => console.log(result));



    return (
        <div>
            <h5 className="savedTripsTitle">Saved Trips Coming Soon!- <div className="soonText">Save flights that appeal to you with a link that will redirect the user to a place where they can buy the displayed ticket. Also, hit "Share" to send the trip description and link to buy to friends for planning group trips!</div></h5>
            <div className="card text-center" id="EntireClass" >
                <div className="card-header">
                    Saved Trip
            </div>
                <div className="card-body">
                    <h5 className="card-title">Flight Location <MdAirplanemodeActive></MdAirplanemodeActive></h5>
                    <p className="card-text">Date and Price of trip</p>
                    <a href="#" className="btn btn-primary">Link to buy  <MdLoyalty /></a>
                    <a href="#" className="btn btn-primary">Share <MdFlightTakeoff /></a>
                </div>
                <div className="card-footer text-muted">
                </div>
            </div>
        </div>
    );
}

export default Card;