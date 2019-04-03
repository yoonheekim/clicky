import React from "react";
import "./style.css";

function GameCard(props){
    return (
        <div className="col-md-3">
            <div className="card grow" onClick={()=>props.clickedCard(props.id)}>
                <img src={props.image} className="card-img" alt={props.id}></img>
            </div>
        </div>
        
    );
}

export default GameCard;
