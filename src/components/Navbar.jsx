import { useState } from "react";
import underline from "../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../assets/menu_open.svg";
import menu_close from "../assets/menu_close.svg";
import { useRef } from "react";

const Navbar = () => {
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
      <img src={menu_open} alt="" onClick={openMenu} className="nav-mob-open" />
      <ul
        ref={menuRef}
        className="flex items-center list-none gap-10 text-xl nav-menu"
      >
        <img
          src={menu_close}
          alt=""
          onClick={closeMenu}
          className="nav-mob-close "
        />
        <li className="menu-li">
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? (
            <img src={underline} alt="" className="menu-li-img" />
          ) : (
            <></>
          )}
        </li>
        <li className="menu-li">
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About me</p>
          </AnchorLink>
          {menu === "about" ? (
            <img src={underline} alt="" className="menu-li-img" />
          ) : (
            <></>
          )}
        </li>

        <li className="menu-li">
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setMenu("work")}>Projects</p>
          </AnchorLink>
          {menu === "work" ? (
            <img src={underline} alt="" className="menu-li-img" />
          ) : (
            <></>
          )}
        </li>
        <li className="menu-li">
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => setMenu("services")}>Certificates</p>
          </AnchorLink>
          {menu === "services" ? (
            <img src={underline} alt="" className="menu-li-img" />
          ) : (
            <></>
          )}
        </li>
        <li className="menu-li">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? (
            <img src={underline} alt="" className="menu-li-img" />
          ) : (
            <></>
          )}
        </li>
      </ul>
      <div className="py-2 px-4 cursor-pointer text-xl rounded-3xl bg-[linear-gradient(267deg,_#dA7C25_0.36%,_#B923E1_102.06%)] transition duration-500 transform hover:scale-105 nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect with Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
