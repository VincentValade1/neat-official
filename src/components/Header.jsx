import { Link } from 'react-router-dom'
import '../styles/Header.css'
import ExtLinksBar from './ExtLinksBar';

function Header() {
    return (
        <header>
            <nav>
                <div className='mainNav'>
                    <Link to='/'>HOME</Link>
                    <Link to='/biography'>BIO</Link>
                    <Link to='/discography'>DISCOGRAPHY</Link>
                    <a href='https://neatofficial.bandcamp.com/merch'>SHOP</a>
                    <Link to='/tour'>TOUR</Link>
                </div>
                <ExtLinksBar className="extLinksBar-header" />
            </nav>
        </header>
    )
}

export default Header;