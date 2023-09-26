import React, { Component } from 'react'

export default class Counter extends Component {

    constructor() {
        super()
        this.state = {
            counter: 0,
            name: "Krishna"
        }
        this.add = this.add.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    add() {
        this.setState({ counter: this.state.counter + 1 })
    }

    decrement() {
        this.setState({ counter: this.state.counter - 1 })
    }

    render() {
        return (
            <div>
                <h1>Counter</h1>
                <p>{this.state.counter}</p>
                <button onClick={this.add}>Increment Counter</button>
                <button onClick={this.decrement}>Decrement Counter</button>
            </div>
        )
    }
}
