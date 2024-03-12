import { useContext } from "react";
import { IoSearch } from "react-icons/io5";
import { MyContext } from "../App/App";
const Menu = () => {
  const { appmain } = useContext(MyContext);
  return (
    <>
      <div className="w-full h-40 z-10">
        <div className="h-full flex  ">
          <div className="w-[10%] flex items-center">
            <div className="ps-10 flex h-[50%] logo ">
              <a href="#">
                <img src="./images/logo.png" alt="" />
              </a>
            </div>
          </div>
          <div className="w-[100%] flex items-center justify-end ">
            <nav className="w-[55%] ">
              <ul className="flex">
                {appmain.Menu?.map((elem) => {
                  return (
                    <li
                      className={`${
                        elem.id === 7
                          ? "text-[22px] w-1/2"
                          : elem.id === 1
                          ? "w-[60%]"
                          : "w-full"
                      } mx-3 h-14 flex items-center`}
                      key={elem.id}
                    >
                      <a
                        className="w-full h-full text-[#ffffff] font-semibold flex items-center justify-center hover:text-[#51fe44] transition-all duration-500 hover:transition-all hover:ease-in-out hover:duration-500"
                        href={elem.link}
                      >
                        {elem.id === 7 ? <IoSearch /> : null}
                        {elem.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
