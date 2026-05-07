import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Social from "./components/Home/Social";
import About from "./components/About/About";
import Skills from "./components/Skills/Skils";

const App = () => {
  return (
    <>
      <Header />
      <div className="main">
        <Home />
        <About />
        <Skills />
      </div>
    </>
  )
}

export default App;