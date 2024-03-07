const Discount = () => {
  return (
    <>
      <div className="w-full h-[520px] flex justify-center bg-[#4f4aa6]">
        <div className="w-[70%] flex justify-center items-center">
          <div className="w-[45%]">
            <div className="w-[95%]">
              <p className="text-[40px] text-white pb-[24px]">
                Every Computer and laptop
              </p>
              <h2 className="text-[80px] text-white">Up to 40% off !</h2>
            </div>
            <div className="w-full mt-[50px]">
              <a
                href="#"
                className="w-[90%] px-[50px] py-[20px] bg-[#48ca95] text-white hover:bg-[#000000] transition-all ease-in  duration-1000 hover:transition-all hover:duration-1000"
              >
                Shop Now
              </a>
            </div>
          </div>
          <div className="w-[45%] flex items-center justify-center">
            <img src="./images/pc.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Discount;
