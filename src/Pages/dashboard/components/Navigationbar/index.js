import React from 'react'
import UserAvatar from './component/UserAvatar'
import userAvatar from '../../../../assets/avatar.png'
import styles from './style.module.css'
import FormInput from '../../../../components/FormInput/index'
const index = ({subNav}) => {
    return (
        <nav className={styles.Navcontainer} >
           <div className={styles.navItems}>
               <div className={styles.navSearch}>
                   <FormInput type="search" placeholder="search here" bordercolor />
               </div>
               <div className={styles.navItemGroup}><i className='fa fa-bell' styles={{fontSize:"22px",color:"red",cursor:"pointer"}}/>
               <UserAvatar userDetails={userAvatar}/>
               </div>
           </div>
        </nav>
    )
}

export default index
