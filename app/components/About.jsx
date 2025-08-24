import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const About = ({isDarkMode}) => {
  return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1 }}
    >
      
      <motion.h4 className='text-center text-lg mb-2 font-Ovo'
        initial={{ opacity: 0,y:-20}}
        whileInView={{ opacity: 1,y:0 }}
        transition={{ duration: 0.5,delay:0.3 }}
      >Introduction</motion.h4>

      <motion.h2 className='text-center text-5xl font-Ovo'
        initial={{ opacity: 0 ,y:-20}}
        whileInView={{ opacity: 1,y:0 }}
        transition={{ duration: 0.5,delay:0.5 }}
      >About Me</motion.h2>

      <motion.div 
        initial={{ opacity: 0,scale:0.9 }}
        whileInView={{ opacity: 1,scale:1 }}
        transition={{ duration: 0.8 }}
      className='flex flex-col lg:flex-row items-center gap-20 my-20'>

        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className='w-64 sm:w-80 rounded-3xl max-w-none'>
            <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
        </motion.div>


        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 ,delay:0.8}}
        className='flex-1'>
            <p className='mb-10 max-w-2xl font-Ovo'>
                Hi, I’m Dimpal Gogoi, a Computer Science student at Tezpur University, actively looking for internship and job 
                opportunities where I can apply my skills and grow as a developer. My core interests lie in web development (MERN stack),
                databases (MySQL), and IoT systems, along with a strong foundation in computer networks and system programming.
                I’ve worked on projects like an Inter-Hostel Tournament Management System which is minor project project under curiculum
                and an IoT-enabled fire alarm system, which allowed me to apply my technical knowledge to solve real-world problems. 
                I also enjoy experimenting with programming (C++/C/Python) and learning new technologies to expand my skill set.
                
            </p>

            <p className='mb-10 max-w-2xl font-Ovo'>
                Outside of tech, I’m passionate about playing the guitar 🎸, which fuels my creativity and keeps me balanced.
                I’m eager to bring the same energy, curiosity, and problem-solving mindset to a professional environment.
            </p>



            <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 ,delay:1}}
            className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl '>
                {infoList.map(({icon,iconDark,title,description},index) =>(


                    <motion.li
                    whileHover={{ scale:1.05  }}
                    className='border-[0.5px] border-gray-400 rounded-xl 
                    p-6 cursor-pointer hover:bg-gray-100 hover:translate-y-1 duration-500
                    hover:shadow-black-500/20 hover:shadow-lg dark:border-white
                    dark:hover:shadow-white dark:hover:bg-[#2a004a]/80'
                     key={index}>
                        <Image src={isDarkMode ? iconDark: icon} alt={title} className='w-7 mt-3'/>
                        <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                        <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                    </motion.li>


                ))}
            </motion.ul>

            <motion.h4 
            initial={{y:20, opacity: 0 }}
            whileInView={{ y:0, opacity: 1 }}
            transition={{ delay:1.3 ,duration: 0.5 }}
            className='my-6 text-gray-700 font-Ovo dark:text-white/80'>Tools I use</motion.h4>

            <motion.ul 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 ,delay:1.5 }}

            className='flex items-center gap-3 sm:gap-5'>
                {toolsData.map((tool,index)=>(
                    <motion.li 
                    whileHover={{scale:1.1}}
                    
                    className='flex items-center justify-center w-12 sm:w-14 
                    aspect-square border border-gray-400 rounded-lg cursor-pointer
                    hover:bg-gray-200 hover:translate-y-1 duration-500 hover:shadow-black-500/20 hover:shadow-lg' 
                    key={index} >
                        <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
                    </motion.li>
                ))}
            </motion.ul>

        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
