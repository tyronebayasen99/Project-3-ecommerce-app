import React from "react";
import "./style.css";
import image from "./img/berlin.jpg";
import Animations from "../Animations/index";

function Jumbotron() {

    return (

        <div className="jumbotron text-center">
            <img src={image} className="image1" />
            <h1>Maximize your life.</h1>
            <a target="_blank" rel="noopener noreferrer" href="http://www.recipepuppy.com/about/api/" className="underTag">
                In the end, we only regret not living life to the max.
      </a>
        </div>
    );
}

export default Jumbotron;
