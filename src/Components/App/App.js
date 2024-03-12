import axios from "axios";
// import AppMain from "../App-Main/App-Main";
import "./App.css";
import React, { useEffect, useState } from "react";
import Main from "../Main/Main";
import InfoMain from "../Info-Main/Info-Main";
import ProductsMain from "../Products-Main/Products-Main";
import CustomerMain from "../Customer-Main/Customer-Main";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
export const MyContext = React.createContext();
const App = () => {
  const [appmain, setAppMain] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const fetchAppMain = async () => {
    try {
      const res = await axios(
        "https://overlord021.github.io/shop-file/db.json"
      );
      setAppMain(res.data);
      // setLoading(false);
      console.log(res);
    } catch (error) {
      setError(error.message);
      // setLoading(true);
    }
  };
  useEffect(() => {
    fetchAppMain();
  }, []);
  return (
    <>
      {/* <AppMain /> */}
      <MyContext.Provider value={{ appmain }}>
        <Main />
        <InfoMain />
        <ProductsMain />
        <CustomerMain />
        <Contact />
        <Footer />
      </MyContext.Provider>
    </>
  );
};

export default App;
