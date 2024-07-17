import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const JumpingSheep = () => {
  const sheepRef = useRef(null);

  useEffect(() => {
    const sheep = sheepRef.current;

    const getRandomPosition = (min, max) => {
      return Math.random() * (max - min) + min;
    };

    const bounce = () => {
      const sheepBounds = sheep.getBoundingClientRect();
      const containerBounds = document.body.getBoundingClientRect();

      gsap.to(sheep, {
        x: getRandomPosition(0, containerBounds.width - sheepBounds.width),
        y: getRandomPosition(0, containerBounds.height - sheepBounds.height),
        duration: 1,
        ease: "power2.inOut",
        onComplete: bounce,
      });
    };

    bounce();

    return () => {
      gsap.killTweensOf(sheep);
    };
  }, []);

  return (
    <div
      ref={sheepRef}
      style={{
        position: "absolute",
        width: "50px",
        height: "50px",
        backgroundColor: "white",
        borderRadius: "50%",
        zIndex: 9999,
        backgroundImage: "url('./src/assets/sheep.png')",
        backgroundSize: "cover",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    />
  );
};

export default JumpingSheep;
