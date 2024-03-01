const CreatorCard = ({ imageUrl, imageProfile,  creatorName }) => {
    return (
        <article className="card card__1">
            <img className="card__img" src={imageUrl} alt="" />
            <div className="card_img_2">
                <img className="card__img_profile" src={imageProfile} alt="" />
            </div>
            <div className="card__info">
                <h4 className="card__info__name">Andi Adinata</h4>
                <span className="card__info__total">300 Desain</span>
            </div>
        </article>
    );
};

export default CreatorCard;