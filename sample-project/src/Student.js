import React, { Component } from 'react'

export default class Student extends Component {

    constructor() {
        super()
        this.state = {
            marks: {
                telugu: 99,
                english: 100,
                hindi: 99,
                computers: 100
            },
            total: ''
        }
    }

    calculte = () => {
        this.setState({
            total: this.state.marks.telugu + this.state.marks.english + this.state.marks.hindi + this.state.marks.computers
        })
    }

    render() {
        return (
            <div>

                <p>Telugu : {this.state.marks.telugu}</p>
                <p>English : {this.state.marks.english}</p>
                <p>Hindi : {this.state.marks.hindi}</p>
                <p>Computers : {this.state.marks.computers}</p>

                <button onClick={this.calculte}>Click here to calculate Total Marks</button>
                <p>Total Marks : {this.state.total}</p>
            </div>
        )
    }
}
