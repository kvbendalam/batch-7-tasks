import React, { Component } from 'react'

export default class Lifecyclce1 extends Component {
    constructor() {
        super()
        this.state = {
            age: 29,
        }
    }

    componentDidMount() {
        console.log("This is component did mount")
    }

    render() {
        return (
            <div>Lifecyclce1</div>
        )
    }
}
