import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const work  = ({isDarkMode}) => {
  return (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center text-lg mb-2 font-Ovo'>My portfolio</h4>
        <h2 className='text-center text-5xl font-Ovo'>My latest work</h2>

        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            Here are some of the projects I have worked on recently. Each project showcases my skills in web development,
            from front-end design to back-end functionality. I take pride in delivering high-quality work that
            meets the needs of my clients and provides an excellent user experience. Feel free to explore these
            projects to see the range of my capabilities and the quality of my work.    
        </p>

        <div className='grid grid-cols-4 my-10 gap-5 dark:text-black'
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
          {workData.map((project, index) => (
            <div key={index} 
            className='aspect-square bg-no-repeat bg-cover rounded-lg bg-center 
            relative cursor-pointer group'
            style={{backgroundImage: `url(${project.bgImage})`}}>
              
              <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2
              -translate-x-1/2 py-3 px-5 flex item-center justify-between duration-500
              group-hover:bottom-7 '>

                <div>
                <h2 className='font-semibold'>{project.title}</h2>
                <p className='text-sm text-gray-700'>{project.description}</p>

              </div>
              
              <div className='border rounded-full border-black w-9 aspect-square
              flex items-center justify-center shadow-[2px_2px_0-#000]
               group-hover:bg-lime-300 transition'>
                <Image src={assets.send_icon} alt='send icon' className='w-5' />
              </div>
              </div>
            </div>
          ))}
        </div>

        <a href='' className='w-max flex items-center justify-center gap-2
        text-gray-700 border-[0.5px] border-gray-700 px-10 py-3 rounded-full
        hover:bg-lightHover hover:shadow-lg duration-500 mx-auto  my-20 dark:text-white 
        dark:border-white dark:hover:bg-[#2a004a]'>
          show more <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} 
          alt='right arrow' className
          ='w-4' />
        </a>

    </div>
  )
}

export default work 
