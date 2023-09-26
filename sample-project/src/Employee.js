import React, { Component } from 'react'

export default class Employee extends Component {

    constructor() {
        super()
        this.state = {
            name: "Krishna",
            age: 29,
            mobile: 181818181,
            email: "info@gmail.in"
        }
    }

    updateData = () => {
        this.setState({
            name: "Sesharao",
            age: 30,
            mobile: 92929292,
            email: "adfadsf@gmail.com"
        })
    }


    render() {        
        return (
            <>
                <p>Employee</p>
                <p>Name : {this.state.name}</p>
                <p>Age : {this.state.age}</p>
                <p>Mobile : {this.state.mobile}</p>
                <p>Email : {this.state.email}</p>
                <button onClick={this.updateData}>Update details</button>
            </>
        )
    }
}
