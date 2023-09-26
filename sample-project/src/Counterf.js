import React, { useState } from 'react'

function Counterf() {

    const [counter, setCounter] = useState(0)

    const incrmentCounter = () => {
        setCounter(counter + 1)
    }

    const decrementCounter = () => {
        setCounter(counter - 1)
    }

    return (
        <div>
            <h1>Functional based component</h1>
            <p>{counter}</p>
            <button onClick={incrmentCounter}>Increment Counter</button>
            <button onClick={decrementCounter}>Decrement Counter</button>

        </div>
    )
}

export default Counterf