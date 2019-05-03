import React from 'react'

class Square extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            clicked: false
            //display hidden-- once clicked -> true
        }
    }

    handleClick = (e) => {
        if (this.props.data === 'b') {
            alert("YOU LOSE")
        }
        let clicked = !this.state.clicked
        this.setState({ clicked })
    }

    render() {
        let cssClick = this.state.clicked ? 'clickedsquare' : 'unclickedsquare'
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
