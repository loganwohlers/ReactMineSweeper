import React from 'react'

class GameInfoBar extends React.Component {
    render() {
        return (
            <div className='infoMenu'>
                Mines Left: {this.props.mines}  Time:  1:00
            </div>
        )
    }
}

export default GameInfoBar