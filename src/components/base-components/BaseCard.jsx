import like from "../../assets/home/like.png";
const BaseCard = ({ image, children }) => {
  return (
    <div className="pr-6 mb-6 cursor-pointer">
      <div className="bg-white rounded-2xl p-4 border relative">
        <div>
          <img src={image} alt="" />
          <button className="absolute top-8 right-6">
            <img src={like} alt="like" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default BaseCard;
