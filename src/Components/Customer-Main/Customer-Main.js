import Customer from "./Customer/Customer";
import axios from "axios";
import { useEffect, useState } from "react";

const CustomerMain = () => {
  const [customer, setCustomer] = useState(null);
  const fetchCustomer = async () => {
    try {
      let res = await axios("http://localhost:3001/Customer");
      setCustomer(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchCustomer();
  }, []);
  return (
    <>
      <Customer customer={customer}/>
    </>
  );
};

export default CustomerMain;

