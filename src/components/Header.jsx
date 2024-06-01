import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

export default function Header(props) {
  return (
    <header id="header" style={props.timeoutModal ? { display: 'none' } : {}}>
      <div className="logo">
        <FontAwesomeIcon icon={faCode} transform="grow-18" />
      </div>
      <div className="content">
        <div className="inner">
          <h1>Gedy Mahardika</h1>
          <p>Software Engineer</p>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <a
              href={void 0}
              onClick={() => {
                props.onOpenArticle('intro');
              }}
            >
              Intro
            </a>
          </li>
          <li>
            <a
              href={void 0}
              onClick={() => {
                props.onOpenArticle('market');
              }}
            >
              DigMa
            </a>
          </li>
          <li>
            <a
              href={void 0}
              onClick={() => {
                props.onOpenArticle('dev');
              }}
            >
              Dev
            </a>
          </li>
          <li>
            <a
              href={void 0}
              onClick={() => {
                props.onOpenArticle('contact');
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeoutModal: PropTypes.bool,
};
