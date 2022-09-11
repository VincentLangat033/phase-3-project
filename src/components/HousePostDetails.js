import React from 'react'
import HouseItems from './HouseItems';
import { NavLink } from 'react-router-dom'


function HousePostDetails({houseName, onPostClick}) {
    
    function handlePostClick(){
  
    }
  return (
    <div>
        <NavLink to='/updatehousename'>
        <button  onClick={handlePostClick} className='imageButton imageButton3'> Explore</button>
        </NavLink>
        

    </div>
  )
}

export default HousePostDetails;