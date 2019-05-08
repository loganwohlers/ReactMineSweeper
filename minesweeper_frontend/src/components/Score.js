import React from 'react'

class Score extends React.Component {
    render() {
        const { difficulty, score, user_id } = this.props.score
        return (
            <li>
                {score}
                {difficulty}
                {user_id}
            </li>
        )
    }
}

export default Score