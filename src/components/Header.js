import {Link} from 'react-router-dom'
import logo from '../assets/img/logo_red.png'
import { useLocation } from 'react-router-dom'

function Header(){
    const locationPage = useLocation()
    let accueil = "navbar__link", about = "navbar__link"
    if(locationPage.pathname === '/'){
        accueil += " navbar__link--active"
    }
    if(locationPage.pathname === '/a_propos'){
        about += " navbar__link--active"
    }
    return(
        <header>
            <img className="logoKasa" src={logo} alt="Logo Kasa"/>
            <nav className='navbar'>
                <Link className={accueil} to="/">Accueil</Link>
                <Link className={about} id="a_propos" to="/a_propos">A propos</Link>
            </nav>
        </header>
    )
}

export default Header