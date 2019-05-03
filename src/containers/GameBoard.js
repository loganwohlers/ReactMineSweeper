import React from 'react'
import Square from '../components/Square'

const block = [
    [1, 1],
    [1, 1]
]

class GameBoard extends React.Component {

    constructor() {
        super()
        this.state = {
            grid: Array(20).fill().map(function () { return new Array(10).fill(0) })

        }
    }
    // piece[i][j]
    materialize(piece) {
        let copyGrid = [...this.state.grid]
        for (let i = 0; i < piece.length; i++) {
            for (let j = 0; j < piece[i].length; j++) {
                copyGrid[i + 4][j + 4] = piece[i][j];
                // grid[i + x][j + y] = b[i][j];
            }
        }
        this.setState({ grid: copyGrid })
    }

    componentDidMount() {
        this.materialize(block)
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
                            <Square key={i + ":" + j} data={this.state.grid[i][j]} />
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