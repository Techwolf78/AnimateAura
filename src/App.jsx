import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Career from "./components/Career";
import Services from "./components/Services";
import "./App.css";
import JumpingSheep from "./components/WalkingSheep.jsx"; // Import the Sheep component

function App() {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");
    const handleMouseMove = (e) => {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
    };
    const handleMouseEnter = () => {
      cursor.classList.add("custom-cursor-active");
    };
    const handleMouseLeave = () => {
      cursor.classList.remove("custom-cursor-active");
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.querySelectorAll(".sector-card").forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.querySelectorAll(".sector-card").forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <Router>
      <div className="bg-[#0f172a] min-h-screen text-white relative">
        <JumpingSheep />
        <div className="custom-cursor"></div>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
