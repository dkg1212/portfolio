import { Code2, MonitorSmartphone, Server, Database, Cpu, Network } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const serviceData = [
    {
      icon: <Code2 className="w-10 h-10" />,
      title: "Full-Stack Web Apps",
      description:
        "Building modern applications using the MERN stack and MySQL with focus on performance, clean architecture, and accessibility.",
      link: "#",
    },
    {
      icon: <MonitorSmartphone className="w-10 h-10" />,
      title: "Frontend UI/UX",
      description:
        "Creating responsive, mobile-first layouts with React and Tailwind, delivering smooth and engaging user experiences.",
      link: "#",
    },
    {
      icon: <Server className="w-10 h-10" />,
      title: "Backend & APIs",
      description:
        "Designing secure RESTful APIs with Node.js and Express, including authentication (JWT), validation, and error handling.",
      link: "#",
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Databases & Modeling",
      description:
        "Working with MySQL to design relational schemas, write efficient queries, and manage migrations and backups.",
      link: "#",
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "IoT & Embedded",
      description:
        "Developing IoT projects with ESP32/NodeMCU, integrating sensors, and creating real-time alert systems.",
      link: "#",
    },
    {
      icon: <Network className="w-10 h-10" />,
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
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-lg mb-2 font-Ovo"
      >
        What I Do
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My Skills & Interests
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        As a Computer Science student at Tezpur University, I focus on full-stack web
        development, secure backends, responsive UIs, and IoT systems. I also enjoy
        exploring graphics programming and computer networks, always looking to
        expand my skills and take on challenging projects.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-4 gap-6 my-10"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:bg-gray-100 hover:shadow-2xl cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-[#2a004a] dark:hover:shadow-white"
          >
            <div>{icon}</div>
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">{title}</h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
              {description}
            </p>
            <a href={link} className="flex items-center gap-2 text-sm mt-5">
              Read more
            </a>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-10 text-center opacity-80 text-sm">
        <p>*Currently open to internships and entry-level opportunities.</p>
      </div>
    </motion.div>
  );
};

export default Services;