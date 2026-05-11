import React, { useState } from 'react';
import axios from 'axios';

function Insert() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    // e.preventDefault();
    axios.post('http://localhost:3000/user', form)
      .then(res => {
        alert("User Inserted!");
        setForm({ name: '', email: '', mobile: '' });
      })
      .catch(err => console.log(err));
  }

  return (
    <>
    <div className='headu'>
      <h2>Insert User</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required /><br />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required /><br />
        <input type="text" name="mobile" placeholder="Mobile" value={form.mobile} onChange={handleChange} required /><br />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Insert;
