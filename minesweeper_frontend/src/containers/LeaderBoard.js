import React from 'react'
import Score from '../components/Score'

class LeaderBoard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            beginner: [],
            intermediate: [],
            difficult: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/games', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
            .then((res) => res.json())
            .then(scores => {
                this.setScoresState(scores)
            })
    }

    setScoresState = (scores) => {
        let scoreLevels = {
            beginner: [],
            intermediate: [],
            difficult: []
        }

        scores.forEach(ss => {
            scoreLevels[ss.difficulty.toLowerCase()].push(ss)
        })

        this.setState({
            beginner: scoreLevels.beginner,
            intermediate: scoreLevels.intermediate,
            difficult: scoreLevels.difficulty
        })

    }

    render() {
        return (
            <div>
                <Score scores={this.state.beginner} />
                <Score scores={this.state.intermediate} />
                <Score scores={this.state.difficult} />

            </div >
        )
    }
}

export default LeaderBoard
    // < ul >
    //
