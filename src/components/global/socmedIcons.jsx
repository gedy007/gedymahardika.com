import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function SocmedIcons() {
  return (
    <ul className="icons">
      <li><a href="https://linkedin.com/in/gedymahardika" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} />
      </a></li>
      <li><a href="https://facebook.com/gedymahardika" target="_blank">
        <FontAwesomeIcon icon={faFacebook} />
      </a></li>
      <li><a href="https://www.instagram.com/gedymahardika" target="_blank">
        <FontAwesomeIcon icon={faInstagram} />
      </a></li>
      <li><a href="https://github.com/gedy007" target="_blank">
        <FontAwesomeIcon icon={faGithub} />
      </a></li>
    </ul>
  )
};
