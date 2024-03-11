const Products = ({ products }) => {
  return (
    <>
      <div className="w-full bg-[#F7F7F7] pb-[120px] flex flex-col items-center">
        <div className="w-fit mt-[120px] pb-[60px]">
          <h1 className="text-[40px] font-bold">OUR PRODUCTS</h1>
          <div className="h-[1px] bg-[#48CA95]"></div>
        </div>
        <div className="w-[60%] flex flex-wrap justify-between bg-white  pt-[90px]">
          {products?.map((elem) => {
            return (
              <div
                className="w-[31%] h-[270px] flex flex-col items-center pb-[15px] mb-[60px]"
                key={elem.id}
              >
                <div className="w-50 mb-[30px]">
                  <img src={elem.image} alt={elem.alt} />
                </div>
                <div className="w-[60%] py-[10px] text-center text-white text-[20px] font-semibold bg-black hover:bg-[#48CA95] transition-all ease-in-out duration-700">
                  {elem.name}
                </div>
              </div>
            );
          })}
          <div className="w-full flex justify-center">
            <div className="w-[20%] flex justify-center items-center mb-20">
              <a
                className="w-full flex justify-center items-center text-[18px] py-4 border-[2px] border-[#48CA95] text-[#48CA95] hover:bg-[#48CA95] hover:text-black transition-all ease-in-out duration-1000 hover:transition-all hover:ease-in-out hover:duration-1000"
                href="#"
              >
                See More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
