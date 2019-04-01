import React from "react";
import "./style.css";

function GameCard(props){
    return (
        <div className="col-md-3">
            <div className="card grow">
                <img src={props.image.image} className="card-img-top" alt={props.image.id}></img>
            </div>
        </div>
        
    );
}

export default GameCard;
