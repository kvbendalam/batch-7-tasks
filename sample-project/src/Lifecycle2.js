import React, { Component } from 'react'

export default class Lifecycle2 extends Component {
    constructor() {
        super()
        this.state = {
            name: "Entri"
        }
    }

    componentDidMount() {
        document.title = this.state.name;
        setTimeout(() => {
            this.setState({ name: "Entri Elevate" })
        }, 5000)
    }

    componentDidUpdate() {
        document.title = this.state.name;
    }

    render() {
        return (
            <div>Lifecycle2</div>
        )
    }
}
