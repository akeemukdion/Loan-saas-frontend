import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './style.module.css'
const SideBarItem = ({subNav,data}) => {
    return (
        <div className={styles.menuGrp} >
           <ul >
              <NavLink to={data.route}  style={({ isActive }) =>console.log(isActive)} >
              <li className={styles.menuItem}>
           <i className={data.iconName}></i> 
           <p>{data.title}</p>
           <ul>

           {/* {data.subNav && data.subNav.map(submenu=><li className={styles.subMenuItem} key={submenu.title} >
               <li>

           <i className={submenu.iconName}></i> 
           <p>{submenu.title}</p>
               </li>
           </li> )} */}
           </ul>
               </li>
              </NavLink>
            </ul>  
        </div>
    )
}

export default SideBarItem
