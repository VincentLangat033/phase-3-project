import React from 'react'
import './css/sidenavbar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import {NavLink} from 'react-router-dom';

function SideNavBar() {

  return (
    <div className='sidebar'>
           <div className='sidebarWrapper'>
               
               <ul className='sidebarList'>
                   <li className='sidebarListItem'>
                   <RssFeedIcon className='sidebarIcon'/>
                   <NavLink to="/houseform">
                   <button className='sidebarListItemText sideBarButton' >Add House</button>
                   </NavLink>
                   </li>
                   <li className='sidebarListItem'>
                     <NavLink to="/updatehousename">
                   <RssFeedIcon className='sidebarIcon'/>
                   <button className='sidebarListItemText sideBarButton'>Explore Houses</button>
                   </NavLink>
                   </li>
                   <li className='sidebarListItem'>
                   <RssFeedIcon className='sidebarIcon'/>
                   <button className='sidebarListItemText sideBarButton'>Feed</button>
                   </li>

               </ul>
               <button className='sidebarButton'>Show More</button>
               <hr className='sidebarHR'></hr>

         </div>

    </div>
  )
}

export default SideNavBar