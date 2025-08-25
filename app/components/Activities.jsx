// src/pages/ExtracurricularActivities.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGoogle, FaGithub, FaUserGraduate, FaCertificate, FaHandsHelping } from 'react-icons/fa';

const ExtracurricularActivities = () => {
  const activities = [
    {
      role: "Core Team Member (Programming)",
      organization: "GDG Tezpur University",
      duration: "Aug 2024 – Present",
      description: "Organized coding workshops and hackathons. Mentored juniors in programming and web development.",
      icon: <FaGoogle className="text-4xl text-purple-500" />
    },
    {
      role: "Registration Committee Member",
      organization: "Techxetra '24, Tezpur University",
      duration: "Nov 2024",
      description: "Managed event registrations and coordinated participant queries during the Techxetra festival.",
      icon: <FaUserGraduate className="text-4xl text-blue-500" />
    },
    {
      role: "Member",
      organization: "Google Developer Groups, Tezpur University",
      duration: "Aug 2023 – June 2024",
      description: "Participated in Google Developer Group meetups and contributed to community.",
      icon: <FaGithub className="text-4xl text-black dark:text-white" />
    },
    {
      role: "Student Volunteer",
      organization: "National Service Scheme (NSS)",
      duration: "Nov 2022 – June 2024",
      description: "Assisted in community service programs, awareness campaigns, and social initiatives.",
      icon: <FaHandsHelping className="text-4xl text-green-500" />
    },
  ];

  const certificates = [
    {
      title: "Introduction to C++",
      issuer: "Coding Ninjas",
      links: {
        completion: "https://certificate.codingninjas.com/view/789daa4be35d9b11",
        excellence: "https://certificate.codingninjas.com/view/15fdff9a778e534b"
      },
      icon: <FaCertificate className="text-4xl text-yellow-500" />
    },
    {
      title: "The Joy of Computing using Python",
      issuer: "NPTEL",
      links: {
        certificate: "https://drive.google.com/file/d/1qJyi8DRxzUOgFuCJOGPXdYFq-3_OArlm/view?usp=drive_link"
      },
      icon: <FaCertificate className="text-4xl text-orange-500" />
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="extracurricular"
      className="w-full px-[10%] scroll-mt-20 relative"
    >
      {/* Gradient Glow Background */}
      <div className="absolute inset-0 -z-10 opacity-30 blur-3xl bg-gradient-to-r from-fuchsia-500/40 
      via-purple-400/30 to-cyan-400/40 rounded-full"></div>

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-2xl sm:text-5xl lg:text-[50%px]  font-Ovo bg-gradient-to-r from-purple-600 
        via-pink-500 to-orange-400 bg-clip-text text-transparent "
      >
        Extracurricular Activities & Certificates
      </motion.h2>

      {/* Activities Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="grid my-10 gap-8 py-20"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
      >
        {activities.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -8 }}
            transition={{ duration: 0.4 }}
            className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 bg-white/20
            dark:bg-black/20 p-6 flex flex-col items-start gap-4"
          >
            {/* Icon */}
            <div>{item.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{item.role}</h3>
              <p className="text-gray-500 dark:text-white/70 text-sm">{item.organization}</p>
              <p className="text-gray-400 dark:text-white/50 text-sm mb-2">{item.duration}</p>
              <p className="text-gray-700 dark:text-white/80">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Certificates Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="grid my-10 gap-8"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
      >
        {certificates.map((cert, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, y: -8 }}
            transition={{ duration: 0.4 }}
            className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-pink-500/20 bg-white/20
            dark:bg-black/20 p-6 flex flex-col items-start gap-4"
          >
            {/* Icon */}
            <div>{cert.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{cert.title}</h3>
            <p className="text-gray-500 dark:text-white/70 text-sm mb-2">{cert.issuer}</p>
            <div className="flex flex-col space-y-2">
              {Object.keys(cert.links).map((key, i) => (
                <a
                  key={i}
                  href={cert.links[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline dark:text-pink-400"
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ExtracurricularActivities;
