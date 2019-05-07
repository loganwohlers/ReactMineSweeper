import React from 'react'

class Timer extends React.Component {
    constructor() {
        super()
        this.state = {
            time: 0,
            isOn: false,
        }

    }

    startTimer = () => {
        let time = 0
        setInterval(() => {
            this.setState({
                time
            })
            time++;
        }, 1000);
    }

    componentDidMount() {
        this.startTimer();
    }

    render() {
        return <div>Time: {this.state.time}</div>
    }



}
export default Timer;