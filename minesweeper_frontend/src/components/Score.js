import React from 'react'

class Score extends React.Component {
    render() {
        return (
            <li>
                {this.props.score}
                {this.props.difficulty}
                {this.props.name}
            </li>
        )
    }
}

export default Score