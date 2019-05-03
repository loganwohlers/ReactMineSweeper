import React from 'react'
import Square from '../components/Square'

class GameBoard extends React.Component {

    constructor() {
        super()
        this.state = {
            grid: Array(20).fill(Array(20).fill(0)),
        }
    }

    render() {
        const style = {
            textAlign: "center",
            tableLayout: 'fixed',
        };

        const gameGrid = this.state.grid.map((row, i) => {
            return (
                <tr key={"row" + i}>
                    {row.map((col, j) => {
                        return (
                            <Square key={"col" + j} />
                        )
                    }
                    )}
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