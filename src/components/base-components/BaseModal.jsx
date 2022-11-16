import close from "../../assets/close.png";
import metaMask from "../../assets/meta-mask.png";
import walletConnect from "../../assets/wallet-connect.png";
import rightArrow from "../../assets/right-arrow.png";

const BaseModal = ({ onClick }) => {
  return (
    <div className="w-full backdrop-blur-sm min-h-screen flex items-center justify-center fixed inset-0 bg-[#4040404D] z-50">
      <div className="bg-white rounded-2xl w-2/5">
        <div className="border-b mb-8">
          <div className="flex items-center px-8 py-4">
            <h3 className="text-[#333333] text-2xl font-bold">
              Connect Wallet
            </h3>
            <button
              className="border-2 border-transparent hover:border-gray-200 p-2 rounded-lg ml-auto"
              onClick={onClick}
            >
              <img src={close} alt="close" />
            </button>
          </div>
        </div>
        <div className="px-8 pb-8">
          <h4 className="mb-4 text-[#333333]">Choose your prefered wallet</h4>
          <ul>
            <li className="py-3 cursor-pointer px-5 hover:bg-[#cfd8dc33] flex items-center rounded-xl mb-4">
              <div className="flex items-center">
                <img src={metaMask} alt="" className="mr-4" />
                <p className="font-semibold text-lg text-black">Metamask</p>
              </div>
              <img src={rightArrow} alt="" className="ml-auto" />
            </li>
            <li className="py-3 cursor-pointer px-5 hover:bg-[#cfd8dc33] flex items-center rounded-xl">
              <div className="flex items-center">
                <img src={walletConnect} alt="" className="mr-4" />
                <p className="font-semibold text-lg text-black">
                  WalletConnect
                </p>
              </div>
              <img src={rightArrow} alt="" className="ml-auto" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BaseModal;
