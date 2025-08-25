import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../assets/menu_open.svg";
import menu_close from "../assets/menu_close.svg";
import { useRef } from "react";
import { SoundContext } from "../App";
import { useContext } from "react";

const Navbar = () => {
  const { enableSound } = useContext(SoundContext) || {};

  const [menu, setMenu] = useState("home");
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="flex items-center justify-between px-16 py-4 navbar">
      <div className="flex items-center gap-2 text-4xl">
        <i className="fa-brands fa-canadian-maple-leaf gradient-text"></i>
        <h1 className="gradient-text font-serif">Aasthayuli</h1>
      </div>
      <img
        src={menu_open}
        alt=""
        onClick={() => {
          openMenu();
          enableSound && enableSound();
        }}
        className="nav-mob-open"
      />
      <ul
        ref={menuRef}
        className="flex items-center list-none gap-10 text-xl nav-menu"
      >
        <img
          src={menu_close}
          alt=""
          onClick={() => {
            closeMenu();
            enableSound && enableSound();
          }}
          className="nav-mob-close "
        />
        <li className="menu-li">
          <AnchorLink
            className="anchor-link"
            href="#home"
            onClick={() => {
              enableSound && enableSound();
            }}
          >
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <div className="underline"></div> : <></>}
        </li>
        <li className="menu-li">
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#about"
            onClick={() => {
              enableSound && enableSound();
            }}
          >
            <p onClick={() => setMenu("about")}>About me</p>
          </AnchorLink>
          {menu === "about" ? <div className="underline"></div> : <></>}
        </li>
        <li className="menu-li">
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#experience"
            onClick={() => {
              enableSound && enableSound();
            }}
          >
            <p onClick={() => setMenu("experience")}>Experience</p>
          </AnchorLink>
          {menu === "experience" ? <div className="underline"></div> : <></>}
        </li>
        <li className="menu-li">
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#work"
            onClick={() => {
              enableSound && enableSound();
            }}
          >
            <p onClick={() => setMenu("work")}>Projects</p>
          </AnchorLink>
          {menu === "work" ? <div className="underline"></div> : <></>}
        </li>
        <li className="menu-li">
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#services"
            onClick={() => {
              enableSound && enableSound();
            }}
          >
            <p onClick={() => setMenu("services")}>Certificates</p>
          </AnchorLink>
          {menu === "services" ? <div className="underline"></div> : <></>}
        </li>
        <li className="menu-li">
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#contact"
            onClick={() => {
              enableSound && enableSound();
            }}
          >
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <div className="underline"></div> : <></>}
        </li>
      </ul>
      <div className="py-2 px-4 cursor-pointer text-xl rounded-3xl bg-[linear-gradient(267deg,_#58a0c8_0.36%,_#34699A_102.06%)] transition duration-500 transform hover:scale-105 nav-connect">
        <AnchorLink
          className="anchor-link"
          offset={50}
          href="#contact"
          onClick={enableSound}
        >
          Connect with Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
