import React from 'react'

class Square extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            clicked: false
        }
    }

    // onClick = (e) => {
    //     let val = !this.state.clicked
    //     this.setState({ clicked: val })
    // }
    render() {
        const color = this.props.data !== 0 ? 'red' : 'white'
        return (
            <td >
                <div className="square" style={{ backgroundColor: color }} >
                    {this.props.data}
                </div>
            </td>
        )
    }
}

export default Square;