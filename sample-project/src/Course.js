import React from 'react'
import { useParams } from "react-router-dom"

function Course() {

    const { id } = useParams()

    const clickHandler = () => {
        window.location.href = "/login"
    }

    return (
        <div>
            <p>{id}</p>
            <button onClick={clickHandler}>Click here</button>
        </div>
    )
}

export default Course