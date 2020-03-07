import React from "react";
import "./style.css";
import image from "./img/berlin.jpg";

function Jumbotron() {

    return (

        <div className="jumbotron text-center">
            <img src={image} class="image1" />
            <h1>Maximize your life</h1>
            <a target="_blank" rel="noopener noreferrer" href="http://www.recipepuppy.com/about/api/" class="underTag">
                In the end, we only regret not living life to the max.
      </a>
        </div>
    );
}

export default Jumbotron;
