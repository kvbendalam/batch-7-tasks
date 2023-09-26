import React, { Component } from 'react'

export default class Login extends Component {

    constructor() {
        super()
        this.state = {
            username: "",
            password: ""
        }
        this.handleUsername = this.handleUsername.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }

    handleUsername(event) {
        console.log(event)
        this.setState({
            username: event.target.value
        })
    }

    handlePassword(event) {
        console.log(event)
        this.setState({
            password: event.target.value
        })
    }

    submitHandler(event) {
        event.preventDefault()
        console.log(this.state.username, this.state.password)
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.submitHandler}>
                    <input type="text" value={this.state.username} onChange={this.handleUsername} />
                    <input type="password" value={this.state.password} onChange={this.handlePassword} />
                    <input type="submit" name="submit" />
                </form>

                {/* <p>{this.state.username}</p>
                <p>{this.state.password}</p> */}
            </div>
        )
    }
}
