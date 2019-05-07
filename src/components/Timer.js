import React from 'react'

class Timer extends React.Component {
    constructor() {
        super()
        this.state = {
            time: 0,
        }
    }

    componentDidUpdate(prevProps) {

        if (prevProps.active !== this.props.active) {
            this.startTimer()

        } else {

        }
    }

    //     let intervalId = setInterval(timer, 10000);
    // clearInterval(intervalId);

    startTimer = () => {
        let time = 0
        let interval = setInterval(() => {
            this.setState({
                time
            })
            time++;
        }, 1000)

    }

    render() {
        return <div>Time: {this.state.time}</div>
    }

    // handleClick = () => {
    //     this.setState(state => {
    //         if (state.status) {
    //             clearInterval(this.timer);
    //         } else {
    //             const startTime = Date.now() - this.state.runningTime;
    //             this.timer = setInterval(() => {
    //                 this.setState({ runningTime: Date.now() - startTime });
    //             });
    //         }
    //         return { status: !state.status };
    //     });
    // };
    // handleReset = () => {
    //     this.setState({ runningTime: 0, status: false });
    // };



}
export default Timer;