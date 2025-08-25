import { Code2, MonitorSmartphone, Server, Database, Cpu, Network } from "lucide-react";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { skills } from "@/assets/assets";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState(Object.keys(skills)[0]);

  const serviceData = [
    {
      icon: <Code2 className="w-10 h-10 text-purple-500" />,
      title: "Full-Stack Web Apps",
      description:
        "Building modern applications using the MERN stack and MySQL with focus on performance, clean architecture, and accessibility.",
      link: "#",
    },
    {
      icon: <MonitorSmartphone className="w-10 h-10 text-blue-500" />,
      title: "Frontend UI/UX",
      description:
        "Creating responsive, mobile-first layouts with React and Tailwind, delivering smooth and engaging user experiences.",
      link: "#",
    },
    {
      icon: <Server className="w-10 h-10 text-green-500" />,
      title: "Backend & APIs",
      description:
        "Designing secure RESTful APIs with Node.js and Express, including authentication (JWT), validation, and error handling.",
      link: "#",
    },
    {
      icon: <Database className="w-10 h-10 text-orange-500" />,
      title: "Databases & Modeling",
      description:
        "Working with MySQL to design relational schemas, write efficient queries, and manage migrations and backups.",
      link: "#",
    },
    {
      icon: <Cpu className="w-10 h-10 text-pink-500" />,
      title: "IoT & Embedded",
      description:
        "Developing IoT projects with ESP32/NodeMCU, integrating sensors, and creating real-time alert systems.",
      link: "#",
    },
    {
      icon: <Network className="w-10 h-10 text-indigo-500" />,
      title: "Networks & Systems",
      description:
        "Exploring computer networks, routing concepts, and system programming fundamentals.",
      link: "#",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[10%] py-16 scroll-mt-20"
    >
      {/* Section Headings */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-lg mb-2 font-Ovo text-purple-500 tracking-wide"
      >
        What I Do
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent"
      >
        My Skills & Interests
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-6 mb-14 font-Ovo text-gray-600 dark:text-gray-300"
      >
        As a Computer Science student at Tezpur University, I focus on full-stack web
        development, secure backends, responsive UIs, and IoT systems. I also enjoy
        exploring graphics programming and computer networks, always looking to
        expand my skills and take on challenging projects.
      </motion.p>

      {/* Services Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-12"
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            key={index}
            className="rounded-2xl p-8 bg-white/30 dark:bg-white/10 backdrop-blur-xl border border-gray-300/30 
            dark:border-gray-700/40 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
          >
            <div className="mb-4">{icon}</div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">{title}</h3>
            <p className="text-sm text-gray-600 leading-6 dark:text-gray-300">
              {description}
            </p>
            <a href={link} className="flex items-center gap-2 text-sm mt-5 text-purple-500 hover:text-pink-500">
              Read more →
            </a>
          </motion.div>
        ))}
      </motion.div>

      {/* Skills Section */}
      <div className="mt-20">
        <h3 className="text-center text-3xl font-Ovo mb-12">My Skills</h3>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {Object.keys(skills).map((category, idx) => (
            <motion.button
              key={idx}
              whileTap={{ scale: 0.9 }}
              className={`px-5 py-2 rounded-xl shadow-md transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                  : "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white/80 hover:bg-gray-300 dark:hover:bg-gray-700"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-8 gap-10 justify-items-center"
          >
            {skills[activeCategory].map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2, rotate: 6 }}
                className="flex flex-col items-center gap-2 group cursor-pointer"
              >
                <div
                  className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br 
                  from-purple-100 via-pink-100 to-orange-100 dark:from-gray-800 dark:to-gray-900 
                  shadow-md group-hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <p
                  className="text-sm font-medium text-gray-700 dark:text-white/80 
                  group-hover:text-purple-500 transition-colors"
                >
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer Note */}
      <div className="mt-12 text-center opacity-80 text-sm">
        <p>*Currently open to internships and entry-level opportunities.</p>
      </div>
    </motion.div>
  );
};

export default Services;
