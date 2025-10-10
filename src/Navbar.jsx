import { Link } from 'react-router-dom';

import logo from './assets/logo.png'

export default function Navbar() {
    return <nav className="nav">
        <Link to="/" className="site-title">
            <img src={logo} alt="Logo" />
        </Link>
        <ul>
        <Link to="/">Home</Link>
        <Link to="/pages/projects">Projects</Link>
        </ul>
    </nav>
}