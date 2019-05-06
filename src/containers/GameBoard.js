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

  //uses a 2d array of the 8 possible tiles around any given x,y coordinate and
  //then filters out those which could not exist on currents state's board length
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

  //checks- through a copy of the current state grid- the value of all neighboring tiles and returns # of mines
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

  //reassigns the values in the state grid to accuratly reflect the number of mines contained in neighboring tiles
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

  //breadth first search to "click" all suitable 0 tiles and reveal all suitable # tiles

  handleSquareClick = (e, coords) => {
    let currentValue = this.state.grid[coords[0]][coords[1]]
    if (currentValue === 'b') {
      // loose game function
      alert('you lose')
    } else if (currentValue === 0) {
      this.handleZeroSquareClick(coords)
    } else {
      let copyGrid = [...this.state.grid]
      copyGrid[coords[0]][coords[1]] = currentValue + "*"
      this.setState({ grid: copyGrid })
    }
  }

  //this whole method needs to be cleaned up a bit
  handleZeroSquareClick = (coords) => {
    let copyGrid = [...this.state.grid]
    let visited = {}
    visited[coords] = true
    let queue = [coords]

    while (queue.length > 0) {
      let current = queue.pop()

      if (copyGrid[current[0]][current[1]] === 0) {
        copyGrid[current[0]][current[1]] = ' *'
      }

      //grab all possibile neighboring tiles
      let poss = this.generatePossibilities(current[0], current[1])

      // filter possibilities for numbe tile and reveal them
      let bordering = poss.filter(n => copyGrid[n[0]][n[1]] !== 0)

      bordering.forEach(ss => {
        let currValue = copyGrid[ss[0]][ss[1]]
        // * is revealed
        copyGrid[ss[0]][ss[1]] = currValue + "*"
      })

      //filter for suitable 0/blank tiles and visit them on search
      let neighbors = poss.filter(n => copyGrid[n[0]][n[1]] === 0)
      for (let i = 0; i < neighbors.length; i++) {
        if (!visited[neighbors[i]]) {
          queue.push(neighbors[i])
          visited[neighbors[i]] = true
        }
      }
    }

    this.setState({ grid: copyGrid })
  }

  handleFlagClick = (e, coords) => {
    let copyGrid = [...this.state.grid];
    let stringValue = copyGrid[coords[0]][coords[1]] + '';
    if (stringValue.includes('F')) {
      copyGrid[coords[0]][coords[1]] = stringValue.slice(0, 1)
    } else {
      copyGrid[coords[0]][coords[1]] += 'F'
    }
    this.setState({ grid: copyGrid })
  }

  render() {
    const style = {
      textAlign: "center",
      tableLayout: 'fixed',
    }

    //render the current borad via passing in values from state grid to Square components and
    //arranging them in a table
    const gameGrid = this.state.grid.map((row, i) => {
      return (
        <tr key={"row" + i}>
          {row.map((col, j) => {
            let revealed = false;
            let flagged = false;
            let currentValue = this.state.grid[i][j].toString()
            currentValue.includes('*') ? revealed=true : revealed=false
            currentValue.includes('F') ? flagged=true : flagged=false
            return (
              <Square
                key={i + ":" + j}
                revealed={revealed}
                data={currentValue.charAt(0)}
                flagged={flagged}
                coords={[i, j]}
                handleSquareClick={this.handleSquareClick}
                handleFlagClick={this.handleFlagClick} />
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
