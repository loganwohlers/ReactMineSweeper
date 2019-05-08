import React from 'react'
import GameMenu from '../containers/GameMenu'
import SaveScore from './SaveScore'

class NewGameMenu extends React.Component {
  render() {
    return (
      <div className='menu'>
        <div>FINAL SCORE: {this.props.time}</div>

        {this.props.won ?
          <SaveScore
            time={this.props.time}
            difficulty={this.props.difficulty} /> :
            null}
          <GameMenu
            handleClick={this.props.restart}
            difficulty={this.props.difficulty} />
      </div>
    )
  }
}

export default NewGameMenu;
