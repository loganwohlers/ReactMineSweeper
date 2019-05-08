import React from 'react'
import LeaderBoard from './LeaderBoard'

class GameMenu extends React.Component {
    constructor(props) {
        super(props)

        this.handleChoice = this.handleChoice.bind(this)
    }

    handleChoice(event) {
        const difficulty = event.target.innerText.toLowerCase();
        this.props.handleClick(difficulty)
    }

    render() {
        return (
            <>
                <div className='menu'>
                    <h3>Choose Difficulty:</h3>
                    <p onClick={this.handleChoice}>Beginner</p>{' '}
                    <p onClick={this.handleChoice}>Intermediate</p>{' '}
                    <p onClick={this.handleChoice}>Difficult</p>
                </div>
                <LeaderBoard />
            </>
        )
    }
}

export default GameMenu;
