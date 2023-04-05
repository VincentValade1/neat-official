
import '../styles/Footer.css'
import ExtLinksBar from './ExtLinksBar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faDeezer } from '@fortawesome/free-brands-svg-icons';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faBandcamp } from '@fortawesome/free-brands-svg-icons';
import { faAmazon } from '@fortawesome/free-brands-svg-icons';
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer>
            <ExtLinksBar className="extLinksBar-footer">
                <li><a href="https://www.facebook.com/neatofficial" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                <li><a href="https://www.instagram.com/neat_official/" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li><a href="https://www.youtube.com/channel/UCnyivxSDcL8PCqe4nJ5nQlA" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faYoutube} /></a></li>
                <li><a href="https://open.spotify.com/album/6GoAKvb58k1Kq5Fq0KPh8s" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faSpotify} /></a></li>
                <li><a href="https://www.deezer.com/fr/album/301384677" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faDeezer} /></a></li>
                <li><a href="https://music.apple.com/us/album/neat/1613557237" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faApple} /></a></li>
                <li><a href="https://neatofficial.bandcamp.com/album/neat" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faBandcamp} /></a></li>
                <li><a href="https://soundcloud.com/user-799171731" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faSoundcloud} /></a></li>
                <li><a href="https://www.amazon.fr/music/player/artists/B0BGHDGCTV/neat" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faAmazon} /></a></li>
                <li><a href="https://www.tiktok.com/@neat.tiktok" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faTiktok} /></a></li>
            </ExtLinksBar>
        </footer>
    )
}

export default Footer;