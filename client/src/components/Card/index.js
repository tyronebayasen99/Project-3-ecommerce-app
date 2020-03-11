import React from "react";
import "./style.css";
import { MdShoppingCart } from 'react-icons/md';

const Card = () => {
    return (
        <div className="card">
            {/* <img src="..." className="card-img-top" alt="..."> */}
            <div className="card-body">
                <h5 className="card-title">Flight Location</h5>
                <p className="card-text">Trip & description </p>
                <p className="card-text">Price</p>
                <button> Save your trip <MdShoppingCart /></button>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>

    );


}


export default Card;