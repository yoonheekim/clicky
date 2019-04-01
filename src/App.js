import React, { Component } from 'react';
import './App.css';
// import images from "./images.json"

class App extends Component {

  state = {
    // images : images,
    score : 0,
    topScore : 0
  }

  render() {
    return (
      <div className="App">
        <header>
          {/* <nav className="navbar">
            <ul>
              <li className="brand">
                <a href="/">Clicky Game</a>
              </li>
              <li className="">Click an image to begin!</li>
              <li>Score: 0 | Top Score: 0</li>
            </ul>
          </nav> */}
          <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/">Clicky Game</a>
            <li className="navbar">Click an image to begin!</li>
            <li className="navbar">Score: 0 | Top Score: 0</li>   
          </nav>
        </header>
        
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Clicky Game!</h1>
            <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
