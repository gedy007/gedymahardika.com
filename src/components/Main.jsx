import PropTypes from 'prop-types';

import ContactForm from '../components/global/contactForm';
import SocmedIcons from '../components/global/socmedIcons';

export default function Main(props) {
  const close = (
    <div
      className="close"
      onClick={() => {
        props.onCloseArticle();
      }}
    ></div>
  );

  return (
    <div
      id="main"
      style={props.timeoutModal ? { display: 'flex' } : { display: 'none' }}
    >
      <article
        id="intro"
        className={`${props.article === 'intro' ? 'active' : ''} ${
          props.articleTimeout ? 'timeoutModal' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Introduction</h2>
        <span className="image main">
          <img src="/static/images/gedymahardika01.jpg" alt="" />
        </span>
        <p>
          Hi there! My name Gedy Mahardika, you can call me Gedy. My favorite
          pets are cats. My hobbies are playing badminton, cycling, making
          capuccino and I love tech stuff.
        </p>
        <p>
          For me, it is so exciting to explore the unknown unknown, knowing that
          I know nothing is a bless. This is what keeps me learning and
          discovering new things every day.
        </p>
        {close}
      </article>

      <article
        id="market"
        className={`${props.article === 'market' ? 'active' : ''} ${
          props.articleTimeout ? 'timeoutModal' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Digital Marketing</h2>
        <span className="image main">
          <img src="/static/images/pic02.jpg" alt="" />
        </span>
        <p>
          I had 5 years experience in digital marketing before getting into
          software development. I can say that it was a time where I put what I
          learned in college into practice.
        </p>
        <h3>What I know:</h3>
        <i>
          SEO, SEM,{' '}
          <a
            href="https://analytics.google.com/analytics/academy/certificate/1617fDyuRluK8cvygPPNFQ"
            style={{ color: 'Orange' }}
            target="_blank"
          >
            Google Analytics
          </a>
          , Advertising, AIDA, Marketing Metrics, Growth-share Matrix, SWOT &
          Competitive Advantages.
        </i>
        {close}
      </article>

      <article
        id="dev"
        className={`${props.article === 'dev' ? 'active' : ''} ${
          props.articleTimeout ? 'timeoutModal' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Development & Test</h2>
        <span className="image main">
          <img src="/static/images/pic03.jpg" alt="" />
        </span>
        <p>
          It's almost two years since I join engineering team at Speedoc, I
          learn a lot about software developement and testing in general because
          I'm surounded by extraordinary people in this field. Previously I had
          hands-on experience with WordPress for several years before I finally
          learned JavaScript & React.
        </p>
        <h3>What I know:</h3>
        <strong>Development</strong>
        <pre>
          &emsp;
          <a href="https://www.freecodecamp.org/certification/gedy007/javascript-algorithms-and-data-structures">
            JavaScript
          </a>
          , React, React Native, Node.js,
          <br />
          &emsp;Shell, WordPress, HTML & CSS.
        </pre>
        <strong>E2E Testing</strong>
        <pre>&emsp;Cypress, Detox, BDD & Gherkin.</pre>
        <strong>CI/CD</strong>
        <pre>&emsp;GitHub Action & Bitrise.</pre>
        {close}
      </article>

      <article
        id="contact"
        className={`${props.article === 'contact' ? 'active' : ''} ${
          props.articleTimeout ? 'timeoutModal' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Contact</h2>
        <ContactForm />
        <SocmedIcons />
        {close}
      </article>
    </div>
  );
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeoutModal: PropTypes.bool,
};
