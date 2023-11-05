import React, { useEffect, useState } from 'react'
import './User.css'

function User() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((resp) => setUsers(resp))
    }, [])

    return (
        <table id="customers">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>City</th>
            </tr>
            {users.map((user) => {
                return (
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.address.city}</td>
                    </tr>
                )
            })}
        </table>
    )
}

export default User