import React from 'react'
import Score from '../components/Score'


class LeaderBoard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            scores: []
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
            .then(scores => this.setState({ scores }))
    }

    listScores = () => {

    }


    render() {
        console.log(this.state.scores)
        return (
            <div>
                TEST!!!!!
                <ul>
                    {this.state.scores.map((ss, idx) => {
                        return <Score key={idx} score={ss} />
                    })}
                </ul>
            </div>
        )
    }
}

export default LeaderBoard