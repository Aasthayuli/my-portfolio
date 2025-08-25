import profile2 from "../assets/profile2.png";
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

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center gap-[80px] my-16 mx-28 about"
    >
      <div className="relative about-title">
        <h1 className="py-0 px-[30px] text-[50px]  font-extrabold relative ">
          About Me
        </h1>
      </div>
      <div className="flex gap-[80px] about-sections">
        <div className="about-left">
          <img src={profile2} alt="" className="rounded-full" />
        </div>
        <div className="flex flex-col gap-[80px] ">
          <div className="flex flex-col gap-[20px] text-2xl about-para">
            <p>
              I am
              <span className="font-bold gradient-text">
                {" "}
                a Computer Science and Engineering
              </span>{" "}
              student at
              <span className="font-bold gradient-text">
                {" "}
                Global Institute of Technology and Management,
              </span>{" "}
              Gurugram. I am a motivated and proactive programmer who enjoys
              solving real-world problems and improving my skills. Currently, I
              am working on projects in{" "}
              <span className="font-bold gradient-text">
                Web Development and Application Software using Java
              </span>{" "}
              . I completed my schooling from{" "}
              <span className="font-bold gradient-text">
                {" "}
                Jawahar Navodaya Vidyalaya
              </span>{" "}
              , Saharsa, Bihar.
            </p>
            <p>
              I am passionate about sharing what I learn through different
              sources and experiences. Along with coding, I love exploring new
              concepts in computer science, reading, and solving challenging
              problems.
            </p>
          </div>
          <div className="flex flex-col gap-[20px] about-skills">
            <div className="card-title gradient-text ">
              <h4>Languages, Frameworks & Databases</h4>
            </div>
            <div className="card-frame">
              <div className="img-div">
                <img src={html} />
                <span>HTML </span>
              </div>
              <div className="img-div">
                <img src={css} />
                <span>CSS </span>
              </div>
              <div className="img-div">
                <img src={twcss} />
                <span>Tailwind CSS </span>
              </div>
              <div className="img-div">
                <img src={bootstrap} />
                <span>BootStrap</span>
              </div>
              <div className="img-div">
                <img src={js} />
                <span>JavaScript </span>
              </div>
              <div className="img-div">
                <img src={reactjs} />
                <span>React JS </span>
              </div>
              <div className="img-div">
                <img src={c} />
                <span>C</span>
              </div>
              <div className="img-div">
                <img src={java} />
                <span>Java </span>
              </div>
              <div className="img-div">
                <img src={python} />
                <span>Python</span>
              </div>
              <div className="img-div">
                <img src={mysql} />
                <span>My SQL </span>
              </div>
            </div>
            <div className="card-title gradient-text ">
              <h4>Competitive Programming</h4>
            </div>
            <div className="card-frame">
              <div className="img-div">
                <img src={Leetcode} />
                <span>LeetCode Newbie </span>
              </div>
            </div>
            <div className="card-title gradient-text ">
              <h4>Others</h4>
            </div>
            <div className="card-frame">
              <div className="img-div">
                <img src={git} />
                <span>Git</span>
              </div>
              <div className="img-div">
                <img src={vscode} /> <span>V S Code</span>
              </div>
              <div className="img-div">
                <img src={pycharm} />
                <span>PyCharm</span>
              </div>
              <div className="img-div">
                <img src={intellij} />
                <span>Intellij Idea</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
