import Banner from "./Banner/Banner";
import axios from "axios";
import { useEffect, useState } from "react";
const BannerMain = () => {
  const [banner, setBanner] = useState(null);
  const fetchBanner = async () => {
    try {
      let res = await axios("http://localhost:3001/Swiper");
      setBanner(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchBanner();
  }, []);
  return (
    <>
      <Banner banner={banner} />
    </>
  );
};

export default BannerMain;
