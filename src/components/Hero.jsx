import profile from "../assets/profile2.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SoundContext } from "../App";
import { useContext } from "react";

const Hero = () => {
  const { enableSound } = useContext(SoundContext) || {};

  function handleDownload() {
    const link = document.createElement("a");
    link.href = "/Aasthayuli.pdf";
    link.download = "Aasthayuli.pdf";
    link.click();
  }

  return (
    <div id="home" className="flex items-center flex-col gap-4 hero mybg">
      <img src={profile} alt="" className="mt-16 h-[300px] rounded-full" />

      <h1 className="text-center w-1/3 text-5xl font-bold font-serif ">
        I'm <span className="gradient-text ">Aasthayuli</span>,
      </h1>
      <h1 className="text-center w-2/3 text-3xl font-bold font-serif">
        Aspiring Software Developer
      </h1>

      <p className="w-1/2 text-center text-2xl">
        Highly motivated, proactive programmer with a passion for tackling
        complex, real-world challenges. Curious and driven, I thrive on solving
        intricate problems and continuously seek to enhance my skills.
      </p>
      <div className="flex items-center gap-10 text-xl mb-10 hero-action">
        <div
          className="p-4 cursor-pointer text-xl rounded-4xl bg-[linear-gradient(267deg,_#58a0c8_0.36%,_#34699A_102.06%)] transition duration-300 transform hover:scale-105 hero-connect"
          onClick={() => {
            enableSound && enableSound();
          }}
        >
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with Me
          </AnchorLink>
        </div>
        <div
          onClick={() => {
            handleDownload();
            enableSound && enableSound();
          }}
          className="border px-10 py-4 cursor-pointer text-xl rounded-4xl transition duration-300 transform hover:scale-105 hover:border-[#58a0c8] hero-resume"
        >
          My Resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
