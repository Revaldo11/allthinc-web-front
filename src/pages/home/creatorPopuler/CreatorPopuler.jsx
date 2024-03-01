import CreatorCard from '../creatorPopuler/components/CreatorCard';

import {Swiper, SwiperSlide} from 'swiper/react';

import sampleImage from '../../../assets/images/sample.png';
import sampleProfile from '../../../assets/images/sample-profile.png';

const CreatorPopuler = () => {

    const creators = [
        { imageUrl: sampleImage, imageProfile: sampleProfile, creatorName: "Nama Creator 1" },
        { imageUrl: sampleImage, imageProfile: sampleProfile, creatorName: "Nama Creator 2" },
        { imageUrl: sampleImage, imageProfile: sampleProfile, creatorName: "Nama Creator 3" },
        { imageUrl: sampleImage, imageProfile: sampleProfile, creatorName: "Nama Creator 4" },
        { imageUrl: sampleImage, imageProfile: sampleProfile, creatorName: "Nama Creator 5" },
        { imageUrl: sampleImage, imageProfile: sampleProfile, creatorName: "Nama Creator 6" },
        { imageUrl: sampleImage, imageProfile: sampleProfile, creatorName: "Nama Creator 7" },
        { imageUrl: sampleImage, imageProfile: sampleProfile, creatorName: "Nama Creator 8" },
        { imageUrl: sampleImage, imageProfile: sampleProfile, creatorName: "Nama Creator 9" },
        { imageUrl: sampleImage, imageProfile: sampleProfile, creatorName: "Nama Creator 10" },
    ];

    return (
        <div className="creator-populer container mt-20">
            <div className="creator-populer__title flex flex-row justify-between">
                <h2 className="text-2xl font-bold">Kreator Populer</h2>
                <p className=" text-gray-500 font-normal">Selengkapnya
                    <i className="icofont-simple-right"></i>
                </p>
            </div>
            
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                freeMode={true}
                className="creator-populer__swiper"
            >
                {creators.map((creator, index) => (
                    <SwiperSlide key={index}>
                        <CreatorCard imageUrl={creator.imageUrl} imageProfile={creator.imageProfile} creatorName={creator.creatorName} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default CreatorPopuler;