import React, { Component } from 'react'
import './List.css'


export default class List extends Component {

    constructor() {
        super()
        this.state = {
            employee: [
                { id: 1, name: "Krishna", age: 29, salary: 90000 },
                { id: 2, name: "Preethi", age: 24, salary: 10000 },
                { id: 3, name: "Sandeep", age: 30, salary: 500000 },
                { id: 4, name: "Avinash", age: 29, salary: 60000 }
            ],
            marks: [99, 98, 100]
        }
    }


    render() {
        return (
            <div >
                {
                    this.state.employee.map((emp) => {
                        return (
                            <div className="emp" key={emp.id}>
                                <span>Employee name : {emp.name}</span>
                                <span>Employee age: {emp.age}</span>
                                <span>Employee salary: {emp.salary}</span>
                            </div>
                        )
                    })
                }
                {
                    this.state.marks.map((mark) => {
                        return (
                            <p>{mark}</p>
                        )
                    })
                }

            </div>
        )
    }
}
