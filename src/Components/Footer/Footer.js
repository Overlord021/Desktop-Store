import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
const Footer = () => {
  return (
    <>
      <div
        className="w-full h-96 flex justify-center bg-blue-500"
        style={{
          backgroundImage: `url(./images/footer.jpg)`,
        }}
      >
        <div className="w-[60%] flex items-center">
          <div className="w-full flex">
            <div className="w-[25%]">
              <div className="w-full pt-[8px] pb-[28px]">
                <img src="./images/logo1.png" alt="" />
              </div>
              <div className="w-[80%] flex justify-between">
                <a
                  className="w-[50px] h-[50px] rounded-full flex justify-center items-center text-[22px] hover:bg-[#48CA95] hover:text-white transition-all duration-1000 ease-in-out hover:transition-all hover:duration-1000 hover:ease-in-out cursor-pointer bg-white"
                  href="#"
                >
                  <FaFacebookF />
                </a>
                <a
                  className="w-[50px] h-[50px] rounded-full flex justify-center items-center text-[22px] hover:bg-[#48CA95] hover:text-white transition-all duration-1000 ease-in-out hover:transition-all hover:duration-1000 hover:ease-in-out cursor-pointer bg-white"
                  href="#"
                >
                  <FaTwitter />
                </a>
                <a
                  className="w-[50px] h-[50px] rounded-full flex justify-center items-center text-[22px] hover:bg-[#48CA95] hover:text-white transition-all duration-1000 ease-in-out hover:transition-all hover:duration-1000 hover:ease-in-out cursor-pointer bg-white"
                  href="#"
                >
                  <FaLinkedin />
                </a>
                <a
                  className="w-[50px] h-[50px] rounded-full flex justify-center items-center text-[22px] hover:bg-[#48CA95] hover:text-white transition-all duration-1000 ease-in-out hover:transition-all hover:duration-1000 hover:ease-in-out cursor-pointer bg-white"
                  href="#"
                >
                  <ImInstagram />
                </a>
              </div>
            </div>

            <div className="w-[25%]">
              <h3 className="py-[28px] pb-[10px] normal-case font-semibold text-white text-[26px]">
                About Us
              </h3>
              <p className="w-[85%] text-[20px] normal-case text-white">
                dolor sit amet, consectetur magna aliqua. Ut enim ad minim
                veniam, quisdotempor incididunt r
              </p>
            </div>

            <div className="w-[25%]">
              <h3 className="pt-[28px] pb-[10px] normal-case font-semibold text-white text-[26px]">
                Contact Us
              </h3>
              <p className="w-[50%] text-[20px] normal-case text-white">
                dolor sit amet, consectetur magna aliqua. quisdotempor
                incididunt ut e
              </p>
            </div>

            <div className="w-[25%]">
              <h3 className="pt-[28px] pb-[20px]  normal-case font-semibold text-white text-[26px]">
                Newsletter
              </h3>
              <input
                className="w-[90%] rounded-lg outline-none border-none py-[10px] placeholder:ps-2 placeholder:font-semibold"
                type="email"
                placeholder="Enter Your Email"
              />
              <div className="w-[85%] mt-[16px]">
                <button className="bg-[#48ca95] rounded-lg w-[60%] p-[12px] text-[18px] font-semibold text-white hover:bg-black transition-all duration-1000 ease-in-out hover:transition-all hover:duration-1000 hover:ease-in-out">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
