import React from 'react'
import {NavLink } from 'react-router-dom'
import { ItemWrapper } from './sidebarItem.styles'
const SideBarItem = ({iconName,data}) => {
    return (
        <ItemWrapper>
           <ul >
              <li >
              <NavLink to={data.route} className="menuItem">
           <i className={iconName}></i> 
           <p>{data.title}</p>
              </NavLink>
               </li>
            </ul>  
        </ItemWrapper>
    )
}

export default SideBarItem
