import React from 'react'
import {Data} from './MenuItemData'
import logo from '../../../../assets/logo.png'
import SideBarItem from './SideBarItem'
import styles from './style.module.css'
const SideBarNav = () => {
    // console.log(Data);
    return (
        <aside className={styles.sidebarContainer} >
           <div >
               <div className={styles.sideLogo}>
                   <img src={logo} alt="business loan" width="80px" height=""/>
               </div>
               {Data.map((item,index) => 
                <SideBarItem key={index} data={item}/>
                )}
            </div> 
        </aside>
    )
}

export default SideBarNav
