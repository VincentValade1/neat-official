import { Link } from 'react-router-dom'
import '../styles/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faDeezer } from '@fortawesome/free-brands-svg-icons';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons';


function Header() {
    return (
        <header>
            <nav>
                <div>
                    <Link to='/'>HOME</Link>
                    <Link to='/biography'>BIO</Link>
                    <Link to='/discography'>DISCOGRAPHY</Link>
                    <a href='https://neatofficial.bandcamp.com/merch'>SHOP</a>
                    <Link to='/tour'>TOUR</Link>
                </div>
            
                <ul>
                    <a href="https://www.facebook.com/neatofficial"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="https://www.facebook.com/neatofficial"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="https://www.facebook.com/neatofficial"><FontAwesomeIcon icon={faDeezer} /></a>
                    <a href="https://www.facebook.com/neatofficial"><FontAwesomeIcon icon={faSpotify} /></a>
                    
                </ul>
            </nav>
        </header>
    )
}

export default Header;