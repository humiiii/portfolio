import React from "react";
import Hero from "./section/Hero";
import Showcase from "./section/Showcase";
import Navbar from "./components/Navbar";
import Logo from "./section/Logo";
import FeatureCards from "./section/FeatureCards";
import ExperienceSection from "./section/ExperienceSection";
import TechStack from "./section/TechStack";
import Testimonials from "./section/Testimonials";
import Contact from "./section/Contact";
import Footer from "./section/Footer";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Navbar />
      <Hero />
      <Showcase />
      <Logo />
      <FeatureCards />
      <ExperienceSection />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
