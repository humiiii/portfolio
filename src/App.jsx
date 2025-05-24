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

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Showcase />
      <Logo />
      <FeatureCards />
      <ExperienceSection />
      <TechStack />
      <Testimonials />
      <Contact />
    </>
  );
};

export default App;
