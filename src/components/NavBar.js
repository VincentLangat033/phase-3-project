import React from 'react'
import './css/header.css'
import { NavLink } from 'react-router-dom'
import RssFeedIcon from '@mui/icons-material/RssFeed';
function NavBar() {
  return (
      <div className='headerContent'>
        <NavLink to='/'>
        <a href='#'> <button className='navHms'> Pool_House </button> </a>
        </NavLink>
        <NavLink to="/">
        <button className='navEdit'>Home</button>
        </NavLink>
        <NavLink to="/about">
        <button className='navEdit'>About</button>
        </NavLink>
        <NavLink to="/register">
        <button className='navEdit'>Register</button>
        </NavLink>
        <NavLink to="/login">
        <button className='navEdit'>Log In</button>
        </NavLink>
        <NavLink to="/houseform">
          <button className='navEdit'>Add House</button>
          </NavLink>
          <NavLink to="/updatehousename">
          <button className='navEdit'>View House</button>
          </NavLink>

        
 
    </div>
  )
}

export default NavBar