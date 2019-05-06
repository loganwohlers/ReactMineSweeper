import React from 'react'
import GameBoard from './GameBoard'

class GameContainer extends React.Component {
    render() {
        return (
            <div>
                <GameBoard difficulty={this.props.difficulty} />
            </div>
        )
    }
}

export default GameContainer;
