import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import images from "./images.json"
import GameCard from "./components/GameCard";

class App extends Component {

  state = {
    images : images,
    score : 0,
    topScore : 0
  }

  clickedCard = id => {
    
  }
  
  shuffleArray = array => {
    let i = array.length - 1;
      for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
  }
  render() {
    
    return (
      <div className="App">
        <header>
          <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/">Clicky Game</a>
            <li className="navbar">Click an image to begin!</li>
            <li className="navbar">Score: 0 | Top Score: 0</li>   
          </nav>
        </header>
        
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Puppy Clicky Game!</h1>
            <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
          </div>
        </div>
        <Wrapper>
          {this.shuffleArray(this.state.images).map(image => <GameCard image={image}/>)}
        </Wrapper>
        <footer class="footer">
          <div class="bottom">Clicky Game! 
            <img alt="react" src="assets/images/react.svg"></img>
          </div>
        </footer>
        
      </div>
    );
  }
}

export default App;
