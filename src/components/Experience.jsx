import { experience_data } from "../assets/mywork_data";
// import arrow_icon from "../assets/arrow_icon.svg";
const Experience = () => {
  return (
    <div
      id="experience"
      className="flex flex-col items-center justify-center gap-[80px] my-[120px] mx-[100px] mywork"
    >
      <div className="relative mywork-title">
        <h1 className="py-0 px-[30px] text-[50px]  font-bold">Experience</h1>
      </div>

      <div>
        {experience_data.map((work, index) => {
          return (
            <div className="flex flex-col md:flex-row gap-[20px]">
              <div
                key={index}
                className=" rounded-2xl shadow-2xl border-2  border-[#ff00ff] md:w-1/2 h-full p-[20px] "
              >
                <video className="w-full h-full" controls="controls">
                  <source src={work.w_img} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="md:w-1/2 ">
                <p className="text-[22px] gradient-text font-bold">
                  {work.w_name}
                </p>

                <ul className="md:text-[18px]">
                  <li>
                    Working as an intern in a team of 4 (2 frontend developers,
                    1 backend developer, 1 deployment specialist) to build an
                    AI-powered health consultancy platform.{" "}
                  </li>
                  <li>
                    Developed responsive UI components using React.js, Tailwind
                    CSS, JavaScript for a modern and intuitive user experience.{" "}
                  </li>
                  <li>
                    Collaborated with backend team to integrate APIs and
                    participated in testing and debugging.
                  </li>
                  <li>
                    Assisted in deployment planning and version control using
                    Git & GitHub (private repository).
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* <div className="flex gap-[20px] rounded-4xl border-2 border-solid border-white py-[20px] px-[30px] text-[22px]  mb-[80px] cursor-pointer transition-all duration-[300ms]  hover:gap-[30px] mywork-showmore">
        <a href="https://github.com/Aasthayuli?tab=repositories">Show More</a>
        <img src={arrow_icon} alt="" />
      </div> */}
    </div>
  );
};

export default Experience;
