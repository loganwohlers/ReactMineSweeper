import React from 'react'
import GameMenu from '../containers/GameMenu'

class NewGameMenu extends React.Component {

    render() {
        return (
            <div className='menu'>
              {}
              <div>FINAL SCORE: {this.props.time}</div>
              <GameMenu
                handleClick={this.props.restart}
                difficulty={this.props.difficulty} />
            </div>
        )
    }
}

export default NewGameMenu;
