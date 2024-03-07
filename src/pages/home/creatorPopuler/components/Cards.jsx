import ProtoTypes from 'prop-types';

const Cards = ({ imageUrl, imageProfile,  creatorName, creatorDesign }) => {
    return (
        <div className="fugu__card__wrap">
                <div className="fugu__card__thumb">
                    <img src={imageUrl} alt="" />
                </div>
                <div className="fugu__card__footer">
                    <div className="fugu__card__footer__profile">
                        <img src={imageProfile} alt="" />
                    </div>
                    <div className="fugu__card__footer__data">
                        <div className="fugu__card__footer__name">
                            <h4>{creatorName}</h4>
                        </div>
                        <div className="fugu__card__footer__design">
                            <p>{creatorDesign} Desain</p>
                        </div>
                    </div>
                </div>
        </div>
    );
};

Cards.propTypes = {
    imageUrl: ProtoTypes.string.isRequired,
    imageProfile: ProtoTypes.string.isRequired,
    creatorName: ProtoTypes.string.isRequired,
    creatorDesign: ProtoTypes.number.isRequired,
};

export default Cards;