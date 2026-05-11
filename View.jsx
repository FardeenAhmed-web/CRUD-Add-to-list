import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function View() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/user")
            .then(res => {
                setUsers(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    } ,[]);

    const list = users.map(user => <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.mobile}</td>
        <td> <Link to= {`../single/${user.id}`}> single view</Link></td>
    </tr>)


    return (
        <>
            <h1> View User Data </h1>
            <hr />
            <table border={1} width="100%">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>email</th>
                        <th>mobile</th>
                        <th> Action</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {
                        list
                    }

                </tbody>
            </table>
        </>
    )
}

export default View