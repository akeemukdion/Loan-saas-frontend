import React from 'react'
import UserAvatar from './component/UserAvatar'
import userAvatar from '../../../../assets/avatar.png'
import FormInput from '../../../../components/FormInput/index'
import { NavWrapper } from './navbar.style'
const index = ({toggleOnClick}) => {
    return (
        <NavWrapper className="Navcontainer">
            <span onClick={toggleOnClick} className='toggleIcon_onMobile'>&#9776;</span>
           <div className="navItems">
               <div className="navSearch">
                   <FormInput type="search" placeholder="search here" bordercolor />
               </div>
               <div className="navItemGroup"><i className='fa fa-bell' />
               <UserAvatar userDetails={userAvatar}/>
               </div>
           </div>
        </NavWrapper>
    )
}

export default index
