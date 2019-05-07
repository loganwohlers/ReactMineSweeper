import React from 'react';
import GameBoard from './containers/GameBoard'
import GameMenu from './containers/GameMenu'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      difficulty: 'beginner'
    }
    this.handleDifficultyClick = this.handleDifficultyClick.bind(this);
  }

  handleDifficultyClick(difficulty) {
    this.setState({ difficulty })
  }

  render() {
    return (
      <div className="App">
        <GameMenu
          difficulty={this.state.difficulty}
          handleDifficultyClick={this.handleDifficultyClick} />
        <GameBoard difficulty={this.state.difficulty} />
      </div>
    )
  }
}

export default App;
