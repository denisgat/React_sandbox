import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        //set state
        this.state = { counter: 0 };
        //set event handlers
        this.decrement = this.decrement.bind(this);
        this.increment = this.increment.bind(this);
    }
    //set methods
    decrement() {
        this.setState({
            counter: this.state.counter - 1
        })
    }
    increment() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        return (
            <div>
                <h1
                    id="counter"
                >
                 {this.state.counter}
                </h1>
                <button
                    type="button"
                    id="decrement"
                    onClick= {this.decrement}
                >
                    Decrease #
                </button>
                <button
                    type="button"
                    id="increment"
                    onClick={this.increment}
                >
                    Increase #
                </button>
            </div>
        )
    }
}

export default Counter;