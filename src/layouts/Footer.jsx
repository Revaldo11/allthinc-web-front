import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row,  Card, CardBody, CardTitle} from 'reactstrap';


// Import Images
import logo from "./../assets/images/logo/logo.svg";
import iconFacebook from "./../assets/images/icon/i-facebook.svg";
import iconInstragram from "./../assets/images/icon/i-insta.svg";
import iconYoutube from "./../assets/images/icon/i-youtube.svg";
import iconTwitter from "./../assets/images/icon/i-twitter.svg";
import iconLinkedIn from "./../assets/images/icon/i-linkedin.svg";

const Footer = () => {
    return (
        <React.Fragment>
            {/* footer konten */}
            <footer className="custom-footer py-5 position-relative">
                <Container>
                    <Row>
                        <Col lg={4} className="mt-4">
                            <div className='center__item'>
                                <div>
                                    <img src={logo} alt="logo light" height="17" />
                                </div>
                                <div className="mt-4 product__desc">
                                    <p>
                                        Allthinc menawarkan produk fashion dengan konsep print on demand, 
                                        kami memberikan pilihan flexible bagi konsumen kami untuk memiliki produk
                                        pakaian dengan pengalaman yang berbeda!.  
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={7} className="ms-lg-auto">
                            <Row>
                                <Col sm={3} className="mt-4">
                                    <h5 className="text-white mb-0">Shop</h5>
                                    <div className="text-muted mt-3">
                                        <ul className="list-unstyled ff-secondary footer-list">
                                            <li><Link to="/pages-profile">Pilihan Author</Link></li>
                                            <li><Link to="/pages-gallery">Wanita</Link></li>
                                            <li><Link to="/apps-projects-overview">Pria</Link></li>
                                            <li><Link to="/pages-timeline">Anank Anak</Link></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col sm={3} className="mt-4">
                                    <h5 className="text-white mb-0">Bantuan</h5>
                                    <div className="text-muted mt-3">
                                        <ul className="list-unstyled ff-secondary footer-list">
                                            <li><Link to="/pages-pricing">Customer Ser</Link></li>
                                            <li><Link to="/apps-mailbox">Kebijakan Privasi</Link></li>
                                            <li><Link to="/apps-chat">Kontak Kami</Link></li>
                                            <li><Link to="/apps-crm-deals">Deals</Link></li>
                                         </ul>
                                    </div>
                                </Col>
                                <Col sm={3} className="mt-4">
                                    <h5 className="text-white mb-0">About</h5>
                                    <div className="text-muted mt-3">
                                        <ul className="list-unstyled ff-secondary footer-list">
                                            <li><Link to="/pages-faqs">About Us</Link></li>
                                            <li><Link to="/pages-faqs">Collaboration</Link></li>
                                            <li><Link to="/pages-faqs">Career</Link></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col sm={3} className='mt-4'>
                                    <h5 className="mb-0">Follow Us</h5>
                                    <div className="mt-3">
                                        <a href="" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                                            <Card className="bg-transparent border-0">
                                                <CardBody className="card__body d-flex align-items-center">
                                                    <img src={iconFacebook} alt="Facebook" className="me-2" />
                                                    <CardTitle className='pt-2'>Facebook</CardTitle>
                                                </CardBody>
                                            </Card>
                                            <Card className="bg-transparent border-0">
                                                <CardBody className="card__body d-flex align-items-center">
                                                    <img src={iconInstragram} alt="Facebook" className="me-2" />
                                                    <CardTitle className='pt-2'>Instagram</CardTitle>
                                                </CardBody>
                                            </Card>
                                            <Card className="bg-transparent border-0">
                                                <CardBody className="card__body align-items-center">
                                                    <img src={iconYoutube} alt="Facebook" className="me-2" />
                                                    <CardTitle className='pt-2'>Youtube</CardTitle>
                                                </CardBody>
                                            </Card>
                                            <Card className="bg-transparent border-0">
                                                <CardBody className="card__body d-flex align-items-center">
                                                    <img src={iconTwitter} alt="Facebook" className="me-2" />
                                                    <CardTitle className='pt-2'>Twitter</CardTitle>
                                                </CardBody>
                                            </Card>
                                            <Card className="bg-transparent border-0">
                                                <CardBody className="card__body d-flex align-items-center">
                                                    <img src={iconLinkedIn} alt="Facebook" className="me-2" />
                                                    <CardTitle className='pt-2'>LinkedIn</CardTitle>
                                                </CardBody>
                                            </Card>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </footer>
            {/* footer copyright */}
            <footer className="custom__footer__copyright py-4">
                <Container>
                    <Row className='justify-between'>
                        <Col className='text-start'>
                            <p className="mb-0">
                                © PT. Momentum Transformasi Global. {new Date().getFullYear()} 
                            </p>
                        </Col>
                        {/* Terms of Service | Privacy Policy */}
                        <Col className='tos__pp text-end'>
                            <Link to="/tos">Terms of Service</Link>
                            <span className="text-black mx-2">|</span>
                            <Link to="/privacy-policy">Privacy Policy</Link>
                        </Col>
                    </Row>
                </Container>
            </footer>

        </React.Fragment >
    );
};

export default Footer;