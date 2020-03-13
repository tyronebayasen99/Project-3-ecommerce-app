import React from "react";
import "./style.css";
import { MdLoyalty } from 'react-icons/md';
import { MdAirplanemodeActive } from 'react-icons/md';

const Card = () => {
    return (

        <div className="card text-center" id="EntireClass" >
            <div className="card-header">
                Your Saved Trip
  </div>
            <div className="card-body">
                <h5 className="card-title">Flight Location <MdAirplanemodeActive></MdAirplanemodeActive></h5>
                <p className="card-text">Date and Price of trip</p>
                <a href="#" className="btn btn-primary">Link to buy  <MdLoyalty /></a>
            </div>
            <div className="card-footer text-muted">
                2 days ago
  </div>
        </div>

    );
}

export default Card;