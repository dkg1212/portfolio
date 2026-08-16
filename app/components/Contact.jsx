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
    border border-slate-200 dark:border-slate-700
    bg-slate-50 dark:bg-slate-800/60
    text-slate-800 dark:text-white text-sm
    placeholder:text-slate-400 dark:placeholder:text-slate-500
    focus:border-cyan-400 dark:focus:border-cyan-600
    focus:bg-white dark:focus:bg-slate-800
    focus:ring-2 focus:ring-cyan-500/20 dark:focus:ring-cyan-500/10
    transition-all duration-200`

  return (
    <section
      id="contact"
      className="w-full px-4 sm:px-6 md:px-10 lg:px-[8%] py-20 sm:py-24 scroll-mt-20 relative overflow-hidden
      bg-white dark:bg-[#0a1628]"
    >
      <div className="orb w-72 h-72 top-0 left-0 bg-cyan-400/8 dark:bg-cyan-500/5" />
      <div className="orb w-72 h-72 bottom-0 right-0 bg-teal-400/8 dark:bg-teal-500/5" />

      {/* Heading */}
      <motion.p
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-center text-xs font-semibold mb-2 text-cyan-600 dark:text-cyan-400 uppercase tracking-[0.25em]"
      >
        Connect with me
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white"
      >
        Get in Touch
      </motion.h2>
      <div className="flex justify-center mt-3 mb-4">
        <div className="h-0.5 w-12 rounded-full bg-cyan-500" />
      </div>

      <p className="text-center max-w-lg mx-auto mb-10 text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
        Open for{' '}
        <span className="text-slate-700 dark:text-slate-200 font-medium">projects</span>,{' '}
        <span className="text-slate-700 dark:text-slate-200 font-medium">ideas</span>, or{' '}
        <span className="text-slate-700 dark:text-slate-200 font-medium">collaborations</span>{' '}
        — let&apos;s build something great.
      </p>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.15 }}
        onSubmit={onSubmit}
        className="relative z-10 w-full max-w-2xl mx-auto rounded-2xl p-6 sm:p-8
        border border-slate-200 dark:border-slate-700/60
        bg-white dark:bg-slate-900
        shadow-xl shadow-slate-100/60 dark:shadow-black/40"
      >
        {/* Cyan top accent line */}
        <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 mt-1">
          <div>
            <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wide">Name</label>
            <input type="text" name="name" placeholder="Your name" required className={inputCls} />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wide">Email</label>
            <input type="email" name="email" placeholder="your@email.com" required className={inputCls} />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wide">Message</label>
          <textarea name="message" rows="5" placeholder="What's on your mind?" required className={`${inputCls} resize-none`} />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="mx-auto flex items-center gap-3 px-8 sm:px-10 py-3
          bg-cyan-500 hover:bg-cyan-400 text-white font-semibold text-sm rounded-full
          shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50
          transition-all duration-200"
        >
          Send Message
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.button>

        {result && (
          <motion.p
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-center text-sm font-medium text-slate-600 dark:text-slate-300"
          >
            {result}
          </motion.p>
        )}
      </motion.form>
    </section>
  )
}

export default Contact
