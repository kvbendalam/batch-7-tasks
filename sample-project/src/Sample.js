import React from 'react'

function Sample(props) {
  return (
    <>
      <div>
        <h1>{props.name} is belongs to {props.class}</h1>
        <p>{props.para}</p>
      </div>

    </>
  )
}

export default Sample