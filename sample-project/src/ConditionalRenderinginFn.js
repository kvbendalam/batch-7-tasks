import React from 'react'
import List from './List'
import Sample from './Sample';

let age = 24;

export default function ConditionalRenderinginFn() {
    return (
        <div>
            {age > 20 ? (<List />) : (<Sample />)}
        </div>
    )
}
