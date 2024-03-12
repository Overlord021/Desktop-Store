import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Pagination, Navigation } from "swiper/modules";
import { MyContext } from "../../App/App";

const Banner = () => {
  const { appmain } = useContext(MyContext);
  return (
    <>
      <div className="w-full h-[70%] flex justify-center">
        <div className="w-[70%] z-10">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {appmain.Swiper?.map((elem) => {
              return (
                <SwiperSlide key={elem.id}>
                  <div className="w-full h-[80%] flex justify-evenly text-[#ffffff]">
                    <div className="w-[45%] flex flex-col items-start justify-center">
                      <span className="w-[92%] text-[42px] pb-[18px] text-start">
                        {elem.header}
                      </span>
                      <h1 className="w-[92%] text-[82px] font-bold pb-[46px] text-start">
                        {elem.title}
                      </h1>
                      <p className="w-[92%] text-start pb-[60px]">
                        {elem.para}
                      </p>
                      <div className="w-[80%] flex">
                        <div className="w-[50%] flex">
                          <button className="w-[90%] py-[14px] hover:bg-[#51fe44] transition-all ease-in-out border-[2px] duration-700 hover:transition-all hover:ease-in-out hover:duration-700">
                            Buy Now
                          </button>
                        </div>
                        <div className="w-[50%] flex">
                          <button className="w-[90%] py-[14px] hover:bg-[#51fe44] transition-all ease-in-out border-[2px] duration-700 hover:transition-all hover:ease-in-out hover:duration-700">
                            Contact
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="w-[55%] flex justify-center items-center">
                      <div className="w-[80%]">
                        <img src={elem.image} alt={elem.alt} />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Banner;
