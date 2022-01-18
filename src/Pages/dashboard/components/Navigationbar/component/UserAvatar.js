import userAvatar from '../../../../../assets/avatar.png'
import styles from './style.module.css'
const UserAvatar = () => {
    return (
        <div className={styles.userAvatar} >
            <img src={userAvatar} alt="user avatar" width="100%" height=""/>
        </div>
    )
}

export default UserAvatar
