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
      repoLink:
        "https://github.com/dkg1212/interHostelTournaumentManagementSystem",
    },
    {
      title: "Task Manager App ",
      description:
        "A modern, responsive, and feature-rich task management web app built with Next.js 14, React, Tailwind CSS v4.1+, and JWT authentication. Includes task CRUD, drag & drop, priority sorting, and dark mode.",
      bgImage: "/work-1.png",
      liveLink: "https://taskmangerwebapp.vercel.app/",
      repoLink: "https://github.com/dkg1212/Task-Manger-App-UI",
      backendLink: "https://github.com/dkg1212/task-manager-app",
    },
    {
      title: "DevTinder – Tinder for Developers",
      description:
        "A fun Tinder-inspired app for developers to connect and collaborate. Built with React (UI) and Node.js (Backend).",
      bgImage: "/work-4.png",
      liveLink: "http://13.60.41.185/",
      repoLink: "https://github.com/dkg1212/devtinder-UI",
      backendLink: "https://github.com/dkg1212/Devtinder",
    },
    {
      title: "YTShorts – YouTube Shorts Clone",
      description:
        "A modern web app for creating, uploading, and sharing YouTube-style short videos. Features Clerk auth, Prisma, and a beautiful UI with shadcn/ui.",
      bgImage: "/work-2.png",
      liveLink: null,
      repoLink: "https://github.com/dkg1212/YTShorts",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-20 scroll-mt-20 relative"
    >
      {/* Gradient Glow */}
      <div className="absolute inset-0 -z-10 opacity-30 blur-3xl bg-gradient-to-r from-fuchsia-500/40 via-purple-400/30 to-cyan-400/40 rounded-full"></div>

      {/* Section Headings */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-lg mb-2 font-Ovo text-gray-600 dark:text-pink-200"
      >
        My Portfolio
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent"
      >
        My Latest Work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-white/70 leading-relaxed"
      >
        Here are some of the projects I’ve built recently, blending
        <span className="text-purple-500 font-semibold"> design</span>,
        <span className="text-pink-500 font-semibold"> functionality</span>, and
        <span className="text-orange-500 font-semibold">
          {" "}
          real-world problem solving
        </span>
        .
      </motion.p>

      {/* Project Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid my-10 gap-8"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
      >
        {workData.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -8 }}
            transition={{ duration: 0.4 }}
            className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-pink-500/20 flex flex-col h-[420px]" // fixed height
          >
            {/* Project Image */}
            <div
              className="w-full h-40 bg-cover bg-center duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${project.bgImage})` }}
            />

            {/* Overlay Card */}
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex-1 bg-white/80 dark:bg-black/70 backdrop-blur-md p-5 flex flex-col justify-between duration-500"
            >
              <div>
                <h2 className="font-semibold text-lg text-gray-800 dark:text-white">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-white/70 line-clamp-4">
                  {project.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-4">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md hover:scale-105 transition"
                  >
                    Live
                  </a>
                )}
                {project.repoLink && (
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm rounded-full border border-gray-600 dark:border-white text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                  >
                    GitHub
                  </a>
                )}
                {project.backendLink && (
                  <a
                    href={project.backendLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm rounded-full border border-gray-600 dark:border-white text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                  >
                    Backend
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Work;
