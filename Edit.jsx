import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function Edit() {
    // const [user, setUser] = useState({ name: "", email: "", mobile: "" })

//           const {id} = useParams();

//  useEffect(()=>{
//   axios.get(`http://localhost:3000/user/${id}`)
// .then(res=>
// {
//   setuser(res.data)
// })
// .catch(err=>{
//   console.log(err)
// })
//  },[id])

  return (

  <div>
     <h1>Update User Data</h1>
            <form onSubmit={submitHandler} >
                <input
                    type='text'
                    value={user.name}
                    onChange={e => setUser({ ...user, name: e.target.value })}
                    placeholder='Enter Your Name'
                    required

                />
                <input
                    type='email'
                    value={user.email}
                    onChange={e => setUser({ ...user, email: e.target.value })}
                    placeholder='Enter Your Email'
                    required
                />
                <input
                    type='text'
                    value={user.mobile}
                    onChange={e => setUser({ ...user, mobile: e.target.value })}
                    placeholder='Enter Your Mobile'
                    required
                />
                <button>Update Data</button>
            </form>

            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
            <h1>{user.mobile}</h1>
  </div>
    
  )
}

export default Edit
