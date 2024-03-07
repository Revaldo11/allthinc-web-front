import { Link } from 'react-router-dom';
import ProtoTypes from 'prop-types';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

// Import Components
import Cards from './Cards';


const PopularCreatorsSlider = ({ creators }) => {
    return (
        <Swiper
            slidesPerView={5.5}
            spaceBetween={30}
            freeMode={false}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="fugu__slider"
            breakpoints={{
                0: {
                    slidesPerView: 3,
                },
                576: {
                    slidesPerView: 4,
                },
                768: {
                    slidesPerView: 5,
                },
                992: {
                    slidesPerView: 4,
                },
                1200: {
                    slidesPerView: 5,
                }
            }}
        >
            {creators.map((creator, index) => (
                <SwiperSlide key={index}>
                    <Link to='/'>
                        <Cards
                            imageUrl={creator.imageUrl}
                            imageProfile={creator.imageProfile}
                            creatorName={creator.creatorName}
                            creatorDesign={creator.creatorDesign}
                        />
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

PopularCreatorsSlider.propTypes = {
    creators: ProtoTypes.array.isRequired,
};

export default PopularCreatorsSlider;