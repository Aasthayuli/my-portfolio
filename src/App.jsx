import { motion } from "framer-motion";
import About from "./components/About.jsx";
import Certificates from "./components/Certificates.jsx";
import Contact from "./components/Contact.jsx";
import Experience from "./components/Experience.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import MyWork from "./components/MyWork.jsx";
import Navbar from "./components/Navbar.jsx";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { createContext } from "react";

export const SoundContext = createContext();
function App() {
  const enableSound = () => {
    const audio = new Audio("/welcome.mp3");
    audio.volume = 0.5;
    audio.play().catch((err) => console.log("Autoplay blocked:", err));
  };
  return (
    <div className="bg-[#161513] text-white font-outfit overflow-x-hidden">
      {/* Navbar with animation */}
      <SoundContext.Provider value={{ enableSound }}>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Navbar />
        </motion.div>

        {/* Hero section animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Hero />
        </motion.div>

        {/* About section animation */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <About />
        </motion.div>

        {/* Experience section animation */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Experience />
        </motion.div>

        {/* MyWork animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <MyWork />
        </motion.div>

        {/* Certificates animation */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Certificates />
        </motion.div>

        {/* Contact animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Contact />
        </motion.div>

        {/* Footer animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Footer />
        </motion.div>

        {/* Back to top button animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="hidden md:flex fixed bottom-4 right-4 flex-col items-center"
        >
          <AnchorLink
            offset={50}
            href="#home"
            className="animate-bounce text-2xl text-white p-3 rounded-full hover:bg-[#333] transition "
            onClick={enableSound}
          >
            <i className="fa-solid fa-arrow-up-long"></i>
          </AnchorLink>
          <span className="text-sm mt-1">Back to Top</span>
        </motion.div>
      </SoundContext.Provider>
    </div>
  );
}

export default App;
