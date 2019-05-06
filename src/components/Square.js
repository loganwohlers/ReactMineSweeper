import React from 'react'

class Square extends React.Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         revealed: false
    //     }
    // }

    handleClick = (e) => {
      this.props.handleSquareClick(e, this.props.coords)
        //
        // if (this.props.data === 'b') {
        //     alert("YOU LOSE")
        // } else if (this.props.data === 0) {
        //     this.props.handleZeroSquareClick(e, this.props.coords)
        // } else {
        //   this.props.handleSquareClick(e, this.props.coords)
        // }
        // let revealed = true
        // this.setState({ revealed })
    }

    render() {
        let cssClick = this.props.revealed ? 'clickedsquare' : 'unclickedsquare'
        return (
            <td >
                <div className="square" onClick={this.handleClick}>
                    <div className={cssClick}>
                        {this.props.data}
                    </div>
                </div>
            </td >
        )
    }
}

export default Square;
