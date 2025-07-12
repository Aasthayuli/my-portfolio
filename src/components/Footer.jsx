import user_icon from "../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="my-[50px] mx-[170px] flex flex-col gap-[30px] footer">
      <div className="flex justify-between footer-top ">
        <div className="footer-top-left">
          <div className="flex items-center gap-2 text-4xl">
            <i className="fa-brands fa-canadian-maple-leaf gradient-text"></i>
            <h1 className="gradient-text font-serif">Aasthayuli</h1>
          </div>
          <p className="text-[20px] max-w-[400px]">
            "From Passion to Profession — Let's Build Something Great Together."
          </p>
        </div>
        {/* <div className="flex items-center gap-[35px] ">
          <div className="flex gap-[30px] py-[20px] px-[30px] rounded-2xl bg-[#32323b] hover:border-2 hover:border-solid hover:border-white">
            <img src={user_icon} alt="" />
            <input
              type="email"
              placeholder="Enter your email"
              className="outline-none border-none bg-transparent font-outfit text-[#a0a0a0] text-[18px] "
            />
          </div>

          <div className="text-[20px] py-[16px] px-[50px] rounded-2xl bg-[linear-gradient(267deg,_#dA7C25_0.36%,_#B923E1_102.06%)] cursor-pointer transition-all duration-300 hover:scale-110">
            Subscribe
          </div>
        </div> */}
      </div>

      <hr />

      <div className="flex justify-between text-[18px] footer-bottom">
        <p className="footer-bottom-left">
          © 2025 All rights reserved by{" "}
          <span className="gradient-text">Aasthayuli</span>.
        </p>
        <div className="flex gap-[50px] mb-[50px]">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
