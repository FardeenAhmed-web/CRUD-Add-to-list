
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function Single() {
   
    const {id} = useParams();
const [res,setres]= useState([]);
 useEffect(()=>{
  axios.get(`http://localhost:3000/user/${id}`)
.then(res=>
{
  setres(res.data)
})
.catch(err=>{
  console.log(err)
})
 },[id])

  return (
   
      <div>
        <h1> single user data {id}</h1>
        <hr />
        <div className='card'>
<h2> {res.name}</h2>
<h2> {res.email}</h2>
<h2> {res.mobile}</h2>
        </div>
      </div>
   
   
  )
}

export default Single
