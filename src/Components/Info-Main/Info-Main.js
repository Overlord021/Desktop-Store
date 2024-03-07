import Info from "./Info/Info";
import axios from "axios";
import { useEffect, useState } from "react";
const InfoMain = () => {
  const [info, setInfo] = useState(null);
  const fetchInfo = async () => {
    try {
      let res = await axios("http://localhost:3001/Info");
      setInfo(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <>
      <Info info={info} />
    </>
  );
};

export default InfoMain;
