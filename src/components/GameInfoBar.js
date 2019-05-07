import React from 'react'
import Timer from './Timer'

class GameInfoBar extends React.Component {
    render() {
        return (
            <div className='infoMenu'>

                Mines Left: {this.props.mines}
                <Timer active={this.props.active} />
                <button onClick={this.props.restart}>
                    RESTART
                </button>
            </div>
        )
    }
}

export default GameInfoBar