import React from 'react'
import GameMenu from '../containers/GameMenu'
import SaveScore from './SaveScore'

class NewGameMenu extends React.Component {

    render() {
        return (
            <div className='menu'>
              <div>FINAL SCORE: {this.props.time}</div>
              <SaveScore
                time={this.props.time}
                difficulty={this.props.difficulty} />
              <GameMenu
                handleClick={this.props.restart}
                difficulty={this.props.difficulty} />
            </div>
        )
    }
}

export default NewGameMenu;
