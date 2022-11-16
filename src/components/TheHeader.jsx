import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Theheader = ({ onClick }) => {
  return (
    <div className="w-full px-24 py-8">
      <div className="flex items-center justify-between w-full">
        <div>
          <img src={logo} alt="logo" />
        </div>
        {/* <div className="h-full flex justify-center"> */}
        <div className="flex text-[#434343] text-xl">
          <Link to="/" className="mr-12">
            Home
          </Link>
          <Link to="/" className="mr-12">
            Place to stay
          </Link>
          <Link to="/" className="mr-12">
            NFTs
          </Link>
          <Link to="/" className="mr-12">
            Community
          </Link>
        </div>
        {/* </div> */}
        <div>
          <button
            className="pink_linear_gradient px-7 py-3.5 text-white rounded-[10px]"
            onClick={onClick}
          >
            Connect wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Theheader;
