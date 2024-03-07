import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

// Import Components
import PopularCreatorsSlider from './components/PopularCreatorsSlider';

import card1 from '../../../assets/images//dummy-img/card1.jpg';
import card2 from '../../../assets/images/dummy-img/card2.jpg';
import card3 from '../../../assets/images/dummy-img/card3.jpg';
import card4 from '../../../assets/images/dummy-img/card4.jpg';
import card5 from '../../../assets/images/dummy-img/card5.jpg';
import card6 from '../../../assets/images/dummy-img/card6.jpg';
import card7 from '../../../assets/images/dummy-img/card7.jpg';
import card8 from '../../../assets/images/dummy-img/card8.jpg';
import sampleProfile from '../../../assets/images/sample-profile.png';
import profile1 from '../../../assets/images/dummy-img/profile1.png';
import profile2 from '../../../assets/images/dummy-img/profile2.png';
import profile3 from '../../../assets/images/dummy-img/profile3.png';
import profile4 from '../../../assets/images/dummy-img/profile4.png';

import iconArrowRight from '../../../assets/images/icon/i-arrow-right.svg';

const PopularCreators = () => {
    const creators = [
        { imageUrl: card1, imageProfile: sampleProfile, creatorName: "Andi Adinata", creatorDesign: 300 },
        { imageUrl: card2, imageProfile: profile1, creatorName: "Tatang Sutarman", creatorDesign: 12 },
        { imageUrl: card3, imageProfile: profile2, creatorName: "Create Retro", creatorDesign: 216 },
        { imageUrl: card4, imageProfile: profile3, creatorName: "Jon Eveleen", creatorDesign: 216},
        { imageUrl: card5, imageProfile: profile4, creatorName: "Bethney Eric", creatorDesign: 216},
        { imageUrl: card6, imageProfile: sampleProfile, creatorName: "Apep", creatorDesign: 300 },
        { imageUrl: card7, imageProfile: sampleProfile, creatorName: "Mahdi", creatorDesign: 12 },
        { imageUrl: card8, imageProfile: sampleProfile, creatorName: "Deco", creatorDesign: 216 },
    ];
    
    return (
        <React.Fragment>
            <div className='popular__creators__section mt-20'>
                <Container>
                    <div className="more mb-9">
                        <Row>
                            <Col className='d-flex justify-between align-items-center'>
                                <h2 className="popular__creators__title">Kreator Populer</h2>
                                <Link to='/' >
                                    <div className="more__text d-flex">
                                        <p className="">Selengkapnya</p>
                                        <div className="more__icon">
                                            <img src={iconArrowRight} alt="" />
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                        </Row>
                    </div>
                    <div className="fugu__slider__container">            
                        <PopularCreatorsSlider creators={creators} />                           
                    </div>
                </Container>
            </div>
        </React.Fragment>
    );
}


export default PopularCreators;