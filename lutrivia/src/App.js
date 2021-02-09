import React from 'react';
import NewGameButton from './NewGameButton'
import Game from './Game'
import Scoreboard from './Scoreboard'
import data from './data'

class App extends React.Component {
  state={
    questionList: data.questions,
    scores: []
  }

  get3Questions = () => {
    return [data.questions[Math.floor(Math.random() * 10)], data.questions[Math.floor(Math.random() * 10)], data.questions[Math.floor(Math.random() * 10)]]
  }

  endGame = (gameData) => {
    this.setState(prevState => {return {scores: prevState.scores.concat(gameData)}})
  }

  render(){
    return (
      <div>
        <h1>Lutrivia</h1>
        <NewGameButton />
        <Game questions={this.get3Questions()} endGame={this.endGame}/>
        <Scoreboard scores={this.state.scores}/>
      </div>
    );
  }
}

export default App;
