import React from "react";
import "./style.css";

function Nav(props){
    return (
        <nav className="navbar navbar-dark bg-primary">
        {/* navbar-expand-lg navbar-dark bg-primary */}
            <a className="navbar-brand" href="/"><i className="fas fa-mouse-pointer mr-3"></i>Clicky Game</a>
            <li className="navbar nav-item"><h2 className="text-white">{props.message}</h2></li>
            <li className="navbar nav-item"><h5 className="text-white">Score: {props.score} | Top Score: {props.topScore}</h5></li>   
        </nav>
        
    );
}

export default Nav;
