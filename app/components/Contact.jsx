import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'motion/react'

const Contact = () => {
  const [result, setResult] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult("Sending...")
    const formData = new FormData(event.target)
    formData.append("access_key", "4002e91c-c877-4b79-abdc-4b40a994a212")

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })

    const data = await response.json()
    if (data.success) {
      setResult("✅ Form Submitted Successfully!")
      event.target.reset()
    } else {
      console.log("Error", data)
      setResult("❌ " + data.message)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      id="contact"
      className="relative w-full px-[12%] py-20 scroll-mt-20 overflow-hidden"
    >
      {/* Static background glows */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-purple-400/20 blur-[100px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-pink-400/20 blur-[100px] rounded-full -z-10 pointer-events-none" />

      {/* Title */}
      <motion.h4
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-center text-lg mb-2 font-Ovo text-purple-500 dark:text-pink-300"
      >
        Connect with me
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="text-center text-5xl font-Ovo bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent"
      >
        Get in Touch
      </motion.h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-white/70 leading-relaxed">
        Always open for new{" "}
        <span className="text-purple-600 dark:text-purple-400 font-semibold">projects</span>,{" "}
        <span className="text-pink-500 font-semibold">ideas</span>, or{" "}
        <span className="text-orange-500 font-semibold">collabs</span>.
        Drop me a message and let's build something great together ✨
      </p>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto bg-white dark:bg-gray-900/60 p-8 rounded-2xl shadow-md border border-purple-100 dark:border-white/10"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-2 mb-5">
          <input
            type="text"
            placeholder="Your name"
            required
            className="p-3 outline-none border border-gray-200 dark:border-white/20 rounded-lg 
            bg-gray-50 dark:bg-[#2a004a]/30 text-gray-800 dark:text-white
            focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
            name="name"
          />
          <input
            type="email"
            placeholder="Your email"
            required
            className="p-3 outline-none border border-gray-200 dark:border-white/20 rounded-lg 
            bg-gray-50 dark:bg-[#2a004a]/30 text-gray-800 dark:text-white
            focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
            name="email"
          />
        </div>

        <textarea
          rows="6"
          placeholder="Your message"
          required
          className="w-full p-4 outline-none border border-gray-200 dark:border-white/20 rounded-lg 
          bg-gray-50 dark:bg-[#2a004a]/30 text-gray-800 dark:text-white
          focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all resize-none"
          name="message"
        ></textarea>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="py-3 mt-6 px-10 flex items-center justify-center gap-3 mx-auto
          bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white 
          rounded-full shadow-md hover:shadow-lg hover:shadow-purple-500/30
          transition-all duration-300 font-medium"
        >
          Submit Now{" "}
          <Image src={assets.right_arrow_white} alt="arrow" className="w-4" />
        </motion.button>

        {result && (
          <p className="mt-5 text-center font-medium text-gray-700 dark:text-white/90">
            {result}
          </p>
        )}
      </motion.form>
    </motion.div>
  )
}

export default Contact
