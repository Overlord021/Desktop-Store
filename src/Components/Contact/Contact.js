const Contact = () => {
  return (
    <>
      <div
        className="wfull flex flex-col pb-[90px] border-b-[2px] items-center"
        style={{
          backgroundImage: `url(./images/Contact-Main.jpg)`,
        }}
      >
        <div className="w-fit mt-[80px] mb-[60px]">
          <h2 className="text-[40px] uppercase text-[#ffffff] font-[750]">
            contact now
          </h2>
          <div className="h-[1px] bg-[#ffffff]"></div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-[40%] h-[700px] flex flex-col items-center">
            <form
              className="w-full h-full border-[2px] flex flex-col items-center justify-center"
              action="#"
            >
              <input
                className="w-[80%] py-[15px] mb-[25px] ps-2 bg-transparent border-[2px] text-[#ffffff] placeholder:text-white outline-none mt-[60px]"
                type="text"
                placeholder="Name"
              />
              <input
                className="w-[80%] py-[15px] mb-[25px] ps-2 bg-transparent border-[2px] text-[#ffffff] placeholder:text-white outline-none"
                type="Email"
                placeholder="Email"
              />
              <input
                className="w-[80%] py-[15px] mb-[25px] ps-2 bg-transparent border-[2px] text-[#ffffff] placeholder:text-white outline-none"
                type="text"
                placeholder="Phone Number"
              />
              <textarea
                className="resize-none mb-[45px] py-[15px] ps-2 w-[80%] h-[800px] text-[#ffffff] placeholder:text-white bg-transparent border-[2px] outline-none rounded-none"
                name="message"
                id="message"
                placeholder="Message"
              ></textarea>
              <button className="w-[25%] mb-[35px] rounded-full py-[15px] text-[20px] bg-[#48CA95] text-white hover:bg-black transition-all ease-in-out duration-1000 hover:transition-all hover:ease-in-out hover:duration-1000">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
