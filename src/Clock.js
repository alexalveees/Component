import React, {Component} from "react";

export class Clock extends Component {
    state = {
        date: new Date() 
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            console.log('upadate time');
            this.setState({
                date: new Date()
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    render() {
        return (
            <h1>{this.state.date.toLocaleTimeString()}</h1>
        )
    }
}