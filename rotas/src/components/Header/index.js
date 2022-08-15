import {Link} from 'react-router-dom'
import {RoutesApp} from '../../routs'
function Header (props){
    return (
        <header>
            <h2> Isso é um header</h2>
            <Link to='/sobre'>Sobre</Link>
        </header>
    )
}


export default Header