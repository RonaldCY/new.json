import React from "react";

class Counter extends React.Component {

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         count: props.initialCount
    //     }
    // }

    state = {
        count: 0
    };

    componentWillUnmount() {
        console.log("unmounting...");
    }

    componentDidMount() {
        console.log("mounting...");
    }

    // handleButtonCLick() {
    //     console.log("button clicked");
    //     console.log(this.state);
    // }

    increment = () => {
        console.log(this.state);
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement = () => {
        console.log(this.state);
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        console.log("render function called");
        return (
            <div>
                <div>count: {this.state.count}</div>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
            </div>
        );
    }
}

export default Counter;