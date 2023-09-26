import React from 'react'

function Person(props) {
    return (
        <div>
            <h1>This is from Functional based component</h1>
            <p>{props.name}</p>
            <p>{props.age}</p>
            <p>{props.mobile}</p>
            <p>{props.email}</p>
        </div>
    )
}

export default Person