import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Work = ({ isDarkMode }) => {
  const workData = [
    {
      title: "Inter-Hostel Management System",
      description: "A full-stack web application for managing hostel events, participants, and results with approval workflows for DSW & TUSC.",
      bgImage: "/projects/inter-hostel.png", // replace with a real screenshot
      liveLink: null, // no live deployment yet
      repoLink: "https://github.com/dkg1212/interHostelTournaumentManagementSystem"
    },
    {
      title: "Todo App with React & Redux",
      description: "A beginner-friendly Todo app with Redux for state management, full CRUD, login, and Framer Motion animations.",
      bgImage: "/projects/todo-app.png", // replace with a real screenshot
      liveLink: "https://todo-list-using-react-ifn5.vercel.app/",
      repoLink: "https://github.com/dkg1212/TodoListUsingReact"
    },
    {
      title: "DevTinder – Tinder for Developers",
      description: "A fun Tinder-inspired app for developers to connect and collaborate. Built with React (UI) and Node.js (Backend).",
      bgImage: "/projects/devtinder.png", // replace with a real screenshot
      liveLink: "http://13.60.41.185/login",
      repoLink: "https://github.com/dkg1212/devtinder-UI",
      backendLink: "https://github.com/dkg1212/Devtinder"
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-20 scroll-mt-20 relative"
    >
      {/* Gradient Glow */}
      <div className="absolute inset-0 -z-10 opacity-30 blur-3xl bg-gradient-to-r from-fuchsia-500/40
      via-purple-400/30 to-cyan-400/40 rounded-full"></div>

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
        className="text-center text-5xl font-Ovo bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 
        bg-clip-text text-transparent"
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
        <span className="text-orange-500 font-semibold"> real-world problem solving</span>.
      </motion.p>

      {/* Project Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid my-10 gap-8"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}
      >
        {workData.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -8 }}
            transition={{ duration: 0.4 }}
            className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-pink-500/20"
          >
            {/* Project Image */}
            <div
              className="w-full h-60 bg-cover bg-center duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${project.bgImage})` }}
            />

            {/* Overlay Card */}
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute bottom-0 left-0 w-full bg-white/80 dark:bg-black/70 backdrop-blur-md
              rounded-t-2xl p-5 flex flex-col gap-3 group-hover:pb-7 duration-500"
            >
              <div>
                <h2 className="font-semibold text-lg text-gray-800 dark:text-white">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-white/70">
                  {project.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
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
  )
}

export default Work
