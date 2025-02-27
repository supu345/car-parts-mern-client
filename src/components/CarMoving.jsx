import React, { useRef } from "react";
import { useParallax } from "react-scroll-parallax";
import sun from "../assets/Sun.png";
import Train from "../assets/Train.png";
import Cloud from "../assets/Cloud.png";
import Scene from "../assets/Scene.png";

const CarMoving = () => {
  const target = useRef(null);

  // Train moving horizontally (left to right)
  const train = useParallax({
    translateX: [-50, 50], // Moves the train from -50% to +50% of its position horizontally
    targetElement: target.current,
  });

  // Cloud moving horizontally (slightly slower motion)
  const cloud = useParallax({
    translateX: [-20, 20], // Moves the cloud from -20% to +20% of its position horizontally
    targetElement: target.current,
  });

  return (
    <div
      ref={target}
      style={{
        backgroundImage: `url(${Scene})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw", // Full viewport width
        height: "200vh", // Double the height to allow scrolling
      }}
      className="relative"
    >
      {/* Sun */}
      <div className="absolute top-10 left-40">
        <img src={sun} alt="sun" height={120} width={120} />
      </div>

      {/* Train */}
      <div
        ref={train.ref}
        className="absolute"
        style={{
          top: "50%",
          left: "10%",
        }}
      >
        <img src={Train} alt="train" height={350} width={700} />
      </div>

      {/* Cloud */}
      <div
        ref={cloud.ref}
        className="absolute"
        style={{
          top: "10%",
          left: "20%",
        }}
      >
        <img src={Cloud} height={200} width={1000} />
      </div>
    </div>
  );
};

export default CarMoving;
