import React, { useEffect, useState } from 'react'
import axios from 'axios'

function AxiosAPICall() {

    const [data, setData] = useState([])
    const [postData, setPostData] = useState({})

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/albums')
            .then((res) => {
                setData(res.data)
            })
    }, [])

    function handlePostMethod() {
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            body: "Entri",
            title: "Entri class"
        }).then((res) => {
            setPostData(res.data)
        })
    }


    function hanldePUTMethod() {
        axios.put('https://jsonplaceholder.typicode.com/posts/1', {
            body: "Entri Elevate class",
            title: "Entri Batch - 7"
        }).then((res) => {
            setPostData(res.data)
        })
    }


    function handleDeleteMethod() {
        axios.delete('https://jsonplaceholder.typicode.com/posts/1')
            .then((res) => {
                setPostData(res.data)
            })
    }

    return (
        <div>
            {
                data.map((row) => {
                    return (
                        <>
                            <p>{row.id}</p>
                            <p>{row.title}</p>
                        </>
                    )
                })
            }

            <button onClick={handlePostMethod}>Call POST Method</button>
            <button onClick={hanldePUTMethod}>Call PUT Method</button>
            <button onClick={handleDeleteMethod}>Call DELETE Method</button>

            <p>{postData.id}</p>
            <p>{postData.title}</p>
            <p>{postData.body}</p>

        </div>
    )
}

export default AxiosAPICall