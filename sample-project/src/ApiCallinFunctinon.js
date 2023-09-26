import React, { useEffect, useState } from 'react'

export default function ApiCallinFunctinon() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((resp) => resp.json())
            .then((response) => {
                setData(response)
            })
    })

    return (
        <div>
            {data.map((res) => {
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
