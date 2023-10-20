import Logo from '../img/Frame.svg'
import Dashboard from '../img/dashboard.svg'
import Settings from '../img/settings.svg'
import Power from '../img/power.svg'

export default function SideBar(){
    return(
        <div className='sideBar'>  
            <img src={Logo} />
            <div className='sideBarNav'>
                <div className='sideBarContent'>
                    <img src={Dashboard}></img>
                    <h2 className='Label'>Dashboard</h2>
                </div>
                <div className='sideBarContent'>
                    <img src={Settings}></img>
                    <h2 className='Label'>Ajustes</h2>
                </div>
                <div className='sideBarContent'>
                    <img src={Power}></img>
                    <h2 className='LabelDisconnect'>Desconectar</h2>
                </div>
            </div>
      </div>
    )
}