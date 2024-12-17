"use client"

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, Zap, Globe, Rocket } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const FeatureIcon = ({ icon: Icon, color }) => (
  <motion.div 
    className="p-3 rounded-full bg-white/10 backdrop-blur-sm"
    whileHover={{ rotate: 360, scale: 1.1 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Icon className={`h-8 w-8 ${color}`} />
  </motion.div>
);

const Hero = () => {
  const controls = useAnimation();
  const particlesInit = useRef(async (engine) => {
    await loadFull(engine);
  });

  const [activeFeature, setActiveFeature] = useState(0);
  const features = [
    {
      icon: Zap,
      color: "text-[#f36b22]",
      title: "Rapid Innovation",
      description: "Accelerate your ideas from concept to reality with unprecedented speed."
    },
    {
      icon: Globe,
      color: "text-[#4a90e2]",
      title: "Global Reach",
      description: "Connect and scale your vision across international markets and boundaries."
    },
    {
      icon: Rocket,
      color: "text-[#9b59b6]",
      title: "Transformative Solutions",
      description: "Breakthrough technologies that redefine what's possible in your industry."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);

    controls.start({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 1, 
        ease: "easeOut",
        staggerChildren: 0.3
      }
    });

    return () => clearInterval(interval);
  }, [controls, features.length]);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#1a1b4b] to-[#0a0b2a]">
      <Particles
        id="tsparticles"
        init={particlesInit.current}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          particles: {
            color: { value: "#ffffff" },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              speed: 1,
              direction: "none",
              enable: true,
              random: false,
              straight: false,
              outModes: { default: "out" }
            },
            number: { value: 150, density: { enable: true, area: 800 } },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" }
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
              push: { quantity: 4 }
            }
          },
          detectRetina: true
        }}
        className="absolute inset-0 z-0"
      />

      <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/drxouwbms/image/upload/v1734175022/future_mztxr8.avif')] opacity-20 bg-cover bg-center" />

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <motion.div 
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
        >
          <motion.div
            className="animate-pulse"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Sparkles className="h-20 w-20 text-[#f36b22] mb-8 drop-shadow-[0_0_10px_rgba(243,107,34,0.5)]" />
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-md">
            Transforming 
            <TypeAnimation
              sequence={[
                " Visions",
                2000,
                " Ambitions",
                2000,
                " Futures",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="text-[#f36b22] ml-4"
            />
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mb-12 leading-relaxed">
            Unleash the power of innovation with our comprehensive ecosystem designed to accelerate your most audacious goals and breakthrough ideas.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            <motion.button 
              className="px-10 py-4 bg-[#f36b22] text-white rounded-full flex items-center gap-3 hover:bg-[#e25b12] transition-all shadow-2xl shadow-[#f36b22]/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <ArrowRight className="h-6 w-6" />
            </motion.button>
            <motion.button 
              className="px-10 py-4 border-2 border-white text-white rounded-full hover:bg-white/10 transition-all shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Solutions
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
            <AnimatePresence mode="wait">
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: index === activeFeature ? 1 : 0.6, 
                    y: index === activeFeature ? 0 : 20 
                  }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className={`p-6 rounded-xl shadow-lg transition-all duration-500 ${
                    index === activeFeature 
                      ? 'bg-white/20 border border-white/30' 
                      : 'bg-white/10'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <FeatureIcon icon={feature.icon} color={feature.color} />
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;