import image1 from "../assets/home/home-image1.png";
import image2 from "../assets/home/home-image2.png";
import image3 from "../assets/home/home-image3.png";
import image4 from "../assets/home/home-image4.png";
import homeImages from "../assets/home/home-images.png";
import bannerImage1 from "../assets/home/banner-image1.svg";
import bannerImage2 from "../assets/home/banner-image2.svg";
import bannerImage3 from "../assets/home/banner-image3.svg";
import BaseModal from "../components/base-components/BaseModal";
import { useState } from "react";
import Theheader from "../components/TheHeader";
import BaseCard from "../components/base-components/BaseCard";
import frame1 from "../assets/home/frame1.png";
import frame2 from "../assets/home/frame2.png";
import frame3 from "../assets/home/frame3.png";
import frame4 from "../assets/home/frame4.png";
import frame5 from "../assets/home/frame5.png";
import frame6 from "../assets/home/frame6.png";
import frame7 from "../assets/home/frame7.png";
import frame8 from "../assets/home/frame8.png";
import rating from "../assets/home/rating.png";

const HomePage = () => {
  const [walletsAreVisible, setWalletsAreVisible] = useState(false);
  const inspirations = [
    {
      image: frame7,
      name: "Desert King",
      price: "1MBT per night",
      distance: "2345km away",
      duration: "available for 2weeks stay",
    },
    {
      image: frame2,
      name: "Desert King",
      price: "1MBT per night",
      distance: "2345km away",
      duration: "available for 2weeks stay",
    },
    {
      image: frame3,
      name: "Desert King",
      price: "1MBT per night",
      distance: "2345km away",
      duration: "available for 2weeks stay",
    },
    {
      image: frame4,
      name: "Desert King",
      price: "1MBT per night",
      distance: "2345km away",
      duration: "available for 2weeks stay",
    },
    {
      image: frame5,
      name: "Desert King",
      price: "1MBT per night",
      distance: "2345km away",
      duration: "available for 2weeks stay",
    },
    {
      image: frame6,
      name: "Desert King",
      price: "1MBT per night",
      distance: "2345km away",
      duration: "available for 2weeks stay",
    },
    {
      image: frame3,
      name: "Desert King",
      price: "1MBT per night",
      distance: "2345km away",
      duration: "available for 2weeks stay",
    },
    {
      image: frame5,
      name: "Desert King",
      price: "1MBT per night",
      distance: "2345km away",
      duration: "available for 2weeks stay",
    },
  ];
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 bg-white z-20">
        <Theheader
          onClick={() => {
            setWalletsAreVisible(true);
          }}
        />
      </div>
      {walletsAreVisible && (
        <BaseModal
          onClick={() => {
            setWalletsAreVisible(false);
          }}
        />
      )}
      <div>
        <section className="px-24 py-11 flex items-center mt-24">
          <div className="basis-3/5 lg:pr-[50px]">
            <h3 className="text-[56px] xl:text-[70px] leading-[78px] xl:leading-tight text-[#434343] mb-12">
              Rent a <span className="text-[#a02279] font-bold">Place</span>{" "}
              away from <span className="text-[#a02279] font-bold">Home</span>{" "}
              in the <span className="text-[#a02279] font-bold">Metaverse</span>
            </h3>
            <p className="mb-12 text-[#434343] text-2xl ">
              We provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone.
            </p>
            <div className="flex border rounded-lg items-center">
              <input
                type="text"
                placeholder="search for a location"
                className="outline-none border-none w-full h-fit py-3 px-4"
              />
              <button className="text-white rounded-r-lg bg-[#a02279] py-4 px-20 ml-auto">
                Search
              </button>
            </div>
          </div>

          <div className="w-2/5 lg:pl-[50px] lg:hidden">
            <div className="flex">
              <div className="flex-col">
                <img src={image4} alt="picture of a home" />
                <img src={image3} alt="picture of a home" />
              </div>
              <div className="flex flex-col">
                <img src={image2} alt="picture of a home" />
                <img src={image1} alt="picture of a home" />
              </div>
            </div>
          </div>
          <div className="hidden w-2/5 lg:pl-[50px] lg:flex justify-center">
            <img src={homeImages} alt="perfect homes" className="w-full" />
          </div>
        </section>
        <section className="py-16">
          <div
            id="banner"
            className="bg-[#a02279] px-32 flex justify-between py-2.5"
          >
            <img src={bannerImage1} alt="" />
            <img src={bannerImage2} alt="" />
            <img src={bannerImage3} alt="" />
          </div>
        </section>

        <section className="">
          <div className="flex flex-wrap justify-center">
            {inspirations.map((inspiration, index) => {
              return (
                <BaseCard image={inspiration.image} key={index}>
                  <div>
                    <div className="flex justify-between mt-4">
                      <div>
                        <p className="text-xs text-[#434343] mb-2.5">
                          {inspiration.name}
                        </p>
                        <p className="text-xs text-[#434343]">
                          {inspiration.price}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-right font-bold text-[#434343] mb-2.5">
                          {inspiration.price}
                        </p>
                        <p className="text-xs text-right text-[#434343]">
                          {inspiration.duration}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2">
                      <img src={rating} alt="" />
                    </div>
                  </div>
                </BaseCard>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
