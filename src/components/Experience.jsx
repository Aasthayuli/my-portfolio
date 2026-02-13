import { experience_data } from "../assets/mywork_data";
const Experience = () => {
  return (
    <div
      id="experience"
      className="flex flex-col items-center justify-center gap-[80px] my-[120px] px-6 mywork mybg"
    >
      <div className="relative mywork-title">
        <h1 className="py-0 px-[30px] text-[50px]  font-bold">Experience</h1>
      </div>

      <div>
        {experience_data.map((work) => {
          return (
            <div className="flex flex-col md:flex-row gap-10">
              <div
                key={work.w_no}
                className=" rounded-2xl shadow-2xl border-2  border-[#34699A] w-full md:w-1/4 h-full p-[20px]"
              >
                <img src={work.w_img} alt="" />
              </div>
              <div className="md:w-1/2 flex flex-col gap-[20px] justify-center">
                <p className="text-[22px] gradient-text font-bold">
                  {work.w_name}
                </p>

                <div className="md:text-[18px] flex flex-col gap-2">
                  <p>
                    Completed intensive 3-month internship focusing on Python
                    backend development, Flask REST APIs, and MySQL databases.
                    Built production-ready applications with real-world
                    deployment experience.
                  </p>
                  <p>
                    <b>Skills:</b> Core Python, Flask, SQL, REST APIs, Database
                    Design
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
