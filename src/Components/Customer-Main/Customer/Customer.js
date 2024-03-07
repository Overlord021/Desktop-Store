// import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Customer.css";
import { Pagination } from "swiper/modules";
const Customer = ({ customer }) => {
  return (
    <>
      <div className="w-full h-[600px] flex items-center flex-col">
        <div className="w-fit mt-[80px]">
          <h2 className="text-[40px] uppercase text-[#090807] font-[750]">
            Customers Review
          </h2>
          <div className="h-[1px] bg-[#48CA95]"></div>
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-[50%] h-fit flex justify-center">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {customer?.map((elem) => {
                return (
                  <SwiperSlide key={elem.id}>
                    <div className="w-[80%]">
                      <div className="w-full h-[300px]">
                        <div className="w-[40px] h-[30px]">
                          <img src={elem.image} alt="cos" />
                        </div>
                        <div className="w-full flex flex-col text-start">
                          <h4 className="text-[30px] text-[#030305] py-[20px] font-semibold">
                            {elem.name}
                          </h4>
                          <p className="text-[17px] text-[#0b0b0c]">
                            {elem.review}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
    // <>

    // </>
  );
};

export default Customer;
