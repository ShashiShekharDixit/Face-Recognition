import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex list-none justify-around items-center p-2 bg-slate-900 py-4'>
        <ul className='flex px-2 gap-10 items-center bg-slate-300 py-1'>
            <li><Link to= "/">Home</Link> </li>
            <li><Link to= "/Attendance">Attendance</Link> </li>
            <li><Link to= "/Register">Register</Link> </li>
            <li><Link to= "/About">About</Link> </li>
        </ul>
    </div>
  )
}

export default Navbar