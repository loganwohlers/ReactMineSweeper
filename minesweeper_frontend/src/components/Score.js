import React from 'react'

class Score extends React.Component {
  render() {
    let ordered = this.props.scores.sort((a, b) => b.score - a.score).reverse()
    return (
      <div className='score'>
        LEVEL: {this.props.difficulty}
        <ol className='scoreList'>
          {ordered.map((score, index) => {
            return (
              <li key={index}>
                score: {score.score}
                <br/>
                {score.user.username}
              </li>
            )
          })}
        </ol>
      </div>
    )
  }
}

export default Score
