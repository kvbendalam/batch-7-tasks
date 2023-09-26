import React from 'react'
import ComponentB from './ComponentB'

export const context = React.createContext()

function ComponentA() {
    return (
        <context.Provider value={"Entri"}>
            <ComponentB />
        </context.Provider>
    )
}

export default ComponentA