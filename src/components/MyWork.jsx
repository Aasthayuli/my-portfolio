import { mywork_data } from "../assets/mywork_data";
import arrow_icon from "../assets/arrow_icon.svg";

const MyWork = () => {
  return (
    <div
      id="work"
      className="flex flex-col items-center justify-center gap-[30px] my-[80px] mx-[170px] mywork"
    >
      <div className="relative mywork-title">
        <h1 className="py-0 px-[30px] text-[50px]  font-bold">Projects</h1>
      </div>

      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <div
              key={index}
              className="hover:transform hover:duration-400 hover:scale-110 rounded-2xl hover:shadow-2xl hover:border-2  hover:border-[#34699A] w-full h-full p-[20px] "
            >
              <p className="text-[22px] gradient-text">{work.w_name}</p>

              <img
                src={work.w_img}
                alt=""
                className="box-border transition duration-300 "
              />
            </div>
          );
        })}
      </div>

      <div className="flex gap-[10px] rounded-4xl border-2 border-solid border-white py-[20px] px-[30px] text-[16px] md:text-[22px]  mb-[80px] cursor-pointer transition-all duration-[300ms]  hover:gap-[20px] mywork-showmore">
        <a
          href="https://github.com/Aasthayuli?tab=repositories"
          onClick={() => {
            enableSound && enableSound();
          }}
        >
          Visit GitHub
        </a>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default MyWork;
