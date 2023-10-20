import Search from '../img/search.svg'
import Notification from '../img/notification.svg'
import ProiflePic from '../img/profile.svg'

export default function TopBar(){
    return(
        <div className='Header'>
        <h1 className='HelloUser'> Olá, User</h1>
            <div className='UserNav'>
                <img src={Search} />
                <img src={Notification} />
                <div className='Profile'>
                    <img src={ProiflePic} />
                    <h1 className='Username'>User</h1>
                </div>
            </div>
      </div>
    )
}