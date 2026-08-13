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

  const inputCls = `w-full p-3 sm:p-3.5 rounded-xl outline-none
    border-2 border-gray-200 dark:border-purple-800/60
    bg-gray-50 dark:bg-purple-950/40
    text-gray-800 dark:text-white text-sm
    placeholder:text-gray-400 dark:placeholder:text-gray-500
    focus:border-violet-400 dark:focus:border-purple-500 focus:bg-white dark:focus:bg-purple-900/30
    transition-all duration-200`

  return (
    <section
      id="contact"
      className="w-full px-4 sm:px-6 md:px-10 lg:px-[8%] py-16 sm:py-20 scroll-mt-20 relative section-bg-light dark:bg-transparent overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-64 h-64 bg-violet-400/15 dark:bg-purple-500/12 blur-[90px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-400/15 dark:bg-pink-500/8 blur-[90px] rounded-full -z-10 pointer-events-none" />

      {/* Heading */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-center text-xs font-semibold mb-2 text-violet-500 dark:text-purple-400 uppercase tracking-[0.2em]"
      >
        Connect with me
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-center text-3xl sm:text-4xl md:text-5xl font-Ovo bg-gradient-to-r from-violet-600 via-pink-500 to-orange-400 bg-clip-text text-transparent"
      >
        Get in Touch
      </motion.h2>

      <div className="flex justify-center mt-3 mb-4">
        <div className="h-1 w-16 rounded-full bg-gradient-to-r from-violet-500 to-pink-500" />
      </div>

      <p className="text-center max-w-xl mx-auto mb-10 font-Ovo text-gray-500 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
        Open for{' '}
        <span className="text-violet-600 dark:text-violet-400 font-semibold">projects</span>,{' '}
        <span className="text-pink-500 font-semibold">ideas</span>, or{' '}
        <span className="text-orange-500 font-semibold">collabs</span> — let's build something great ✨
      </p>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        onSubmit={onSubmit}
        className="w-full max-w-2xl mx-auto rounded-2xl sm:rounded-3xl p-5 sm:p-8
        border border-violet-200 dark:border-purple-800/50
        bg-white dark:bg-[#130028]
        shadow-xl shadow-violet-200/40 dark:shadow-purple-900/30
        relative overflow-hidden"
      >
        {/* Rainbow top bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-pink-500 to-orange-400" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 mt-2">
          <div>
            <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-wide">Name</label>
            <input type="text" name="name" placeholder="Your name" required className={inputCls} />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-wide">Email</label>
            <input type="email" name="email" placeholder="your@email.com" required className={inputCls} />
          </div>
        </div>

        <div className="mb-5">
          <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-wide">Message</label>
          <textarea name="message" rows="5" placeholder="What's on your mind?" required className={`${inputCls} resize-none`} />
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="mx-auto flex items-center gap-3 px-8 sm:px-10 py-3
          bg-gradient-to-r from-violet-600 via-pink-500 to-orange-400
          text-white font-bold text-sm rounded-full
          shadow-lg shadow-violet-400/40 hover:shadow-violet-400/60
          transition-all duration-300"
        >
          Send Message
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.button>

        {result && (
          <motion.p
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-center text-sm font-semibold text-gray-600 dark:text-gray-300"
          >
            {result}
          </motion.p>
        )}
      </motion.form>
    </section>
  )
}

export default Contact
