import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'motion/react'

const Contact = () => {
  const [result, setResult] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setResult('Sending...')
    const formData = new FormData(e.target)
    formData.append('access_key', '4002e91c-c877-4b79-abdc-4b40a994a212')

    const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData })
    const data = await response.json()
    if (data.success) {
      setResult('✅ Message sent successfully!')
      e.target.reset()
    } else {
      setResult('❌ ' + data.message)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      id="contact"
      className="relative w-full px-[12%] py-20 scroll-mt-20 overflow-hidden section-bg-light dark:bg-transparent"
    >
      {/* Background blobs */}
      <div className="absolute -top-10 -left-10 w-80 h-80 bg-violet-400/20 dark:bg-purple-500/15 blur-[100px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-pink-400/20 dark:bg-pink-500/10 blur-[100px] rounded-full -z-10 pointer-events-none" />

      {/* Heading */}
      <motion.h4
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-center text-xs font-semibold mb-3 text-violet-500 dark:text-purple-400 uppercase tracking-[0.2em]"
      >
        Connect with me
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="text-center text-5xl font-Ovo bg-gradient-to-r from-violet-600 via-pink-500 to-orange-400 bg-clip-text text-transparent"
      >
        Get in Touch
      </motion.h2>

      <div className="flex justify-center mt-4 mb-6">
        <div className="h-1 w-20 rounded-full bg-gradient-to-r from-violet-500 to-pink-500" />
      </div>

      <p className="text-center max-w-2xl mx-auto mb-12 font-Ovo text-gray-500 dark:text-gray-400 leading-relaxed">
        Open for{' '}
        <span className="text-violet-600 dark:text-violet-400 font-semibold">projects</span>,{' '}
        <span className="text-pink-500 font-semibold">ideas</span>, or{' '}
        <span className="text-orange-500 font-semibold">collabs</span>.
        Drop a message — let's build something great ✨
      </p>

      {/* Form card */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto rounded-3xl p-8
        border border-violet-200 dark:border-purple-800/50
        bg-white dark:bg-[#130028]
        shadow-xl shadow-violet-200/50 dark:shadow-purple-900/30
        relative overflow-hidden"
      >
        {/* Decorative top bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-pink-500 to-orange-400" />

        {/* Name & Email row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 mt-2">
          <div className="relative group">
            <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-wide">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full p-3.5 rounded-xl outline-none
              border-2 border-gray-200 dark:border-purple-800/60
              bg-gray-50 dark:bg-purple-950/40
              text-gray-800 dark:text-white
              placeholder:text-gray-400 dark:placeholder:text-gray-500
              focus:border-violet-400 dark:focus:border-purple-500 focus:bg-white dark:focus:bg-purple-900/30
              transition-all duration-200"
            />
          </div>
          <div className="relative group">
            <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-wide">Email</label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              className="w-full p-3.5 rounded-xl outline-none
              border-2 border-gray-200 dark:border-purple-800/60
              bg-gray-50 dark:bg-purple-950/40
              text-gray-800 dark:text-white
              placeholder:text-gray-400 dark:placeholder:text-gray-500
              focus:border-pink-400 dark:focus:border-pink-500 focus:bg-white dark:focus:bg-purple-900/30
              transition-all duration-200"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-wide">Message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="What's on your mind?"
            required
            className="w-full p-3.5 rounded-xl outline-none resize-none
            border-2 border-gray-200 dark:border-purple-800/60
            bg-gray-50 dark:bg-purple-950/40
            text-gray-800 dark:text-white
            placeholder:text-gray-400 dark:placeholder:text-gray-500
            focus:border-orange-400 dark:focus:border-orange-500 focus:bg-white dark:focus:bg-purple-900/30
            transition-all duration-200"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="mt-2 mx-auto flex items-center gap-3 px-10 py-3.5
          bg-gradient-to-r from-violet-600 via-pink-500 to-orange-400
          text-white font-bold rounded-full
          shadow-lg shadow-violet-400/40 hover:shadow-violet-400/60
          transition-all duration-300"
        >
          Send Message
          <Image src={assets.right_arrow_white} alt="arrow" className="w-4" />
        </motion.button>

        {result && (
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-5 text-center font-semibold text-gray-600 dark:text-gray-300"
          >
            {result}
          </motion.p>
        )}
      </motion.form>
    </motion.div>
  )
}

export default Contact
