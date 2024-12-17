import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Lightbulb, Users, TrendingUp, ArrowRight } from 'lucide-react';
import { useRef, useState } from 'react';

const Services = () => {
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

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Digital Solutions',
      description: 'Custom software development and digital transformation strategies tailored to your needs.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Innovation Consulting',
      description: 'Strategic guidance to help your business stay ahead in the digital age.',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Masterclasses',
      description: 'Expert-led training sessions to elevate your team\'s digital capabilities.',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Growth Strategy',
      description: 'Data-driven approaches to scale your business and maximize potential.',
      color: 'from-red-500 to-pink-600'
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="relative py-56 bg-gray-50 overflow-hidden"
    >
      {/* Animated Neon Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        {/* Diagonal neon lines with enhanced animation */}
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
            rotate: [-45, -45, -45]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute w-[200vw] h-[3px] bg-gradient-to-r from-[#f26b23] via-[#2f3193] to-[#f26b23] opacity-50 rotate-[-45deg] top-1/2 left-[-50%] animate-line-move"
        ></motion.div>

        {/* Animated Glowing Dots */}
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
        {/* Section Title with Enhanced Animation */}
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
            className="text-5xl font-bold text-[#2f3193] mb-4 tracking-wide"
          >
            Our Services
          </motion.h2>
          <p className="text-black/50 max-w-3xl mx-auto text-lg">
            Comprehensive digital solutions to help your business thrive in the modern world.
          </p>
        </motion.div>

        {/* Service Cards with Enhanced Interactions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                rotate: Math.random() * 2 - 1, // Slight random rotation
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg group overflow-hidden"
            >
              {/* Animated Hover Overlay */}
              <motion.div
                initial={{ width: '0%' }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#2f3193] via-[#f26b23] to-[#2f3193]"
              />

              {/* Floating Icon with Complex Animation */}
              <motion.div 
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 2, -2, 0],
                  scale: hoveredCard === index ? 1.2 : 1
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
                className="text-[#f26b23] mb-6 transition-all duration-300"
              >
                {service.icon}
              </motion.div>

              {/* Service Card Content */}
              <h3 className="text-2xl font-semibold text-[#2f3193] mb-4 tracking-wide">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-6">{service.description}</p>

              {/* Interactive Learn More Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center text-[#2f3193] hover:text-[#f26b23] transition-colors"
              >
                Learn More 
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.button>

              {/* Floating Particle Background */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ 
                    opacity: 0,
                    x: Math.random() * 200 - 100,
                    y: Math.random() * 200 - 100
                  }}
                  animate={{ 
                    opacity: [0, 0.2, 0],
                    x: [
                      Math.random() * 20 - 10, 
                      Math.random() * 20 - 10, 
                      Math.random() * 20 - 10
                    ],
                    y: [
                      Math.random() * 20 - 10, 
                      Math.random() * 20 - 10, 
                      Math.random() * 20 - 10
                    ]
                  }}
                  transition={{
                    duration: Math.random() * 5 + 3,
                    repeat: Infinity,
                    repeatType: 'loop'
                  }}
                  className="absolute w-1 h-1 rounded-full bg-[#2f3193]/20"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`
                  }}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;