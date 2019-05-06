import React from 'react';
import GameContainer from './containers/GameContainer'
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
    this.setState({difficulty})
  }

  render() {
    return (
      <div className="App">
        <GameMenu
          difficulty={this.state.difficulty}
          handleDifficultyClick={this.handleDifficultyClick} />
        <GameContainer
          difficulty={this.state.difficulty} />
      </div>
    );
  }
}

export default App;
