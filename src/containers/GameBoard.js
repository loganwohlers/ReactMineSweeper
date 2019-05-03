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
    this.setNeighborCount()
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
    this.setState({ grid: copyGrid })
  }

  generatePossibilities(x, y) {
    return [
      [x - 1, y - 1],
      [x - 1, y],
      [x - 1, y + 1],
      [x, y + 1],
      [x, y - 1],
      [x + 1, y - 1],
      [x + 1, y],
      [x + 1, y + 1]
    ]

  }

  neighborMines(x, y, copyGrid) {
    let bombCount = 0
    let poss = this.generatePossibilities(x, y)
    for (var i = 0; i < poss.length; i++) {
      let xx = poss[i][0]
      let yy = poss[i][1]
      if (xx >= 0 && yy >= 0 && xx < copyGrid.length && yy < copyGrid.length) {
        let coor = (copyGrid[xx][yy])
        if (coor === 'b') {
          bombCount++
        }
      }
    }
    return bombCount
  }

  setNeighborCount() {
    let copyGrid = [...this.state.grid]
    let updateGrid = [...this.state.grid]
    for (var i = 0; i < copyGrid.length; i++) {
      for (var j = 0; j < copyGrid.length; j++) {
        if (copyGrid[i][j] !== 'b') {
          updateGrid[i][j] = this.neighborMines(i, j, copyGrid)
        }
      }
    }
    this.setState({ grid: updateGrid })
  }

  clearEmpty() {


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


