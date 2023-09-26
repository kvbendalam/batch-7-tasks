import React, { useContext } from 'react'
import { context } from './ComponentA'

export default function ComponentC() {
    const con = useContext(context)
    return (
        <div>
            <p>ComponentC</p>
            <p>{con}</p>
        </div>
    )
}
