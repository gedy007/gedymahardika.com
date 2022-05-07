import PropTypes from 'prop-types';
import SocmedIcons from '../components/global/socmedIcons';

export default function Footer(props) {
  return (
    <footer id="footer" style={props.timeoutModal ? { display: 'none' } : {}}>
      <SocmedIcons />
      <p className="copyright">
        &copy; Gedy Mahardika | Denpasar, Bali | Visit my{' '}
        <a href="https://github.com/gedy007">GitHub</a>
      </p>
    </footer>
  );
}

Footer.propTypes = {
  timeoutModal: PropTypes.bool,
};
