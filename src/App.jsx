import React from "react";
import Hero from "./section/Hero";
import Showcase from "./section/Showcase";
import Navbar from "./components/Navbar";
import Logo from "./section/Logo";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Showcase />
      <Logo />
    </>
  );
};

export default App;
