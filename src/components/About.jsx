import profile2 from "../assets/profile.png";
import bootstrap from "../assets/bootstrap.png";
import c from "../assets/c.jpeg";
import css from "../assets/css.png";
import git from "../assets/git.png";
import html from "../assets/html.jpg";
import java from "../assets/java.png";
import js from "../assets/js.png";
import Leetcode from "../assets/LeetCode.png";
import mysql from "../assets/mysql.jpeg";
import python from "../assets/python.png";
import twcss from "../assets/twcss.png";
import vscode from "../assets/vscode.jpeg";
import pycharm from "../assets/pycharm.png";
import intellij from "../assets/intellij.png";
import reactjs from "../assets/react.png";
import pytorch from "../assets/pytorch.png";
import arrow_icon from "../assets/arrow_icon.svg";
import GFG from "../assets/gfg.png";
const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center my-16 mx-28 about mybg"
    >
      <div className="relative about-title mb-12">
        <h1 className="py-0 px-[30px] text-[50px] font-extrabold relative ">
          About Me
        </h1>
      </div>
      <div className="flex gap-[80px] about-sections">
        <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] ">
          <img src={profile2} alt="" className="rounded-full " />
        </div>
        <div className="flex flex-col gap-[80px]">
          <div className="flex flex-col gap-[20px] text-2xl about-para">
            <p>
              {/* I'm <span className="gradient-text">Aasthayuli</span>, from
              Saharsa, Bihar. I completed my schooling at{" "}
              <span className="gradient-text">
                Jawahar Navodaya Vidyalaya, Saharsa
              </span>{" "}
              and I'm pursuing{" "}
              <span className="gradient-text">B.Tech in Computer Science</span>{" "}
              from{" "}
              <span className="gradient-text">
                Global Institute of Technology and Management, Gurugram
              </span>{" "}
              and currently in the{" "}
              <span className="gradient-text">final year</span>. I have a strong
              command over full-stack development and a solid programming
              foundation. I work confidently with{" "}
              <span className="font-semibold gradient-text">
                HTML, CSS, JavaScript, Tailwind, Bootstrap, React
              </span>{" "}
              , and backend development using{" "}
              <span className="font-semibold gradient-text">
                Python and Flask
              </span>
              .
            </p>
            <p>
              My{" "}
              <span className="font-semibold gradient-text">
                Java and DSA background
              </span>{" "}
              strengthens my logic and problem-solving, while my{" "}
              <span className="gradient-text"> exposure to AI/ML</span>—through
              multiple self-built projects and a virtual internship—helps me
              build smart, efficient applications. I learn by doing, and I've
              grown my skills through real, hands-on project work.
            </p>
            <p> */}
              {/* Hi, I'm <span className="gradient-text">Aasthayuli</span>.
              <br></br>I enjoy creating clean, purposeful, and scalable
              products, and I'm actively working toward opportunities where I
              can build meaningful tech and grow as a developer. */}
              I am a{" "}
              <span className="gradient-text">
                final year Computer Science student
              </span>{" "}
              skilled in programming languages{" "}
              <span className="gradient-text">python </span> and{" "}
              <span className="gradient-text">core java</span> and have done a
              internship as{" "}
              <span className="gradient-text">python developer</span>. I also
              have exposure to <span className="gradient-text">AI/ML</span>{" "}
              through personal projects. Currently I practice Data Structures
              and Algorithms and have{" "}
              <span className="gradient-text">high learning discipline </span>{" "}
              and{" "}
              <span className="gradient-text">
                project based learning experience
              </span>
              . I am looking for a role where I can apply my current skills,
              gain experience and grow as a developer.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col about-skills">
        <div className="card-title gradient-text ">
          <h4>Languages, Frameworks & Databases</h4>
        </div>
        <div className="card-frame">
          <div className="img-div animate-pulse">
            <img src={html} />
            <span>HTML </span>
          </div>
          <div className="img-div animate-pulse">
            <img src={css} />
            <span>CSS </span>
          </div>
          <div className="img-div animate-pulse">
            <img src={twcss} />
            <span>Tailwind CSS </span>
          </div>
          {/* <div className="img-div animate-pulse">
            <img src={bootstrap} />
            <span>BootStrap</span>
          </div> */}
          <div className="img-div animate-pulse">
            <img src={js} />
            <span>JavaScript </span>
          </div>
          <div className="img-div animate-pulse">
            <img src={reactjs} />
            <span>React JS </span>
          </div>
          <div className="img-div animate-pulse">
            <img src={c} />
            <span>C</span>
          </div>
          <div className="img-div animate-pulse">
            <img src={java} />
            <span>Java </span>
          </div>
          <div className="img-div animate-pulse">
            <img src={python} />
            <span>Python</span>
          </div>
          <div className="img-div animate-pulse">
            <img src={pytorch} />
            <span>Pytorch</span>
          </div>
          <div className="img-div animate-pulse">
            <img src={mysql} />
            <span>My SQL </span>
          </div>
        </div>
        <div className="card-title gradient-text ">
          <h4>Competitive Programming </h4>
        </div>
        <div className="card-frame">
          <div className="img-div animate-pulse">
            <a href="https://leetcode.com/u/Aasthayuli/" target="_blank">
              <img src={Leetcode} />
              <span className="hover:underline">Leetcode</span>
            </a>
          </div>
          <div className="img-div animate-pulse">
            <a href="https://leetcode.com/u/Aasthayuli/" target="_blank">
              <img src={GFG} />
              <span className="hover:underline">GeeksForGeeks</span>
            </a>
          </div>
        </div>
        <div className="card-title gradient-text ">
          <h4>Others</h4>
        </div>
        <div className="card-frame">
          <div className="img-div animate-pulse">
            <img src={git} />
            <span>Git</span>
          </div>
          <div className="img-div animate-pulse">
            <img src={vscode} /> <span>V S Code</span>
          </div>
          <div className="img-div animate-pulse">
            <img src={pycharm} />
            <span>PyCharm</span>
          </div>
          <div className="img-div animate-pulse">
            <img src={intellij} />
            <span>Intellij Idea</span>
          </div>
        </div>
        {/* <div className="flex gap-4">
          <div className="flex gap-[10px] rounded-4xl py-[14px] px-[10px] text-[14px] md:text-[18px]  my-[40px] cursor-pointer transition-all duration-[300ms] max-w-2xs justify-center hover:gap-[20px] hover:bg-[linear-gradient(267deg,#58a0c8_0.36%,#34699a_102.06%)]">
            <a href="https://leetcode.com/u/Aasthayuli/" target="_blank">
              <i class="fa-solid fa-laptop-code"></i> Visit Leetcode Profile
            </a>
            <img src={arrow_icon} alt="" className="w-1/4" />
          </div>
          <div className="flex gap-[10px] rounded-4xl py-[14px] px-[10px] text-[14px] md:text-[18px]  my-[40px] cursor-pointer transition-all duration-[300ms] max-w-2xs justify-center hover:gap-[20px] hover:bg-[linear-gradient(267deg,#58a0c8_0.36%,#34699a_102.06%)]">
            <a href="https://leetcode.com/u/Aasthayuli/" target="_blank">
              <i class="fa-solid fa-laptop-code"></i> Visit Leetcode Profile
            </a>
            <img src={arrow_icon} alt="" className="w-1/4" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
