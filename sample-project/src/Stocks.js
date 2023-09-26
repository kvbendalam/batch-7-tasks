import React from 'react'
import "./Stocks.css"

function Stocks() {
    return (
        <div>
            <h1>Welcome to stocks</h1>
            <p>This is Stocks componet</p>

            <span className="spanStyles">This is span element</span>

            <div id="divS">This is div</div>

            <div style={{ background: "blue", fontSize: "48px", marginTop: "10px" }}>This is another div</div>
        </div>
    )
}

export default Stocks