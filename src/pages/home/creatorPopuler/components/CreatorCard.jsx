const CreatorCard = ({ imageUrl, creatorName }) => {
    return (
        <div className="">
            <img src={imageUrl} alt="creator" />
            <h3 className="font-bold text-center">{creatorName}</h3>
        </div>
    );
};

export default CreatorCard;