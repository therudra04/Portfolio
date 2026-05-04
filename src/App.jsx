import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Social from "./components/Home/Social";

const App = () => {
  return (
    <>
      <Header />
      <div className="main">
        <Home />
      </div>
    </>
  )
}

export default App;