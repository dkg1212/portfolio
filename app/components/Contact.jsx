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
      transition={{ duration: 1 }}
      id="contact"
      className="relative w-full px-[12%] py-20 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none"
    >
      {/* Gradient aura behind */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-40 bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-cyan-400"></div>

      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-lg mb-2 font-Ovo text-gray-700 dark:text-pink-200"
      >
        Connect with me
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent"
      >
        Get in Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-white/70 leading-relaxed"
      >
        Always open for new{" "}
        <span className="text-purple-500 font-semibold">projects</span>,{" "}
        <span className="text-pink-500 font-semibold">ideas</span>, or{" "}
        <span className="text-orange-500 font-semibold">collabs</span>.  
        Drop me a message and let’s create magic together ✨
      </motion.p>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto backdrop-blur-lg bg-white/70 dark:bg-black/50 p-8 rounded-2xl shadow-lg border border-white/20 dark:border-white/30"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4 mb-6">
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            placeholder="Enter your name"
            required
            className="flex-1 p-3 outline-none border rounded-md bg-white/80 dark:bg-[#2a004a]/40 
            border-gray-300 dark:border-white/40 focus:ring-2 focus:ring-pink-400"
            name="name"
          />

          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            placeholder="Enter your email address"
            required
            className="flex-1 p-3 outline-none border rounded-md bg-white/80 dark:bg-[#2a004a]/40 
            border-gray-300 dark:border-white/40 focus:ring-2 focus:ring-purple-400"
            name="email"
          />
        </div>

        <motion.textarea
          whileFocus={{ scale: 1.01 }}
          rows="6"
          placeholder="Enter your message"
          required
          className="w-full p-4 outline-none border rounded-md bg-white/80 dark:bg-[#2a004a]/40 
          border-gray-300 dark:border-white/40 focus:ring-2 focus:ring-orange-400"
          name="message"
        ></motion.textarea>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(236,72,153,0.6)" }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="py-3 mt-6 px-10 w-max flex items-center justify-between gap-3 
          bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white 
          rounded-full mx-auto shadow-md shadow-pink-500/30 hover:shadow-pink-500/50 
          transition-all duration-500"
        >
          Submit Now{" "}
          <Image src={assets.right_arrow_white} alt="arrow" className="w-4" />
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-6 text-center font-semibold text-gray-700 dark:text-white"
        >
          {result}
        </motion.p>
      </motion.form>
    </motion.div>
  )
}

export default Contact
