import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import logo from "./../assets/images/logo/logo.svg";

const FooterTop = ({ links, socialLinks }) => {
  return (
    <div className="footer__top">
        <Container>
            <Row>
                <Col lg={4}>
                <div className="footer__top__content text-center text-lg-start">
                    <Link to="/" className="footer__top__logo">
                    <img src={logo} alt="" />
                    </Link>
                    <p className="my-3 mr-14">
                    Allthinc menawarkan produk fashion dengan konsep print on demand,
                    kami memberikan pilihan flexible bagi konsumen kami untuk memiliki produk
                    pakaian dengan pengalaman yang berbeda!.
                    </p>
                </div>
                </Col>
                <Col lg={8}>
                    <div className="d-lg-block d-none">
                        <Row>
                            {/* Render Footer Link */}
                            {links.map((item, key) => (
                                <Col md={3} key={key}>  
                                    <h3 className="mb-3">
                                    {item.title}
                                    </h3>
                                    <ul className="list-unstyled footer__sub__menu">
                                    {item.child.map((linkItem, key) => (
                                        <li key={key}>
                                            <Link className="footer__link" to={linkItem.link}>
                                                {linkItem.title}
                                            </Link>
                                        </li>
                                    ))}
                                    </ul>
                                </Col>
                            ))}

                            <Col md={3}>
                                <h3 className="mb-3">
                                    Follow Us
                                </h3>
                                {socialLinks.map((social, index) => (
                                <ul key={index} className="list-unstyled footer__sub__menu">
                                    <li className=''>
                                        <Link className="footer__link d-flex" to='/'>
                                            <img className='footer__icon'  src={social.icon} alt={social.title} />
                                            <span className="ms-2">{social.title}</span>
                                        </Link>
                                    </li>
                                </ul>
                                ))}
                            </Col>
                        </Row>
                    </div>

                    {/* Untuk lebar layar kurang dari 992px, tampilkan 2 column kebawah */}
                    <div className="d-lg-none d-block mt mobile">
                        <hr className='divider mb-12'/>
                        <Row className='align-items-start'>
                        {links.map((item, key) => (
                            <Col xs={6} key={key} className=''>  
                                <h3 className="mb-3">
                                    {item.title}
                                </h3>
                                <ul className="list-unstyled footer__sub__menu">
                                {item.child.map((linkItem, key) => (
                                    <li key={key}>
                                        <Link className="footer__link" to={linkItem.link}>
                                            {linkItem.title}
                                        </Link>
                                    </li>
                                ))}
                                </ul>
                            </Col>
                        ))}
                        <Col xs={6}>
                            <h3 className="mb-3">
                                Follow Us
                            </h3>
                            {socialLinks.map((social, index) => (
                            <ul key={index} className="list-unstyled footer__sub__menu">
                                <li className=''>
                                    <Link className="footer__link d-flex" to='/'>
                                        <img src={social.icon} alt={social.title} />
                                        <span className="ms-2">{social.title}</span>
                                    </Link>
                                </li>
                            </ul>
                            ))}
                        </Col>
                    </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

FooterTop.propTypes = {
  links: PropTypes.array,
  socialLinks: PropTypes.array
};

export default FooterTop;
