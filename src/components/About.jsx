import profile2 from "../assets/profile.png";
import flask from "../assets/flask.png";
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
      className="flex flex-col items-center justify-center my-16 mx-4 mybg"
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
              {/* I am a{" "}
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
              and Algorithms. I have{" "}
              <span className="gradient-text">
                project based learning experience
              </span>{" "}
              with
              <span className="gradient-text">
                {" "}
                high learning discipline{" "}
              </span>{" "}
              . Eager to work where I can apply my current skills, gain
              experience and grow as a developer. */}
              Hello, I'm <span className="gradient-text">Aasthayuli, </span> a
              final-year{" "}
              <span className="gradient-text"> Computer Science Student</span>{" "}
              who enjoys building practical software applications.
              <br />
              <br />
              My primary interest lies in{" "}
              <span className="gradient-text">software development</span>,
              particularly{" "}
              <span className="gradient-text">backend and full-stack</span>{" "}
              systems. I have worked on projects such as a{" "}
              <span className="gradient-text">
                Grocery Inventory Management System
              </span>{" "}
              built with <span className="gradient-text">Flask and React</span>,
              a{" "}
              <span className="gradient-text">Hospital Management System</span>{" "}
              developed using{" "}
              <span className="gradient-text">Java Swing and MySQL</span>, and a{" "}
              <span className="gradient-text">Water Quality Classifier</span>{" "}
              using <span className="gradient-text">PyTorch and OpenCV</span>.
              <br />
              <br />
              Through these projects, I have gained experience in{" "}
              <span className="gradient-text">
                Python, Java, React, database design
              </span>
              , and building complete software workflows. I also have a solid
              understanding of core computer science subjects like{" "}
              <span className="gradient-text">Operating Systems and DBMS</span>.
              <br />
              <br />
              Currently, I am focused on improving my{" "}
              <span className="gradient-text">problem-solving skills</span>{" "}
              through{" "}
              <span className="gradient-text">
                Data Structures and Algorithms
              </span>{" "}
              while continuing to build real-world software projects.
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
            <img src={python} />
            <span>Python</span>
          </div>
          <div className="img-div animate-pulse">
            <img src={java} />
            <span>Java </span>
          </div>
          <div className="img-div animate-pulse">
            <img src={js} />
            <span>JavaScript </span>
          </div>
          <div className="img-div animate-pulse">
            <img src={c} />
            <span>C</span>
          </div>
          <div className="img-div animate-pulse">
            <img src={flask} />
            <span>Flask</span>
          </div>
          <div className="img-div animate-pulse">
            <img src={reactjs} />
            <span>React JS </span>
          </div>
          <div className="img-div animate-pulse">
            <img src={twcss} />
            <span>Tailwind CSS </span>
          </div>
          <div className="img-div animate-pulse">
            <img src={mysql} />
            <span>My SQL </span>
          </div>

          <div className="img-div animate-pulse">
            <img src={pytorch} />
            <span>Pytorch</span>
          </div>

          <div className="img-div animate-pulse">
            <img src={html} />
            <span>HTML </span>
          </div>
          <div className="img-div animate-pulse">
            <img src={css} />
            <span>CSS </span>
          </div>

          {/* <div className="img-div animate-pulse">
            <img src={bootstrap} />
            <span>BootStrap</span>
          </div> */}
        </div>
        <div className="card-title gradient-text ">
          <h4>Visit Competitive Programming </h4>
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
