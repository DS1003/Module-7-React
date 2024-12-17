import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin, Twitter, Mail, Code, CloudCog, PaintBucket, Zap, ArrowUpRight } from 'lucide-react';

const Team = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedMember, setSelectedMember] = useState(null);

  const team = [
    {
      name: "Seydina Mouhammad Diop",
      role: "Front End Developer | UI/UX Designer",
      image: "https://res.cloudinary.com/drxouwbms/image/upload/v1734391710/seydina-removebg-preview_btrgp6.png",
      bio: "Digital transformation expert with a passion for creating intuitive and beautiful user experiences.",
      skills: [
        { icon: Code, color: "text-[#4a90e2]" },
        { icon: PaintBucket, color: "text-[#f36b22]" }
      ],
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        email: "seydina@sparkconsulting.com"
      }
    },
    {
      name: "Serigne Fallou Seck",
      role: "Back End Developer | Devops",
      image: "https://res.cloudinary.com/drxouwbms/image/upload/v1734391519/fallou-removebg-preview_rckbfz.png",
      bio: "Experienced back-end developer with a passion for building scalable and efficient systems.",
      skills: [
        { icon: CloudCog, color: "text-[#4a90e2]" },
        { icon: Zap, color: "text-[#f36b22]" },
        { icon: PaintBucket, color: "text-[#f36b22]" }

      ],
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        email: "fallou@sparkconsulting.com"
      }
    },
    {
      name: "Fanta Ndao Tine",
      role: "Project Manager | Full Stack Developer",
      image: "https://res.cloudinary.com/drxouwbms/image/upload/v1734391711/fanta-removebg-preview_eamyrs.png",
      bio: "Driven project manager with a focus on delivering high-quality solutions on time and within budget.",
      skills: [
        { icon: ArrowUpRight, color: "text-[#4a90e2]" },
        { icon: CloudCog, color: "text-[#f36b22]" } 
      ],
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        email: "jane@sparkconsulting.com"
      }
    },
    {
      name: "Ndiaga Lo",
      role: "Front End Developer",
      image: "https://res.cloudinary.com/drxouwbms/image/upload/v1732391040/h3gxu5c7wsfkmwbbkfiq.png",
      bio: "Digital transformation expert with a passion for creating intuitive and beautiful user experiences.",
      skills: [
        { icon: Code, color: "text-[#4a90e2]" },
        { icon: PaintBucket, color: "text-[#f36b22]" }, 
      ],
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        email: "seydina@sparkconsulting.com"
      }
    }
  ];

  const SocialIcon = ({ icon: Icon, href, color = "text-white" }) => (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-12 h-12 rounded-full bg-white/20 flex items-center justify-center ${color} hover:bg-white hover:text-[#2e3192] transition-all duration-300`}
      whileHover={{ 
        scale: 1.1,
        rotate: 360
      }}
      whileTap={{ scale: 0.9 }}
    >
      <Icon className="w-6 h-6" />
    </motion.a>
  );

  return (
    <motion.section 
      ref={scrollRef}
      id="team" 
      className="py-44 bg-white overflow-hidden"
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
        className="container mx-auto px-4"
      >
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-5xl font-bold text-[#2e3192] mb-6 drop-shadow-md">Our Innovative Team</h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-xl leading-relaxed">
            A collective of passionate innovators, designers, and developers dedicated to transforming digital landscapes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="group relative"
              animate={{
                y: [0, -20, 0],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              whileHover={{ 
                scale: 1.05 
              }}
              onClick={() => setSelectedMember(member)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2e3192]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex justify-center space-x-4 mb-4">
                      {member.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          className={`w-12 h-12 rounded-full bg-white/20 flex items-center justify-center ${skill.color}`}
                          whileHover={{ 
                            rotate: 360, 
                            scale: 1.2 
                          }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <skill.icon className="w-6 h-6" />
                        </motion.div>
                      ))}
                    </div>
                    <p className="text-white text-center text-sm">{member.bio}</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-semibold text-[#2e3192] mb-2">{member.name}</h3>
                <p className="text-[#f36b22] text-lg">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal logic remains unchanged */}
        <AnimatePresence>
          {selectedMember && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedMember(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white rounded-2xl max-w-2xl w-full p-10 relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="absolute top-4 right-4 text-gray-500 hover:text-red-500 flex items-center gap-2"
                  onClick={() => setSelectedMember(null)}
                >
                  Close <ArrowUpRight className="w-5 h-5" />
                </button>
                <div className="flex items-center space-x-8">
                  <img 
                    src={selectedMember.image} 
                    alt={selectedMember.name} 
                    className="w-48 h-48 rounded-full object-cover shadow-lg"
                  />
                  <div>
                    <h2 className="text-3xl font-bold text-[#2e3192] mb-2">{selectedMember.name}</h2>
                    <p className="text-[#f36b22] text-xl mb-4">{selectedMember.role}</p>
                    <p className="text-gray-700 mb-6">{selectedMember.bio}</p>
                    <div className="flex space-x-4">
                      <SocialIcon icon={Linkedin} href={selectedMember.socialLinks.linkedin} color="text-[#0077b5]" />
                      <SocialIcon icon={Twitter} href={selectedMember.socialLinks.twitter} color="text-[#1da1f2]" />
                      <SocialIcon icon={Mail} href={`mailto:${selectedMember.socialLinks.email}`} color="text-[#ea4335]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
};

export default Team;
