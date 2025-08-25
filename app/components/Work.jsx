import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-20 scroll-mt-20 relative"
    >
      {/* Sexy Gradient Glow Behind */}
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
        Here are some of the projects I’ve worked on recently. Each project blends
        <span className="text-purple-500 font-semibold"> design</span>,
        <span className="text-pink-500 font-semibold"> functionality</span>, and
        <span className="text-orange-500 font-semibold"> user experience</span>.
        Dive in and see my craft come alive ✨
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
            {/* Background Project Image */}
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
              rounded-t-2xl p-5 flex items-center justify-between group-hover:pb-7 duration-500"
            >
              <div>
                <h2 className="font-semibold text-lg text-gray-800 dark:text-white">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-white/70">
                  {project.description}
                </p>
              </div>

              {/* Sexy Action Button */}
              <motion.div
                whileHover={{ rotate: 15, scale: 1.2 }}
                className="border rounded-full border-gray-700 dark:border-white w-10 h-10 flex items-center justify-center 
                bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-400 text-white shadow-md shadow-pink-500/30 cursor-pointer"
              >
                <Image src={assets.send_icon} alt="send icon" className="w-5 invert dark:invert-0" />
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Show More Button */}
      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700 border px-10 py-3 rounded-full
        hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white 
        hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-500 mx-auto my-20
        dark:text-white dark:border-white dark:hover:from-pink-500 dark:hover:to-orange-400"
      >
        Show More
        <Image
          src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
          alt="right arrow"
          className="w-4"
        />
      </motion.a>
    </motion.div>
  )
}

export default Work
