import { NavLink } from 'react-router-dom'

/**
 * Navbar with links.
 */
const Navbar = () => {
    return (
        <nav className="cc0-navbar">
            <NavLink to='/' className="text-center text-red-600 font-bold">CC0 Sounds</NavLink>
            <div className="links">
                <NavLink exact activeClassName='cc0-link-active' className='cc0-link' to='/'>Home</NavLink>
                <NavLink exact activeClassName='cc0-link-active' className='cc0-link' to='/sounds'>Sounds</NavLink>
                <NavLink exact activeClassName='cc0-link-active' className='cc0-link' to='/about'>About</NavLink>
            </div>
        </nav>
    )
}

export default Navbar