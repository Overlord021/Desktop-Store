import { useContext } from "react";
import { MyContext } from "../../App/App";

const Info = () => {
  const { appmain } = useContext(MyContext);
  return (
    <>
      <div className="w-full my-[80px] flex justify-center">
        <div className="w-[70%] flex justify-center">
          {appmain.Info?.map((elem) => {
            return (
              <div
                className="w-[350px] h-[450px] pt-[50px] px-[20px] m-[15px] border rounded-xl border-[#48CA95] flex flex-col items-center"
                key={elem.id}
              >
                <i className="pb-[25px] ">
                  <img src={elem.image} alt={elem.alt} />
                </i>
                <h3 className="pb-[20px] text-[20px] font-bold">{elem.name}</h3>
                <p className="text-center text-[18px] text-[#050505]">
                  {elem.info}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Info;
