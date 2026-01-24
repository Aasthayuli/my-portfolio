import nptel from "../assets/nptel.png";
import DB from "../assets/db.png";
import nptel2 from "../assets/nptel2.png";
import udemy from "../assets/udemy.png";
import aicte from "../assets/internship.png";

const Certificates = () => {
  return (
    <div
      id="services"
      className="flex flex-col items-center justify-center gap-[80px] my-[80px]  services"
    >
      <div className="relative services-title">
        <h1 className="py-0 text-[50px] font-bold">Certificates</h1>
      </div>
      <div className="services-container flex justify-evenly flex-wrap ">
        <div className="certificate-content w-1/4 ">
          <img src={nptel} className=" w-[98%]" />
          <div className="pr-para">
            <p className="pr-para-p text-3xl gradient-text font-semibold">
              Programming in Java
            </p>
            <p>NPTEL Online Certification</p>
            <p className="gradient-text font-bold">
              <a href="https://drive.google.com/file/d/1HYIuM3i6lk0jWEGfVOuyt7jCuRlvUnr7/view?usp=drivesdk">
                Verify
              </a>
            </p>
          </div>
        </div>
        <div className="certificate-content w-1/4 ">
          <img src={DB} className="w-[98%]" />
          <div className="pr-para">
            <p className="pr-para-p text-3xl gradient-text font-semibold">
              Database Management System
            </p>
            <p>NPTEL Online Certification</p>
            <p className="gradient-text font-bold">
              <a href="https://drive.google.com/file/d/1c0GgMkN2YpQjnSmmG9uFbHZOXYAz10pg/view?usp=sharing">
                Verify
              </a>
            </p>
          </div>
        </div>
        <div className="certificate-content w-1/4 ">
          <img src={nptel2} className="w-[98%]" />
          <div className="pr-para">
            <p className="pr-para-p text-3xl gradient-text font-semibold">
              Data Structures and Algorithms using Java
            </p>
            <p>NPTEL Online Certification</p>
            <p className="gradient-text font-bold">
              <a href="https://drive.google.com/file/d/1nLSqXFKK3rg6AL1sJ2PoxTS20sHWOYKv/view?usp=sharing">
                Verify
              </a>
            </p>
          </div>
        </div>
        <div className="certificate-content w-1/4 ">
          <img src={udemy} className="w-[98%]" />
          <div className="pr-para">
            <p className="pr-para-p text-3xl gradient-text font-semibold">
              Python BootCamp
            </p>
            <p>by Udemy</p>
            <p className="gradient-text font-bold">
              <a href="https://drive.google.com/file/d/1MWOoJA88EN_jQ8qK37UTgFvDCNPxA5d1/view?usp=drive_link">
                Verify
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
