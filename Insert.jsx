import axios from 'axios'
import React, { useState } from 'react'

function Insert() {

    const [user, setUser] = useState({ name: "", email: "", mobile: "" })

    const handleSubmit = () => {
        axios.post("http://localhost:3000/user", user)
         .then(res => {
      
        setres({ name: '', email: '', mobile: '' });
      })
      .catch(err => console.log(err));
  
    }

    return (
        <>
            <h1> Registration Form</h1>

<div className='form'>
          
                <div className='insert'>
                       <label htmlFor="user.name"> Name</label>
                <input
                    type='text'
                    value={user.name}
                    onChange={e => setUser({ ...user, name: e.target.value })}
                    placeholder='Enter Your Name'
                    required

                />
             
                     <label htmlFor="user.email"> Email</label>
                <input 
                    type='email'
                    value={user.email}
                    onChange={e => setUser({ ...user, email: e.target.value })}
                    placeholder='Enter Your Email'
                    required
                    
                />
                <label htmlFor="user.mobile"> Mobile</label>
                <input
                    type='text'
                    value={user.mobile}
                    onChange={e => setUser({ ...user, mobile: e.target.value })}
                    placeholder='Enter Your Mobile'
                    required
                />
                
                 <button onClick={handleSubmit}>Submit</button>
                </div>
            
          </div>

        </>
    )
}

export default Insert