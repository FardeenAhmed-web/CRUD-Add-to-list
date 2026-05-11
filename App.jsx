import React from 'react'
import {NavLink ,Route, Routes } from 'react-router-dom'
import Insert from './component/Insert'
import Update from './component/Update'
import View from './component/View'
import Home from './component/Home'
import Single from './component/Single'
import Edit from './component/Edit'

function App() {
  return (
    <>

      <ul>
     
       <div className='my'> <h1>My Website</h1></div>


       <li>
        <NavLink to="/home" className={({ isActive }) => isActive ? 'active' : ''}
        >
          <h2>Home</h2></NavLink>
        </li>
        <li>
          <NavLink to="/view"><h2>view</h2></NavLink>
          </li>
        <li>
          <NavLink to="/insert"><h2>Insert</h2></NavLink>
          </li>
         <li>
          <NavLink to="/update"><h2>update</h2></NavLink>
          </li>
          <li>
            <NavLink to='/delete'><h2>Delete</h2></NavLink>
            </li>
        
      </ul>
    
      
      <Routes>
<Route path='/home' element={<Home/>}/>
<Route path='insert' element={<Insert/>}/>
<Route path='/update' element={<Update/>}/>
<Route path='/view' element={<View/>}/>
<Route path="/single/:id" element={<Single/>}/>
<Route path="/edit/:id" element={<Edit/>}/>
      </Routes>


    </>

  
  )
}

export default App
