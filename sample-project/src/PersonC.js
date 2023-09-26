import React, { Component } from 'react'

export default class PersonC extends Component {

    constructor(props) {
        super(props)
        this.props = props
    }

    render() {
        return (
            <div>
                <h1>This is from Class based component:</h1>
                <p>{this.props.name}</p>
                {/* <p>{this.props.mobile}</p>
                <p>{this.props.age}</p>
                <p>{this.props.email}</p> */}
            </div>
        )
    }
}
