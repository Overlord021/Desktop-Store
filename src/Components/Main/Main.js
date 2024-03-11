import axios from "axios";
import { useEffect, useState } from "react";
import Menu from "../Menu/Menu";
import BannerMain from "../Banner-Main/Banner-Main";

import { useContext } from "react";
import { MyContext } from "../App/App";
const Main = () => {
  // const { appmain, loading, error } = useContext(MyContext);
  // console.log(appmain);
  const [menu, setMenu] = useState(null);
  const fetchMenu = async () => {
    try {
      let res = await axios("http://localhost:3001/Menu");
      setMenu(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchMenu();
  }, []);
  return (
    <>
      <div
        className="w-full h-[900px] -z-10"
        style={{
          backgroundImage: `url(./images/banner.jpg)`,
        }}
      >
        <Menu menu={menu} />
        <BannerMain />
      </div>
      <div className="w-full flex relative">
        <div
          className="w-[50px] h-[40px] absolute top-0 right-[50px]"
          style={{
            backgroundImage: `url(./images/banner.jpg)`,
          }}
        ></div>
        <div
          className="w-[50px] h-[40px] absolute top-0 left-[50px]"
          style={{
            backgroundImage: `url(./images/banner.jpg)`,
          }}
        ></div>
      </div>
    </>
  );
};

export default Main;
