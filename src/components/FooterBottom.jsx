import PropTypes from 'prop-types';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

const FooterBottom = ({ currentYear }) => {
  return (
    <div className="footer__bottom">
      <Container>
        <Row className="align-items-center">
          <div className="footer__bottom__content">
            <Col lg={6} className='footer__bottom__content__left'>
              <p className="footer__bottom__content__left__text mb-0">© {currentYear} PT. Momentum Transformasi Global</p>
            </Col>
            <Col lg={6} className='footer__bottom__content__right text-end'>
              <Link to="/tos">Terms of Service</Link>
              <span className="text-black mx-2">|</span>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </Col>
          </div>
        </Row>
      </Container>
    </div>
  );
}

FooterBottom.propTypes = {
    currentYear: PropTypes.number
}

export default FooterBottom;
