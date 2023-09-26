import React, { Component } from 'react'

export default class ApiCallInClass extends Component {

    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((resp) => resp.json())
            .then((response) => {
                this.setState({ data: response })
            })
    }

    render() {
        return (
            <div>
                {this.state.data.map((res) => {
                    return (
                        <div style={{ border: "1px solid black" }}>
                            <p>{res.id}</p>
                            <p>{res.title}</p>
                            <p>{res.body}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}
