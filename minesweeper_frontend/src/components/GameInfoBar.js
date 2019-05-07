import React from 'react'
import Timer from './Timer'

class GameInfoBar extends React.Component {
    render() {
        return (
            <div className='infoMenu'>

                Mines Left: {this.props.mines}
                <Timer
                  active={this.props.active}
                  time={this.props.time} />
            </div>
        )
    }
}

export default GameInfoBar
