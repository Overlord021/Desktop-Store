import axios from "axios";
import { useEffect, useState } from "react";
import Products from "./Products/Products";
import Discount from "./Discount/Discount";
const ProductsMain = () => {
  const [products, setProducts] = useState(null);
  const fetchProduct = async () => {
    try {
      let res = await axios("http://localhost:3001/Product");
      setProducts(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <>
      <Products products={products}/>
      <Discount/>
    </>
  );
};
 
export default ProductsMain;