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
        duration: 3,
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
        zIndex: 9999,
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img
        src="./src/assets/sheep.png" // Replace with the correct path to your sheep image
        alt="Sheep"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "5px",
        }}
      />
    </div>
  );
};

export default JumpingSheep;
