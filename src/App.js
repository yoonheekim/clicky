import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import images from "./images.json"
import GameCard from "./components/GameCard";
import Nav from "./components/Nav"

class App extends Component {

  state = {
    message : "Click an image to begin!",
    images,
    unclickedImages : images,
    score: 0,
    topScore: 0
  }

  clickedCard = id => {
    // if click unclicked image -> score up
    if(this.state.unclickedImages.find(image=> image.id === id)){
      this.setState({
        score: this.state.score +1,
        unclickedImages : this.state.images.filter(image=> image.id !== id),
        message : "You guessed correctly!",
      });

    // if click clicked image -> restart
    } else {
      this.setState({
        message: "You guessed incorrectly!",
        unclickedImages : this.state.images,
        score : 0,
        topScore : (this.state.score > this.state.topScore) ? this.state.score : this.state.topScore
      })
    }

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
          <Nav 
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
          />
        </header>
        
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Puppy Clicky Game!</h1>
            <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
          </div>
        </div>
        <Wrapper>
          {this.shuffleArray(this.state.images).map(image => 
          <GameCard 
            clickedCard={this.clickedCard}
            image={image.image}
            id={image.id}
          />          
          )}
        </Wrapper>
        <footer className="bg-primary text-white p-4 mt-5">
          <div className="container ">
            <div className="bottom">Puppy Clicky Game! by <span className="badge badge-warning">Yoonhee</span>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
