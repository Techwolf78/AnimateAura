import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const WalkingSheep = () => {
  const sheepRef = useRef(null);

  useEffect(() => {
    const sheep = sheepRef.current;

    const getRandomPosition = (min, max) => {
      return Math.random() * (max - min) + min;
    };

    const walk = () => {
      const jumpHeight = 30;
      const jumpDuration = 0.3;
      const walkDuration = 10;
      const walkDistance = window.innerWidth + sheep.clientWidth;

      const minTop = window.innerHeight * 0.2;
      const maxTop = window.innerHeight * 0.3;
      const initialY = getRandomPosition(minTop, maxTop);

      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(sheep, { x: -sheep.clientWidth });
          gsap.to(sheep, {
            x: 0,
            duration: walkDuration,
            ease: "linear",
            onComplete: walk,
          });
        },
      });

      gsap.set(sheep, { x: -sheep.clientWidth, y: initialY });

      tl.to(sheep, {
        x: walkDistance,
        duration: walkDuration,
        ease: "linear",
      });

      const jumpFrequency = 0.3;
      if (Math.random() < jumpFrequency) {
        tl.to(
          sheep,
          {
            y: initialY - jumpHeight,
            duration: jumpDuration,
            ease: "power2.out",
          },
          `-=${jumpDuration}`
        ).to(
          sheep,
          {
            y: initialY,
            duration: jumpDuration,
            ease: "power2.in",
          },
          `-=${jumpDuration / 2}`
        );
      }
    };

    walk();

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
        overflow: "hidden",
      }}
    >
      <img
        src="./public/images/sheep.png"
        alt="Sheep"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "50%",
        }}
      />
    </div>
  );
};

export default WalkingSheep;
