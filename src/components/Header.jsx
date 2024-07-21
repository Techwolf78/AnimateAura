import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";
import "./css/Header.css";

const Header = () => {
  const styles = useSpring({
    loop: true,
    from: {
      transform: "scale(1)",
      boxShadow: "20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff",
    },
    to: [
      {
        transform: "scale(1.1)",
        boxShadow: "10px 10px 30px #d9d9d9, -10px -10px 30px #ffffff",
      },
      {
        transform: "scale(1)",
        boxShadow: "20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff",
      },
    ],
    config: { duration: 1000 },
  });

  return (
    <header className="flex flex-col sm:flex-row justify-between items-center py-4 px-6 sm:px-8">
      <animated.h1 style={styles} className="clay-logo">
        <Link to="/" className="hover:text-pink-500 text-lg">
          AnimateAura
        </Link>
      </animated.h1>
      <nav className="mt-4 sm:mt-0">
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8">
          <Link to="/" className="hover:text-pink-500 text-lg">
            Home
          </Link>
          <Link to="/about" className="hover:text-pink-500 text-lg">
            About
          </Link>
          <Link to="/career" className="hover:text-pink-500 text-lg">
            Career
          </Link>
          <Link to="/services" className="hover:text-pink-500 text-lg">
            Services
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
