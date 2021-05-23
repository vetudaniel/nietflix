import './Navigation.css'
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav>
            <Link to="/"> <h1 className="logo">Niet<span className="logo-text">flix</span></h1></Link>
            <ul className="nav-links">
                <Link to="/login"><li className="loginBtn" >Login</li></Link>
                <Link to="/getstarted"><li  className="navBtn">Try FREE</li></Link>
            </ul>
        </nav>
    )
}

