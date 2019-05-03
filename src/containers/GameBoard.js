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
    let all = [
      [x - 1, y - 1],
      [x - 1, y],
      [x - 1, y + 1],
      [x, y + 1],
      [x, y - 1],
      [x + 1, y - 1],
      [x + 1, y],
      [x + 1, y + 1]
    ]
    return all.filter((coords, i) => {
      let xx = all[i][0]
      let yy = all[i][1]
      return (xx >= 0 && yy >= 0 && xx < this.state.grid.length && yy < this.state.grid.length)
    })
  }

  neighborMines(x, y, copyGrid) {
    let bombCount = 0
    let poss = this.generatePossibilities(x, y)
    for (var i = 0; i < poss.length; i++) {
      let xx = poss[i][0]
      let yy = poss[i][1]
      let coords = (copyGrid[xx][yy])
      if (coords === 'b') {
        bombCount++
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
  //breadth first search
  handleSquareClick = (e, coords) => {
    let copyGrid = [...this.state.grid]
    let visited = {}
    visited[coords] = true
    let queue = [coords]
    while (queue.length > 0) {
      let current = queue.pop()
      if (copyGrid[current[0]][current[1]] === 0) {
        copyGrid[current[0]][current[1]] = 'X'
      }

      //check all these and if it's not 0 OR mine set it to clicked
      let zeroCheck = this.generatePossibilities(current[0], current[1])

      // && copyGrid[n[0]][n[1]]
      let bordering = zeroCheck.filter(n => copyGrid[n[0]][n[1]] !== 0)
      // for (let i = 0; i < neighbors.length; i++) {
      // }


      bordering.forEach(ss => {
        let currValue = copyGrid[ss[0]][ss[1]]
        copyGrid[ss[0]][ss[1]] = currValue + "**"
      })

      //fitler for 0's
      let neighbors = zeroCheck.filter(n => copyGrid[n[0]][n[1]] === 0)
      for (let i = 0; i < neighbors.length; i++) {
        if (!visited[neighbors[i]]) {
          queue.push(neighbors[i])
          visited[neighbors[i]] = true
        }
        //visit current
      }
    }
    console.log("out of queue")
    this.setState({ grid: copyGrid })
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
                data={this.state.grid[i][j]}
                coords={[i, j]}
                handleSquareClick={this.handleSquareClick} />
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


