import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'

import promoImage from '../../../assets/images/dummy-img/promo.svg'

const Promo = () => {
  return (
    <React.Fragment>
        <section className="promo">
            <Container>
                    <Row className='justify-content-start align-items-center'>
                        <Col lg={8} xs={7} className='promo__left'>
                            <div className="promo__img">
                                <img src={promoImage} alt="Promo"/>
                            </div>
                        </Col>
                        <Col lg={3} xs={4} className='promo__right'>
                            <div className="promo__content">
                                <h1 className="promo__title">Techno Theme Weeks</h1>
                                <h4 className="promo__desc">Dapatkan diskon untuk produk-produk dengan tema teknologi</h4>
                                <Button className="promo__btn">Show All</Button>
                            </div>
                        </Col>
                    </Row>
            </Container>
        </section>
    </React.Fragment>
  )
}

export default Promo