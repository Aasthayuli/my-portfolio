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
      </div>

      <hr />

      <div className="flex justify-between text-[18px] footer-bottom">
        <p className="footer-bottom-left">
          © 2025 All rights reserved by{" "}
          <span className="gradient-text">Aasthayuli</span>.
        </p>
        <div className="flex flex-col md:flex-row gap-1 md:gap-[50px]  mb-[50px]">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
