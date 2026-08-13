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

  const inputClass = `w-full p-3.5 rounded-xl outline-none
    border border-purple-200 dark:border-purple-800/60
    bg-white dark:bg-purple-950/40
    text-gray-800 dark:text-white
    placeholder:text-gray-400 dark:placeholder:text-gray-500
    focus:ring-2 focus:ring-purple-500/50 dark:focus:ring-purple-400/40
    focus:border-purple-400 dark:focus:border-purple-500
    transition-all duration-200`

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      id="contact"
      className="relative w-full px-[12%] py-20 scroll-mt-20 overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-600/15 dark:bg-purple-500/20 blur-[120px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-pink-600/15 dark:bg-pink-500/15 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <motion.h4
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-center text-sm mb-2 font-Ovo text-purple-500 dark:text-purple-400 uppercase tracking-widest"
      >
        Connect with me
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="text-center text-5xl font-Ovo bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent"
      >
        Get in Touch
      </motion.h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-500 dark:text-gray-400 leading-relaxed">
        Open for{' '}
        <span className="text-purple-600 dark:text-purple-400 font-semibold">projects</span>,{' '}
        <span className="text-pink-500 font-semibold">ideas</span>, or{' '}
        <span className="text-orange-500 font-semibold">collabs</span>.
        Drop a message — let's build something great together ✨
      </p>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto rounded-2xl p-8
        border border-purple-200 dark:border-purple-800/50
        bg-white dark:bg-[#130028]
        shadow-md dark:shadow-purple-900/30"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input type="text" name="name" placeholder="Your name" required className={inputClass} />
          <input type="email" name="email" placeholder="Your email" required className={inputClass} />
        </div>

        <textarea
          name="message"
          rows="6"
          placeholder="Your message..."
          required
          className={`${inputClass} resize-none`}
        />

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="mt-6 mx-auto flex items-center gap-3 px-10 py-3
          bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400
          text-white font-semibold rounded-full
          shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50
          transition-all duration-300"
        >
          Send Message
          <Image src={assets.right_arrow_white} alt="arrow" className="w-4" />
        </motion.button>

        {result && (
          <p className="mt-5 text-center font-medium text-gray-600 dark:text-gray-300">{result}</p>
        )}
      </motion.form>
    </motion.div>
  )
}

export default Contact
