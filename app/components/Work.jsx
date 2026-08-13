import React from "react";
import { motion } from "motion/react";

const Work = ({ isDarkMode }) => {
  const workData = [
    {
      title: "Inter-Hostel Management System",
      description:
        "A full-stack web application for managing hostel events, participants, and results with approval workflows for DSW & TUSC.",
      bgImage: "/work-3.png",
      liveLink: null,
      repoLink: "https://github.com/dkg1212/interHostelTournaumentManagementSystem",
    },
    {
      title: "Task Manager App",
      description:
        "A modern, responsive task management app built with Next.js 14, React, Tailwind CSS, and JWT auth. Includes task CRUD, drag & drop, priority sorting, and dark mode.",
      bgImage: "/work-1.png",
      liveLink: "https://taskmangerwebapp.vercel.app/",
      repoLink: "https://github.com/dkg1212/Task-Manger-App-UI",
      backendLink: "https://github.com/dkg1212/task-manager-app",
    },
    {
      title: "DevTinder – Tinder for Developers",
      description:
        "A Tinder-inspired app for developers to connect and collaborate. Built with React (UI) and Node.js (Backend).",
      bgImage: "/work-4.png",
      liveLink: "http://13.60.41.185/",
      repoLink: "https://github.com/dkg1212/devtinder-UI",
      backendLink: "https://github.com/dkg1212/Devtinder",
    },
    {
      title: "YTShorts – YouTube Shorts Clone",
      description:
        "A modern web app for creating, uploading, and sharing YouTube-style short videos. Features Clerk auth, Prisma, and shadcn/ui.",
      bgImage: "/work-2.png",
      liveLink: null,
      repoLink: "https://github.com/dkg1212/YTShorts",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      id="work"
      className="w-full px-[12%] py-20 scroll-mt-20 relative"
    >
      {/* Static background glow */}
      <div className="absolute inset-0 -z-10 opacity-20 blur-3xl bg-gradient-to-r from-fuchsia-400/30 via-purple-300/20 to-cyan-300/30 rounded-full pointer-events-none"></div>

      {/* Section Headings */}
      <motion.h4
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-center text-lg mb-2 font-Ovo text-purple-500 dark:text-pink-300"
      >
        My Portfolio
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="text-center text-5xl font-Ovo bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent"
      >
        My Latest Work
      </motion.h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-white/70 leading-relaxed">
        Here are some of the projects I've built recently, blending
        <span className="text-purple-600 dark:text-purple-400 font-medium"> design</span>,
        <span className="text-pink-500 font-medium"> functionality</span>, and
        <span className="text-orange-500 font-medium"> real-world problem solving</span>.
      </p>

      {/* Project Grid */}
      <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
        {workData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="group rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-purple-500/10 
            border border-purple-100 dark:border-gray-700/50 flex flex-col"
          >
            {/* Project Image */}
            <div
              className="w-full h-44 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${project.bgImage})` }}
            />

            {/* Card Content */}
            <div className="flex-1 bg-white dark:bg-gray-900/80 p-5 flex flex-col justify-between">
              <div>
                <h2 className="font-semibold text-lg text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-white/60 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 text-sm rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-sm hover:scale-105 transition-transform"
                  >
                    Live ↗
                  </a>
                )}
                {project.repoLink && (
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 text-sm rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white hover:border-purple-400 hover:text-purple-600 transition-colors"
                  >
                    GitHub
                  </a>
                )}
                {project.backendLink && (
                  <a
                    href={project.backendLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 text-sm rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white hover:border-purple-400 hover:text-purple-600 transition-colors"
                  >
                    Backend
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Work;
