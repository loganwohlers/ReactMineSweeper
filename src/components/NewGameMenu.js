import React from 'react'
import GameMenu from '../containers/GameMenu'

class NewGameMenu extends React.Component {

    render() {
        return (
            <div className='menu'>
              <button onClick={this.props.restart}>
                  RESTART
              </button>
              <GameMenu
                handleClick={this.props.restart}
                difficulty={this.props.difficulty} />
            </div>
        )
    }
}

export default NewGameMenu;
