import React from "react";
import "./style.css";
import { MdShoppingCart } from 'react-icons/md';

const Card = () => {
    return (
        <div class="card">
            {/* <img src="..." class="card-img-top" alt="..."> */}
            <div class="card-body">
                <h5 class="card-title">Flight Location</h5>
                <p class="card-text">Trip & description </p>
                <p class="card-text">Price</p>
                <button> Add to Cart <MdShoppingCart /></button>
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>

    );


}


export default Card;