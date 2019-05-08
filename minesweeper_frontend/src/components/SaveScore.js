import React from 'react'

class SaveScore extends React.Component {
  constructor(props){
    super(props)
  }

  updateDbScore = (e) => {
    e.preventDefault()
    let {time, difficulty} = this.props;
    let username = e.target.children[0].children[0].value;
    fetch('http://localhost:3000/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({'username': username})
    })
    .then((res) => res.json())
    .then(data=>console.log(data))
    // .then(() => {
    // fetch('http://localhost:3000/games', {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Accept": "application/json"
    //   },
    //   body: JSON.stringify({
    //     username: username,
    //     score: time,
    //     difficulty: difficulty
    //   })
    // })})
  }

  render() {
    return (
      <div>
      Submit score?
        <form onSubmit={this.updateDbScore}>
          <label>
            Name:
            <input type='text' name='username' />
          </label>
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default SaveScore
