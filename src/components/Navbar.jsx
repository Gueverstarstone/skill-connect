import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to='/home'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/admin'>Admin</NavLink>
          </li>
          <li>
            <NavLink to='/workerDetails'>WorkerDetails</NavLink>
          </li>
          <li>
            <NavLink to='/workers'>Workers</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
