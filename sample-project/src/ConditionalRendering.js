import React, { Component } from 'react'
import Employee from './Employee'
import Sample from './Sample'


export default class ConditionalRendering extends Component {

    constructor() {
        super()
        this.state = {
            age: 24
        }
    }

    render() {
        return (
            <div>
                {this.state.age > 25 ? (<Employee />) : (<Sample />)}
            </div>
        )
    }
}
