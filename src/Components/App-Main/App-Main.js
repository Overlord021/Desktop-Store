import { useContext } from "react";
import Contact from "../Contact/Contact";
import CustomerMain from "../Customer-Main/Customer-Main";
import Footer from "../Footer/Footer";
import InfoMain from "../Info-Main/Info-Main";
import Main from "../Main/Main";
import ProductsMain from "../Products-Main/Products-Main";
import { MyContext } from "../App/App";
import Spinner from "./Loading-Spinner/Spinner";

const AppMain = () => {
  console.log(useContext(MyContext));
  const { appmain, loading, error } = useContext(MyContext);
  return (
    <>
      {loading ? (
        <div className="text-center text-[40px] flex flex-col mt-5 items-center w-full text-blue-500">
          {/* <svg
            className="animate-spin border-2 border-white rounded-full h-5 w-5 mr-3"
            viewBox="0 0 24 24"
          ></svg> */}
          <Spinner />
          Loading...
        </div>
      ) : null}
      {error ? (
        <h1 className="text-center mt-2 text-red-500">{error}</h1>
      ) : null}
      {appmain?.map((elem) => {
        return (
          <>
            <Main menu={elem.menu} />
            <InfoMain />
            <ProductsMain />
            <CustomerMain />
            <Contact />
            <Footer />
          </>
        );
      })}
    </>
  );
};

export default AppMain;
