import React from 'react'
import Square from '../components/Square'


class GameBoard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      grid: Array(6).fill().map(() => new Array(6).fill(0)),
      mines: 10
    }
  }

  componentDidMount() {
    this.randomMines()
  }

  randomMines() {
    let mines = 0
    let copyGrid = [...this.state.grid]

    while (mines < this.state.mines) {
      let x = Math.floor(Math.random() * this.state.grid.length)
      let y = Math.floor(Math.random() * this.state.grid.length)
      if (copyGrid[x][y] === 0) {
        copyGrid[x][y] = 'b'
        mines++
      }
    }
    this.setState({grid: copyGrid})
  }

  render() {
    const style = {
      textAlign: "center",
      tableLayout: 'fixed',
    }

    const gameGrid = this.state.grid.map((row, i) => {
      return (
        <tr key={"row" + i}>
          {row.map((col, j) => {
            return (
              <Square
                key={i + ":" + j}
                data={this.state.grid[i][j]} />
              )
            })}
        </tr>
      )
    })

    return (
      <table cellSpacing="0" id="table" style={style}>
          <tbody>
            {gameGrid}
          </tbody>
      </table>

    )
  }
}

export default GameBoard;

   // piece[i][j]
    // materialize(piece) {
    //     let copyGrid = [...this.state.grid]
    //     for (let i = 0; i < piece.length; i++) {
    //         for (let j = 0; j < piece[i].length; j++) {
    //             copyGrid[i + 4][j + 4] = piece[i][j];
    //practice offset
    // grid[i + x][j + y] = b[i][j];
    //         }
    //     }
    //     this.setState({ grid: copyGrid })
    // }
