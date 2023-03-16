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

function ExtLinksBar({className}) {
    return (
        <ul className={`${className}`}>
            <a href="https://www.facebook.com/neatofficial"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="https://www.facebook.com/neatofficial"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.facebook.com/neatofficial"><FontAwesomeIcon icon={faYoutube} /></a>
            <a href="https://www.facebook.com/neatofficial"><FontAwesomeIcon icon={faSpotify} /></a>
            <a href="https://www.facebook.com/neatofficial"><FontAwesomeIcon icon={faDeezer} /></a>
            <a href="https://www.facebook.com/neatofficial"><FontAwesomeIcon icon={faApple} /></a>
            <a href="https://www.facebook.com/neatofficial"><FontAwesomeIcon icon={faBandcamp} /></a>
            <a href="https://www.facebook.com/neatofficial"><FontAwesomeIcon icon={faSoundcloud} /></a>
            <a href="https://www.facebook.com/neatofficial"><FontAwesomeIcon icon={faAmazon} /></a>
            <a href="https://www.facebook.com/neatofficial"><FontAwesomeIcon icon={faTiktok} /></a>
        </ul>
    )
}

export default ExtLinksBar