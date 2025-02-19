import React from "react";
import logo3 from "../../assets/logo3.png";

const Loader = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 to-teal-100">
      <div className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[250px] lg:h-[250px]">
        {/* SVG pour les cercles */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Cercle statique externe */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#0D9488"
            strokeWidth="1"
            opacity="0.2"
          />

          {/* Premier cercle rotatif (minimaliste) */}
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#0D9488"
            strokeWidth="2"
            strokeDasharray="251.2" // Approximativement 2 * PI * r
            strokeDashoffset="251.2"
            transform="rotate(0 50 50)"
          >
            <animate
              attributeName="stroke-dashoffset"
              dur="2s"
              values="251.2;0"
              repeatCount="indefinite"
              calcMode="ease-in-out"
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur="2s"
              repeatCount="indefinite"
              calcMode="linear"
            />
          </circle>

          {/* Deuxième cercle rotatif (inverse) */}
          <circle
            cx="50"
            cy="50"
            r="34"
            fill="none"
            stroke="#0F766E"
            strokeWidth="1.5"
            strokeDasharray="213.6" // Approximativement 2 * PI * r
            strokeDashoffset="213.6"
            transform="rotate(0 50 50)"
          >
            <animate
              attributeName="stroke-dashoffset"
              dur="2.5s"
              values="213.6;0"
              repeatCount="indefinite"
              calcMode="ease-in-out"
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="360 50 50"
              to="0 50 50"
              dur="2.5s"
              repeatCount="indefinite"
              calcMode="linear"
            />
          </circle>
        </svg>

        {/* Logo au centre */}
        <img
          src={logo3}
          alt="App Logo"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36"
        />
      </div>
    </div>
  );
};

export default Loader;
