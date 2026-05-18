import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Social from "./components/Home/Social";
import About from "./components/About/About";
import Skills from "./components/Skills/Skils";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <>
      <Header />
      <div className="main">
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
    </>
  )
}

export default App;