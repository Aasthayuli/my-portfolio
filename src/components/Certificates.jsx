import React from "react";
// import theme_pattern from "../assets/theme_pattern.svg";
// import Services_Data from "../assets/services_data";
// import arrow_icon from "../assets/arrow_icon.svg";
import nptel from "../assets/nptel.png";
import tcs from "../assets/tcs.png";
import nptel2 from "../assets/nptel2.png";
import udemy from "../assets/udemy.png";

const Certificates = () => {
  return (
    <div
      id="services"
      className="flex flex-col items-center justify-center gap-[80px] my-[80px] mx-[170px] services"
    >
      <div className="relative services-title">
        <h1 className="py-0 text-[50px] font-bold">Certificates</h1>
      </div>
      <div className="services-container flex justify-evenly flex-wrap ">
        <div className="certificate-content w-1/3 ">
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
        <div className="certificate-content w-1/3 ">
          <img src={tcs} className="w-[98%]" />
          <div className="pr-para">
            <p className="pr-para-p text-3xl gradient-text font-semibold">
              Learn Corporate Etiquette
            </p>
            <p>by TCS ion</p>
            <p className="gradient-text font-bold">
              <a href="https://drive.google.com/file/d/1G0bSL3DxPBjLQ1PUKyYIItsOQI_94sqM/view?usp=sharing">
                Verify
              </a>
            </p>
          </div>
        </div>
        <div className="certificate-content w-1/3 ">
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
        <div className="certificate-content w-1/3 ">
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
