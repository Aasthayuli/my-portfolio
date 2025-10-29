import { experience_data } from "../assets/mywork_data";
import internship from "../assets/internship.png";
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
        {experience_data.map((work) => {
          return (
            <div className="flex flex-col md:flex-row ">
              <div className="md:w-1/2 flex flex-col gap-[20px] justify-center">
                <p className="text-[22px] gradient-text font-bold">
                  {work.w_name}
                </p>

                <div className="md:text-[18px] flex flex-col gap-2">
                  <p>
                    Selected for a 1-month AICTE virtual internship under the
                    Sustainability theme.{" "}
                  </p>
                  <p>
                    Working on an individual CNN-based Image Classification
                    project to classify Dry Waste, Wet Waste, E-Waste, and
                    Medical Waste for automated waste segregation.
                  </p>
                  <p>
                    Responsible for complete pipeline — dataset collection &
                    preprocessing, model training, evaluation, and
                    documentation. Projects.
                  </p>
                </div>
              </div>
              <div
                key={work.w_no}
                className=" rounded-2xl shadow-2xl border-2  border-[#34699A] md:w-1/2 h-full p-[20px] "
              >
                {/* <video className="w-full h-full" controls="controls">
                  <source src={work.w_img} type="video/mp4" />
                  Your browser does not support the video tag.
                </video> */}
                <img src={internship} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
