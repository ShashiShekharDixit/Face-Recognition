import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex list-none justify-around items-center p-2'>
        <ul className='flex px-2 gap-10 items-center bg-fuchsia-500'>
            <li><Link to= "/">Home</Link> </li>
            <li><Link to= "/Attendance">Attendance</Link> </li>
            <li><Link to= "/Register">Register</Link> </li>
            <li><Link to= "/About">About</Link> </li>
        </ul>
    </div>
  )
}

export default Navbar