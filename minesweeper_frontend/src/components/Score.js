import React from 'react'

class Score extends React.Component {
  render() {
    // let ordered = this.props.scores.sort((a, b) => b.score - a.score).reverse()

    let ordered = this.props.scores.sort((a, b) => a.score - b.score)

    return (
      <div className='score'>
        <h3>{this.props.difficulty.toUpperCase()}</h3>

        <ol className='scoreList'>
          {ordered.map((score, index) => {
            return (
              <li key={index}>
                <span>{score.user.username}</span>
                <span>{score.score} s</span>
              </li>
            )
          })}
        </ol>

      </div>
    )
  }
}

export default Score

// <ol className='scoreList'>
//   {ordered.map((score, index) => {
//     return (
//       <li key={index}>
//         {index+1}. {score.user.username} - {score.score} s
//       </li>
//     )
//   })}
// </ol>
