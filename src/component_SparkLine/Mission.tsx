import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Rocket, Globe, ArrowRight } from 'lucide-react';
import { useState, useRef } from 'react';

const Mission = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Parallax and scroll-based transformations
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 20]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50, 
      rotateX: -20,
      scale: 0.8 
    },
    visible: {
      opacity: 1, 
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 20,
      },
    },
  };

  return (
    <section 
      ref={sectionRef}
      id="mission" 
      className="relative py-56 bg-white overflow-hidden"
    >
      {/* Animated Neon Background - Restored from Original */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        {/* Diagonal neon lines - Restored */}
        <motion.div 
          initial={{ opacity: 0, x: -200 }}
          animate={{ 
            opacity: [0.3, 0.7, 0.3],
            x: [-200, 0, 200],
            rotate: [45, 45, 45]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute w-[200vw] h-[3px] bg-gradient-to-r from-[#2f3193] via-[#f26b23] to-[#2f3193] opacity-70 rotate-45 top-1/3 left-[-50%] animate-line-move"
        ></motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -250 }}
          animate={{ 
            opacity: [0.5, 0.9, 0.5],
            x: [-250, 50, 250],
            rotate: [45, 45, 45]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute w-[200vw] h-[3px] bg-gradient-to-r from-[#f26b23] via-[#2f3193] to-[#f26b23] opacity-50 rotate-45 top-1/2 left-[-60%] animate-line-move"
        ></motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -200 }}
          animate={{ 
            opacity: [0.7, 0.3, 0.7],
            x: [-200, 100, 200],
            rotate: [-45, -45, -45]
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute w-[200vw] h-[3px] bg-gradient-to-r from-[#2f3193] via-[#f26b23] to-[#2f3193] opacity-70 rotate-[-45deg] bottom-1/4 left-[-50%] animate-line-move-reverse"
        ></motion.div>

        {/* Random glowing dots - Restored with Enhanced Animation */}
        {[...Array(40)].map((_, i) => {
          const delay = Math.random() * 5;
          const duration = 2 + Math.random() * 4;
          return (
            <motion.div
              key={i}
              initial={{ 
                opacity: 0,
                scale: 0.5,
                x: Math.random() * 200 - 100,
                y: Math.random() * 200 - 100
              }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
                x: [
                  Math.random() * 50 - 25, 
                  Math.random() * 50 - 25, 
                  Math.random() * 50 - 25
                ],
                y: [
                  Math.random() * 50 - 25, 
                  Math.random() * 50 - 25, 
                  Math.random() * 50 - 25
                ]
              }}
              transition={{
                duration: duration,
                delay: delay,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className={`absolute w-2 h-2 bg-gradient-to-br from-[#2f3193] to-[#f26b23] rounded-full blur-lg`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`
              }}
            ></motion.div>
          );
        })}
      </motion.div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        style={{ rotateX }}
        className="container mx-auto px-4 relative z-10"
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.h2 
            animate={{
              textShadow: [
                '0 0 5px rgba(47,49,146,0.3)',
                '0 0 10px rgba(242,107,35,0.3)',
                '0 0 5px rgba(47,49,146,0.3)'
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
            className="text-5xl font-bold text-[#2e3192] mb-4 tracking-wide"
          >
            Our Mission
          </motion.h2>
          <p className="text-black/50 max-w-3xl mx-auto text-lg">
            To empower businesses through innovative digital solutions and transform the way they operate in the modern world.
          </p>
        </motion.div>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: <Target className="h-12 w-12" />,
              title: 'Vision',
              description:
                'To be the catalyst for digital transformation, helping businesses thrive in an ever-evolving technological landscape.',
            },
            {
              icon: <Rocket className="h-12 w-12" />,
              title: 'Innovation',
              description:
                'Pushing boundaries with cutting-edge solutions that solve real-world problems and drive business growth.',
            },
            {
              icon: <Globe className="h-12 w-12" />,
              title: 'Impact',
              description:
                'Creating lasting positive change through digital excellence and knowledge sharing across industries.',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                rotate: Math.random() * 2 - 1, // Slight random rotation
                transition: { duration: 0.3 }
              }}
              className="relative bg-white/10 bg-opacity-50 backdrop-blur-md rounded-xl p-8 shadow-lg group transform transition-all duration-300"
            >
              {/* Neon Border with Animated Glow */}
              <motion.div 
                animate={{
                  boxShadow: [
                    '0 0 10px rgba(47,49,146,0.3)',
                    '0 0 20px rgba(242,107,35,0.3)',
                    '0 0 10px rgba(47,49,146,0.3)'
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
                className="absolute inset-0 rounded-xl border-[1px] border-[#2f3193] opacity-50 group-hover:opacity-100 transition-opacity duration-300"
              ></motion.div>

              {/* Icon with Floating Animation */}
              <motion.div 
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
                className="text-[#f26b23] mb-6"
              >
                {item.icon}
              </motion.div>

              {/* Rest of the card content remains the same */}
              <h3 className="text-2xl font-semibold text-[#2e3192] mb-4 tracking-wide">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.description}</p>

              {/* Animated Neon Line */}
              <motion.div 
                animate={{
                  width: ['0%', '100%', '0%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] bg-gradient-to-r from-[#2f3193] via-[#f26b23] to-[#2f3193]"
              ></motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Mission;