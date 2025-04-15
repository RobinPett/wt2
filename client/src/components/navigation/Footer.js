import { Link } from 'react-router-dom'

/**
 * Footer component.
 */
const Footer = () => {
    return (
        <footer className='cc0-footer'>
            <div className='cc0-logo'>
                <Link to='/' className="text-center text-red-600 font-bold">CC0 Sounds</Link>
                <div className="cc0-copyright">
                    <p>Robin Pettersson</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer