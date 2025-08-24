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
        <h1 className="py-0 px-[30px] text-[50px]  font-extrabold z-10 relative ">
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
                Computer Science and Engineering
              </span>{" "}
              student at
              <span className="font-bold gradient-text">
                {" "}
                Global Institute of Technology and Management,
              </span>{" "}
              Gurugram. I am Highly Motivated, Proactive Programmer with a
              Passion for tackling Complex, real-world Challenges. Curious and
              Driven, I thrive on solving Intricate Problems and continuously
              seek to enhance my skills. I am currently working on a project in
              the field of Web Development and I am also working on a project in
              the field of Application Software using Java.I passed my
              HighSchool and SEE from{" "}
              <span className="font-bold gradient-text">
                Jawahar Navodaya Vidyalaya(JNV),
              </span>{" "}
              Saharsa, Bihar.
            </p>
            <p>
              I am Passionate about sharing the Knowledge I've accumulated from
              Diverse sources and my Life Experiences. With a background in
              Coding and a strong interest in Computer Science, I am also an
              Avid Reader and Excellent at Solving Problems.
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
