import React from 'react'

class Square extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      clicked: false
    }
  }

  render() {
    return (
      <td >
        <div className="square" >
          {this.props.data}
        </div>
      </td>
    )
  }
}

export default Square;
