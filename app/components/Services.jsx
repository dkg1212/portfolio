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
    },
    {
      icon: <MonitorSmartphone className="w-10 h-10 text-blue-500" />,
      title: "Frontend UI/UX",
      description:
        "Creating responsive, mobile-first layouts with React and Tailwind, delivering smooth and engaging user experiences.",
    },
    {
      icon: <Server className="w-10 h-10 text-green-500" />,
      title: "Backend & APIs",
      description:
        "Designing secure RESTful APIs with Node.js and Express, including authentication (JWT), validation, and error handling.",
    },
    {
      icon: <Database className="w-10 h-10 text-orange-500" />,
      title: "Databases & Modeling",
      description:
        "Working with MySQL to design relational schemas, write efficient queries, and manage migrations and backups.",
    },
    {
      icon: <Cpu className="w-10 h-10 text-pink-500" />,
      title: "IoT & Embedded",
      description:
        "Developing IoT projects with ESP32/NodeMCU, integrating sensors, and creating real-time alert systems.",
    },
    {
      icon: <Network className="w-10 h-10 text-indigo-500" />,
      title: "Networks & Systems",
      description:
        "Exploring computer networks, routing concepts, and system programming fundamentals.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      id="services"
      className="w-full px-[10%] py-16 scroll-mt-20"
    >
      {/* Section Headings */}
      <motion.h4
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-center text-lg mb-2 font-Ovo text-purple-500 tracking-wide"
      >
        What I Do
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="text-center text-5xl font-Ovo bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent"
      >
        My Skills & Interests
      </motion.h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-gray-300">
        Focused on full-stack web development, secure backends, responsive UIs, and IoT systems.
        Always exploring graphics programming and computer networks to expand my skills.
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {serviceData.map(({ icon, title, description }, index) => (
          <motion.div
            whileHover={{ y: -5 }}
            key={index}
            className="rounded-2xl p-7 bg-white dark:bg-white/5 border border-purple-100 dark:border-gray-700/50
            shadow-sm hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
          >
            <div className="mb-4">{icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
            <p className="text-sm text-gray-600 leading-6 dark:text-gray-300">
              {description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="mt-16">
        <h3 className="text-center text-3xl font-Ovo mb-10 text-gray-800 dark:text-white">My Skills</h3>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {Object.keys(skills).map((category, idx) => (
            <button
              key={idx}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md"
                  : "bg-white dark:bg-gray-800 border border-purple-200 dark:border-gray-700 text-gray-700 dark:text-white/80 hover:border-purple-400"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-8 gap-8 justify-items-center"
          >
            {skills[activeCategory].map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center gap-2 group cursor-pointer"
              >
                <div
                  className="w-14 h-14 flex items-center justify-center rounded-xl bg-white dark:bg-gray-800 
                  border border-purple-100 dark:border-gray-700
                  shadow-sm group-hover:shadow-md group-hover:border-purple-300 transition-all duration-200"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-9 h-9 object-contain"
                    loading="lazy"
                  />
                </div>
                <p className="text-xs font-medium text-gray-600 dark:text-white/70 group-hover:text-purple-600 transition-colors text-center">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>*Currently open to internships and entry-level opportunities.</p>
      </div>
    </motion.div>
  );
};

export default Services;
