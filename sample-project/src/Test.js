import React, { Component } from "react"


class Test extends Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div>{this.props.data}</div>
        )
    }
}

export default Test