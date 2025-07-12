import About from "./components/About.jsx";
import Certificates from "./components/Certificates.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import MyWork from "./components/MyWork.jsx";
import Navbar from "./components/Navbar.jsx";
import AnchorLink from "react-anchor-link-smooth-scroll";

function App() {
  return (
    <div className="bg-[#161513] text-white font-outfit">
      <Navbar />
      <Hero />
      <About />
      <MyWork />
      <Certificates />
      <Contact />
      <Footer />

      <AnchorLink
        offset={50}
        href="#home"
        className="text-2xl text-white fixed bottom-4 right-4"
      >
        <i class="fa-solid fa-arrow-up-long"></i>
      </AnchorLink>
    </div>
  );
}

export default App;
