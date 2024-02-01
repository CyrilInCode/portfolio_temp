"use client";
import Image from 'next/image'

import { motion } from "framer-motion"

export default function SkillsComponent() {

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.15,
            staggerChildren: 0.1,
          },
        }
      }
        
      const item = {
        hidden: { y: 10, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      }

    return (
        <div>
            <nav className='flex justify-center lg:justify-between w-full px-10 py-1 items-center'>
          <div className=''>
          {/* <motion.div
            whileHover={{ 
              rotate: -360, 
              transition: { repeat: Infinity, ease: "linear", duration: 3 },
            }}
            initial={{ scale: 0 }}
            whileInView={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,

            }}
          > */}

            <Image
              src={'/favicon.png'}
              alt="Picture of the author"
              width={100}
              height={100}
              className='hidden lg:block'
            />
            {/* </motion.div> */}
          </div>
          <div className='mt-5'>
            {/* <ul className='flex flex-row gap-7 text-2xl'> */}
            <motion.ul
                className="flex flex-row gap-7 text-lg min-[400px]:text-2xl items-center"
                variants={container}
                initial="hidden"
                whileInView="visible"
              >
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={e => {}}
                  onHoverEnd={e => {}}
                  href='/portfolio_temp/#experience'
                  className='hover:text-tertiary hover:font-extrabold'
              >
                <motion.li key={0} className="item" variants={item} >Experiences</motion.li>
              </motion.a>
              <motion.a
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={e => {}}
                  onHoverEnd={e => {}}
                  href='/portfolio_temp/#education'
                  className='hover:text-tertiary hover:font-extrabold'
              >
                <motion.li key={1} className="item" variants={item} >Education</motion.li>
              </motion.a>
              <motion.a
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={e => {}}
                  onHoverEnd={e => {}}
                  href='/portfolio_temp/skills'
                  className='hover:text-tertiary hover:font-extrabold'
              >
                <motion.li key={2} className="item" variants={item} >Skills</motion.li>
              </motion.a>
              <motion.a
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={e => {}}
                  onHoverEnd={e => {}}
                  href='/portfolio_temp/#projects'
                  className='hover:text-tertiary hover:font-extrabold'
              >
                <motion.li key={3} className="item" variants={item} >Projects</motion.li>
              </motion.a>

              <motion.a
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={e => {}}
                  onHoverEnd={e => {}}
                  href='/portfolio_temp/#contact'
                  className='hover:text-tertiary hover:font-extrabold'
              >
                <motion.li key={4} className="item" variants={item} >Contact</motion.li>
              </motion.a>
            </motion.ul>
          </div>
        </nav>
        <div id="skills" className="px-20 w-full select-none pt-4">
             <div className="w-full row-auto cursor-default">
                    <h1 className="text-6xl text-center font-extrabold text-secondary">Skills</h1>
                </div>
                
          <div id="backend" className="flex flex-col w-full mt-10 justify-center items-center">
                <motion.div
                className="box cursor-default"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.1,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 50,
                    }
                }}
                >
                    <h1 className="text-3xl text-center font-extrabold italic select-none">Back-end</h1>
                </motion.div>
                <motion.ul
                className="flex flex-row gap-2 md:gap-4 w-full items-center justify-center"
                variants={container}
                initial="hidden"
                whileInView="visible"
                >
                    <motion.li key={0} className="item bg-secondary py-1 lg:py-3 px-1 md:px-7 lg:px-10 rounded-xl shadow-2xl flex flex-col items-center justify-center w-1/2 md:w-fit" variants={item} >
                    <svg className="w-full md:w-fit" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="125" height="125" viewBox="0 0 48 48"><path fill="#E2DDFE" d="M43.982,23.635c0.069-4.261-0.891-9.328-2.891-15.273l-1.568-4.662l-2.13,4.433 c-0.114,0.237-0.244,0.469-0.38,0.698C33.514,5.827,28.974,4,24,4C12.954,4,4,12.954,4,24c0,11.046,8.954,20,20,20s20-8.954,20-20 C44,23.877,43.984,23.758,43.982,23.635z"></path><path fill="#291F43" d="M39.385 32.558c-3.123 4.302-8.651 4.533-13.854 4.442H18.75h-1.938c4.428-1.593 7.063-1.972 9.754-3.4 5.068-2.665 10.078-8.496 11.121-14.562-1.93 5.836-7.779 10.85-13.109 12.889-3.652 1.393-10.248 2.745-10.248 2.745l-.267-.145C9.573 32.268 9.437 22.214 17.6 18.968c3.574-1.423 6.993-.641 10.854-1.593 4.122-1.012 8.89-4.208 10.83-8.375C41.456 15.667 44.07 26.106 39.385 32.558L39.385 32.558zM15.668 38.445C15.386 38.795 14.955 39 14.505 39c-.823 0-1.495-.677-1.495-1.5s.677-1.5 1.495-1.5c.341 0 .677.118.941.336C16.086 36.855 16.186 37.805 15.668 38.445L15.668 38.445z"></path></svg>
                    <motion.div
                        className="box cursor-default"
                        initial={{ opacity: 0, scale: 1 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 0.6,
                            duration: 0.5,
                            ease: "linear",
                            scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001,                            
                            },
                        }}
                        >
                    <h2 className="text-cente md:text-xl lg:text-2xl font-bold select-all whitespace-nowrap">Spring</h2>
                    </motion.div>
                    </motion.li>
                    <motion.li key={1} className="w-1/2 md:w-fit item bg-secondary py-1 lg:py-3 px-1 md:px-7 lg:px-10 rounded-xl shadow-2xl flex flex-col items-center justify-center" variants={item} >
                    <svg className="w-full md:w-fit" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="125" height="125" viewBox="0 0 48 48"><path fill="#E2DDFE" d="M24.072,4.072c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20 C44.072,13.026,35.118,4.072,24.072,4.072z M35.416,15.322c-0.971,0.034-1.673-0.538-1.673-1.408c0-0.723,0.453-1.191,0.448-1.374 c-0.019-0.547-0.86-0.569-1.089-0.557c-3.15,0.101-3.877,4.096-4.549,7.505l-0.262,1.424c1.814,0.262,3.102-0.06,3.821-0.52 c1.012-0.647-0.14-1.193-0.119-1.948c0.026-0.951,0.888-1.399,1.438-1.415c0.77-0.018,1.566,0.816,1.566,1.897 c0,1.321-2.133,3.22-5.69,3.144c-0.434-0.01-0.831-0.04-1.205-0.083l-0.706,3.803c-0.601,2.766-1.4,6.546-4.256,9.844 c-2.453,2.876-4.943,3.324-6.059,3.36c-2.086,0.071-3.992-1.212-4.041-2.675c-0.048-1.419,1.161-2.351,1.997-2.351 c1.221,0,1.928,0.888,1.959,1.807c0.028,0.775-0.383,1.017-0.654,1.163c-0.182,0.144-0.456,0.29-0.446,0.61 c0.007,0.137,0.156,0.451,0.619,0.436c0.882-0.03,1.775-0.254,2.446-0.737c2.032-1.67,2.782-4.403,3.807-9.701l0.215-1.283 c0.349-1.724,0.9-4.08,1.491-5.993c-1.433-1.064-2.26-2.337-4.187-2.852c-1.321-0.353-1.918-0.24-2.484,0.466 c-0.301,0.375-0.405,0.801-0.405,1.215c0,1.59,3.099,4.722,3.099,6.62c0,0.224-0.026,0.454-0.068,0.694 c-0.428,2.498-3.446,4.415-7.014,3.333c-3.045-0.927-3.713-3.079-3.346-4.252c0.322-1.03,1.291-1.377,2.104-1.132 c0.87,0.265,1.25,1.368,0.921,2.29c-0.03,0.083-0.042,0.114-0.134,0.306c-0.101,0.22-0.288,0.414-0.369,0.672 c-0.197,0.628,0.678,1.074,1.287,1.26c1.363,0.414,2.691-0.289,3.03-1.376c0.312-0.999-0.14-1.696-0.407-1.964 c0,0-2.527-3.272-2.527-5.082c0-0.395,0.037-0.808,0.169-1.23c0.245-0.781,0.758-1.612,1.505-2.162 c1.575-1.158,3.132-1.302,4.764-0.84c2.11,0.6,3.093,1.93,4.408,2.993c0.736-2.128,1.539-3.637,3.074-5.394 c1.384-1.603,3.247-2.762,5.378-2.836c2.13-0.068,3.676,0.892,3.73,2.4C37.025,14.042,36.715,15.28,35.416,15.322z"></path></svg>
                    <motion.div
                        className="box cursor-default"
                        initial={{ opacity: 0, scale: 1 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 0.6,
                            duration: 0.5,
                            ease: "linear",
                            scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001,                            
                            },
                        }}
                        >
                    <h2 className="text-center md:text-xl lg:text-2xl font-bold select-all">Symfony</h2>
                    </motion.div>

                    </motion.li>
                    <motion.li key={2} className=" item bg-secondary  lg:py-3 px-1 md:px-7 lg:px-10 rounded-xl shadow-2xl flex flex-col items-center justify-center w-1/2 md:w-fit" variants={item} >
                    <svg className="w-full md:w-fit" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="125" height="125" viewBox="0 0 48 48"><path fill="#E2DDFE" d="M0.002,35.041h1.92v-7.085l2.667,6.057c0.329,0.755,0.779,1.022,1.662,1.022 s1.315-0.267,1.644-1.022l2.667-5.902v6.93h1.92v-7.258c0-0.697-0.277-1.035-0.849-1.209c-1.367-0.43-2.285-0.059-2.7,0.872 l-2.735,6.16l-2.649-6.16c-0.398-0.93-1.332-1.302-2.7-0.872C0.277,26.748,0,27.085,0,27.782v7.258H0.002z"></path><path fill="#E2DDFE" d="M13.441,29.281h1.92v4.055c-0.015,0.2,0.064,0.731,0.99,0.745c0.472,0.008,2.821,0,2.85,0v-4.8h1.92 c0.008,0,0,5.968,0,5.993c0.01,1.472-1.828,1.662-2.673,1.687h-5.006v-0.96c0.01,0,4.787,0.001,4.801,0 c1.088-0.115,0.959-0.714,0.959-0.896v-0.064H16.19c-1.67-0.015-2.735-0.751-2.747-1.59C13.441,33.373,13.479,29.317,13.441,29.281 z"></path><path fill="#E2DDFE" d="M22.081,35.041h4.807c0.63,0,1.242-0.132,1.728-0.36c0.81-0.372,1.144-0.875,1.144-1.536v-1.368 c0-1.476-1.83-1.536-2.88-1.536h-1.92c-0.755,0-0.87-0.456-0.96-0.96v-0.96c0.09-0.384,0.258-0.9,0.923-0.96 c0.773,0,4.836,0,4.836,0v-0.96h-4.566c-0.755,0-3.114,0.09-3.114,1.92v1.187c0,0.84,0.738,1.524,2.34,1.692 c0.18,0.012,0.36,0.024,0.539,0.024c0,0,1.866-0.036,1.92-0.024c1.08,0,0.96,0.84,0.96,0.96v0.96c0,0.132-0.03,0.96-0.971,0.96 c-0.072,0-4.789,0-4.789,0V35.041z"></path><path fill="#E2DDFE" d="M40.32,33.08c0,1.159,0.655,1.809,2.392,1.939c0.162,0.011,0.325,0.021,0.488,0.021H48v-0.96h-4.435 c-0.991,0-1.325-0.416-1.325-1.011v-6.669h-1.92V33.08z"></path><path fill="#E2DDFE" d="M30.704,33.121v-4.8c0-1.02,0.5-1.724,1.916-1.92h0.672h3.447h0.525 c1.416,0.196,2.08,0.899,2.08,1.92v4.782c0,0.827-0.215,1.271-0.916,1.559L39.916,36h-2.16l-1.07-0.96h-1.257l-2.136,0.012 c-0.309,0-0.635-0.043-0.993-0.141C31.226,34.618,30.704,34.054,30.704,33.121z M32.624,33.121c0.098,0.467,0.473,0.96,1.14,0.96 h1.864l-1.068-0.96h2.175l0.519,0.482c0,0,0.186-0.152,0.186-0.482c0-0.33-0.016-4.8-0.016-4.8c-0.098-0.434-0.538-0.96-1.188-0.96 h-2.471c-0.749,0-1.14,0.548-1.14,1.058L32.624,33.121L32.624,33.121z"></path><path fill="#E2DDFE" d="M46.199,25.389c-1.031-0.028-1.818,0.068-2.491,0.351c-0.191,0.081-0.496,0.083-0.528,0.323 c0.105,0.11,0.121,0.275,0.205,0.41c0.16,0.26,0.432,0.609,0.674,0.791c0.265,0.2,0.538,0.414,0.821,0.587 c0.504,0.307,1.067,0.483,1.553,0.791c0.286,0.181,0.57,0.411,0.85,0.615c0.138,0.102,0.23,0.259,0.41,0.323 c0-0.01,0-0.019,0-0.029c-0.094-0.12-0.119-0.285-0.205-0.411c-0.127-0.127-0.254-0.254-0.381-0.381 c-0.372-0.494-0.846-0.929-1.348-1.289c-0.401-0.288-1.298-0.677-1.466-1.143c-0.01-0.01-0.019-0.019-0.03-0.03 c0.284-0.032,0.617-0.135,0.879-0.205c0.441-0.118,0.834-0.087,1.289-0.205c0.205-0.059,0.41-0.117,0.615-0.176 c0-0.039,0-0.078,0-0.117c-0.23-0.236-0.395-0.548-0.645-0.762c-0.657-0.559-1.373-1.117-2.11-1.583 c-0.409-0.258-0.915-0.426-1.348-0.645c-0.146-0.074-0.402-0.112-0.498-0.234c-0.228-0.29-0.351-0.659-0.527-0.996 c-0.368-0.708-0.73-1.482-1.055-2.227c-0.223-0.508-0.368-1.01-0.645-1.466c-1.331-2.188-2.764-3.509-4.982-4.807 c-0.472-0.276-1.041-0.385-1.642-0.528c-0.323-0.019-0.645-0.039-0.968-0.059c-0.197-0.083-0.401-0.323-0.587-0.44 c-0.735-0.465-2.621-1.475-3.165-0.147c-0.344,0.838,0.514,1.656,0.821,2.081c0.215,0.298,0.491,0.632,0.645,0.968 c0.101,0.22,0.119,0.441,0.205,0.674c0.213,0.574,0.55,1.228,0.826,1.759c0.139,0.269,0.293,0.551,0.469,0.791 c0.108,0.147,0.293,0.212,0.323,0.44c-0.181,0.253-0.191,0.646-0.293,0.968c-0.458,1.445-0.285,3.24,0.381,4.308 c0.204,0.328,0.686,1.032,1.348,0.762c0.579-0.236,0.45-0.967,0.615-1.612c0.037-0.146,0.014-0.253,0.088-0.351 c0,0.01,0,0.019,0,0.03c0.176,0.351,0.351,0.704,0.528,1.055c0.391,0.629,1.084,1.286,1.67,1.73 c0.304,0.23,0.544,0.628,0.938,0.762c0-0.01,0-0.019,0-0.03c-0.01,0-0.019,0-0.03,0c-0.076-0.119-0.196-0.168-0.293-0.264 c-0.229-0.225-0.485-0.504-0.674-0.762c-0.534-0.725-1.006-1.519-1.436-2.345c-0.205-0.395-0.384-0.829-0.557-1.231 c-0.067-0.155-0.066-0.389-0.205-0.469c-0.19,0.294-0.468,0.532-0.615,0.879c-0.234,0.555-0.265,1.233-0.351,1.934 c-0.052,0.018-0.029,0.006-0.059,0.029c-0.408-0.099-0.552-0.518-0.704-0.879c-0.384-0.912-0.455-2.38-0.117-3.429 c0.087-0.272,0.482-1.127,0.323-1.378c-0.076-0.251-0.328-0.396-0.468-0.587c-0.175-0.236-0.348-0.548-0.469-0.821 c-0.314-0.711-0.612-1.538-0.943-2.257c-0.158-0.344-0.425-0.691-0.645-0.996c-0.243-0.338-0.516-0.587-0.704-0.996 c-0.067-0.145-0.158-0.378-0.059-0.528c0.032-0.101,0.076-0.143,0.176-0.176c0.17-0.132,0.643,0.043,0.821,0.117 c0.47,0.195,0.862,0.381,1.26,0.645c0.191,0.127,0.384,0.372,0.615,0.44c0.088,0,0.176,0,0.264,0 c0.413,0.095,0.875,0.03,1.26,0.147c0.682,0.207,1.292,0.529,1.846,0.879c1.69,1.067,3.071,2.585,4.016,4.397 c0.152,0.292,0.218,0.57,0.351,0.879c0.27,0.624,0.611,1.266,0.879,1.876c0.268,0.609,0.53,1.223,0.909,1.73 c0.2,0.266,0.97,0.409,1.319,0.557c0.245,0.104,0.647,0.211,0.879,0.351c0.444,0.268,0.874,0.587,1.289,0.879 C45.528,24.803,46.167,25.124,46.199,25.389z"></path><path fill="#E2DDFE" d="M33.098,14.223c-0.215-0.004-0.367,0.023-0.528,0.059c0,0.01,0,0.019,0,0.03c0.01,0,0.019,0,0.03,0 c0.103,0.21,0.283,0.347,0.41,0.528c0.098,0.205,0.195,0.41,0.293,0.615c0.01-0.01,0.019-0.019,0.029-0.029 c0.181-0.128,0.265-0.332,0.264-0.645c-0.073-0.077-0.084-0.173-0.147-0.264C33.365,14.394,33.203,14.325,33.098,14.223z"></path></svg>
                    <motion.div
                        className="box cursor-default"
                        initial={{ opacity: 0, scale: 1 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 0.6,
                            duration: 0.5,
                            ease: "linear",
                            scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001,                            
                            },
                        }}
                        >
                    <h2 className="text-center md:text-xl lg:text-2xl font-bold select-all">MySQL</h2>
                    </motion.div>
                    </motion.li>
                </motion.ul>

           
          </div>

          <div id="frontend" className="flex flex-col w-full mt-10 justify-center items-center">
                <motion.div
                    className="box cursor-default"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.1,
                        ease: [0, 0.71, 0.2, 1.01],
                        delay: 0.5,
                        scale: {
                        type: "spring",
                        damping: 5,
                        stiffness: 50,
                        }
                    }}
                >
                <h1 className="text-3xl text-center font-extrabold italic select-none">Front-end</h1>
                </motion.div>
                <motion.ul
                    className="flex flex-row gap-2 md:gap-4 w-full items-center justify-center"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                >

                        <motion.li key={0} className="item bg-secondary py-1 lg:py-3 px-1 md:px-7 lg:px-10 rounded-xl shadow-2xl flex flex-col items-center justify-center w-1/2 md:w-fit" variants={item} >
                        <svg className="w-full md:w-fit" fill="#E2DDFE" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="125" height="125" viewBox="0 0 50 50"><path d="M 24.929688 2.0019531 C 24.819813 2.0024531 24.709016 2.0206406 24.603516 2.0566406 L 3.671875 9.3417969 C 3.227875 9.4957969 2.9498125 9.93925 3.0078125 10.40625 L 6.3164062 37.529297 C 6.3554062 37.850297 6.5450781 38.133109 6.8300781 38.287109 L 24.478516 47.878906 C 24.626516 47.959906 24.791078 48 24.955078 48 C 25.120078 48 25.286547 47.958953 25.435547 47.876953 L 43.173828 38.154297 C 43.455828 37.999297 43.647547 37.717438 43.685547 37.398438 L 46.992188 10.277344 C 47.050187 9.8083437 46.769312 9.3609844 46.320312 9.2089844 L 25.253906 2.0527344 C 25.148906 2.0177344 25.039562 2.0014531 24.929688 2.0019531 z M 25 7 L 38 35 L 33.5625 35 L 30.78125 29.007812 L 19.21875 29.007812 L 16.4375 35 L 12 35 L 25 7 z M 25 16.5 L 21.080078 25 L 28.919922 25 L 25 16.5 z"></path></svg>
                        <motion.div
                        className="box cursor-default"
                        initial={{ opacity: 0, scale: 1 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 0.6,
                            duration: 0.5,
                            ease: "linear",
                            scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001,                            
                            },
                        }}
                        >
                        <h2 className="text-center md:text-xl lg:text-2xl font-bold select-all">Angular</h2>
                        </motion.div>
                    </motion.li>

                    <motion.li key={1} className="item bg-secondary py-1 lg:py-3 px-1 md:px-7 lg:px-10 rounded-xl shadow-2xl flex flex-col items-center justify-center w-1/2 md:w-fit" variants={item} >
                    <svg className="w-full md:w-fit" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="125" height="125" viewBox="0 0 48 48"><path fill="#E2DDFE" d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"></path><path fill="#E2DDFE" d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"></path><path fill="#E2DDFE" d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"></path><circle cx="24" cy="24" r="4" fill="#E2DDFE"></circle></svg>
                    <motion.div
                        className="box cursor-default"
                        initial={{ opacity: 0, scale: 1 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 0.6,
                            duration: 0.5,
                            ease: "linear",
                            scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001,                            
                            },
                        }}
                        >
                    <h2 className="text-center md:text-xl lg:text-2xl font-bold select-all">React</h2>
                    </motion.div>

                    </motion.li>
                    <motion.li key={2} className="item bg-secondary py-1 lg:py-3 px-1 md:px-7 lg:px-10 rounded-xl shadow-2xl flex flex-col items-center justify-center w-1/2 md:w-fit" variants={item} >
                    <svg className="w-full md:w-fit" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="125" height="125" viewBox="0 0 48 48"><path fill="#E2DDFE" d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"></path></svg>
                    <motion.div
                        className="box cursor-default"
                        initial={{ opacity: 0, scale: 1 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 0.6,
                            duration: 0.5,
                            ease: "linear",
                            scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001,                            
                            },
                        }}
                        >
                    <h2 className="text-center md:text-xl lg:text-2xl font-bold select-all">Tailwind</h2>
                    </motion.div>
                    </motion.li>
                    <motion.li key={3} className="item bg-secondary py-1 lg:py-3 px-1 md:px-7 lg:px-10 rounded-xl shadow-2xl flex flex-col items-center justify-center w-1/2 md:w-fit" variants={item} >
                    <svg className="w-full md:w-fit" fill="#E2DDFE" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="125" height="125" viewBox="0 0 50 50"><path d="M7.854,11.705C7.771,9.257,9.628,7,12.139,7h25.726c2.511,0,4.368,2.257,4.285,4.705c-0.08,2.351,0.024,5.397,0.77,7.88	c0.749,2.491,2.012,4.066,4.08,4.268v2.294c-2.068,0.202-3.331,1.777-4.08,4.268c-0.747,2.483-0.85,5.529-0.77,7.88	C42.232,40.743,40.375,43,37.864,43H12.139c-2.511,0-4.368-2.257-4.285-4.705c0.08-2.351-0.024-5.397-0.771-7.88	C6.335,27.924,5.069,26.349,3,26.147v-2.294c2.068-0.202,3.335-1.777,4.083-4.268C7.83,17.102,7.934,14.056,7.854,11.705z"></path><path fill="#291F43" d="M27.79,24.451v-0.029c1.911-0.33,3.402-2.121,3.402-4.094c0-1.395-0.536-2.576-1.551-3.416	c-1.011-0.837-2.431-1.28-4.105-1.28h-7.669v18.734h7.709c2.003,0,3.666-0.489,4.808-1.415c1.144-0.927,1.749-2.276,1.749-3.901	C32.133,26.596,30.389,24.752,27.79,24.451z M24.199,23.568h-3.28v-5.484h3.903c2.141,0,3.32,0.939,3.32,2.645	C28.141,22.56,26.741,23.568,24.199,23.568z M20.919,25.864h3.876c2.8,0,4.22,1.012,4.22,3.007c0,1.993-1.4,3.046-4.048,3.046	h-4.048V25.864z"></path></svg>
                    <motion.div
                        className="box cursor-default"
                        initial={{ opacity: 0, scale: 1 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 0.6,
                            duration: 0.5,
                            ease: "linear",
                            scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001,                            
                            },
                        }}
                        >
                    <h2 className="text-center md:text-xl lg:text-2xl font-bold select-all">Bootstrap</h2>
                    </motion.div>
                    </motion.li>
                </motion.ul>

           
          </div>

          <div id="utils" className="flex flex-col w-full mt-10 justify-center items-center">
                <motion.div
                    className="box cursor-default"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.1,
                        ease: [0, 0.71, 0.2, 1.01],
                        delay: 0.5,
                        scale: {
                        type: "spring",
                        damping: 5,
                        stiffness: 50,
                        }
                    }}
                >
                <h1 className="text-3xl text-center font-extrabold italic select-none">Others</h1>
                </motion.div>
                <motion.ul
                    className="flex flex-row gap-4 w-full items-center justify-center"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                >

                    <motion.li key={0} className="item bg-secondary py-1 lg:py-3 px-1 md:px-7 lg:px-10 rounded-xl shadow-2xl flex flex-col items-center justify-center w-1/2 md:w-fit" variants={item} >
                    <svg className="w-full md:w-fit" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="125" height="125" viewBox="0 0 48 48"><path fill="#E2DDFE" d="M47.527,19.847c-0.13-0.102-1.345-1.007-3.908-1.007c-0.677,0.003-1.352,0.06-2.019,0.171 c-0.496-3.354-3.219-4.93-3.345-5.003l-0.688-0.392l-0.453,0.644c-0.567,0.866-1.068,1.76-1.311,2.763 c-0.459,1.915-0.18,3.713,0.806,5.25C35.417,22.928,33.386,22.986,33,23H1.582c-0.826,0.001-1.496,0.66-1.501,1.474 c-0.037,2.733,0.353,5.553,1.306,8.119c1.089,2.818,2.71,4.894,4.818,6.164C8.567,40.184,12.405,41,16.756,41 c1.965,0.006,3.927-0.169,5.859-0.524c2.686-0.487,5.271-1.413,7.647-2.74c1.958-1.119,3.72-2.542,5.219-4.215 c2.505-2.798,3.997-5.913,5.107-8.682c0.149,0,0.298,0,0.442,0c2.743,0,4.429-1.083,5.359-1.99 c0.618-0.579,1.101-1.284,1.414-2.065L48,20.216L47.527,19.847z"></path><path fill="#E2DDFE" d="M8,22H5c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C9,21.552,8.552,22,8,22z"></path><path fill="#E2DDFE" d="M14,22h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C15,21.552,14.552,22,14,22z"></path><path fill="#E2DDFE" d="M20,22h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C21,21.552,20.552,22,20,22z"></path><path fill="#E2DDFE" d="M26,22h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C27,21.552,26.552,22,26,22z"></path><path fill="#E2DDFE" d="M14,16h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C15,15.552,14.552,16,14,16z"></path><path fill="#E2DDFE" d="M20,16h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C21,15.552,20.552,16,20,16z"></path><path fill="#E2DDFE" d="M26,16h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C27,15.552,26.552,16,26,16z"></path><path fill="#E2DDFE" d="M26,10h-3c-0.552,0-1-0.448-1-1V6c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C27,9.552,26.552,10,26,10z"></path><path fill="#E2DDFE" d="M32,22h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C33,21.552,32.552,22,32,22z"></path></svg>
                    <motion.div
                        className="box cursor-default"
                        initial={{ opacity: 0, scale: 1 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 0.6,
                            duration: 0.5,
                            ease: "linear",
                            scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001,                            
                            },
                        }}
                        >
                    <h2 className="text-center md:text-xl lg:text-2xl font-bold select-all">Docker</h2>
                    </motion.div>
                    </motion.li>
                    <motion.li key={1} className="item bg-secondary py-1 lg:py-3 px-1 md:px-7 lg:px-10 rounded-xl shadow-2xl flex flex-col items-center justify-center w-1/2 md:w-fit" variants={item} >
                    <svg className="w-full md:w-fit" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="125" height="125" viewBox="0 0 50 50"><path fill="#E2DDFE" d="M25 2v14h-7c-3.855 0-7-3.145-7-7 0-3.855 3.145-7 7-7H25zM25 18v14h-7c-3.855 0-7-3.145-7-7 0-3.855 3.145-7 7-7H25zM25 34v7c0 3.855-3.145 7-7 7s-7-3.145-7-7c0-3.855 3.145-7 7-7H25zM41 9c0 3.855-3.145 7-7 7h-7V2h7C37.855 2 41 5.145 41 9zM34 18A7 7 0 1034 32 7 7 0 1034 18z"></path></svg>
                    <motion.div
                        className="box cursor-default"
                        initial={{ opacity: 0, scale: 1 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 0.6,
                            duration: 0.5,
                            ease: "linear",
                            scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001,                            
                            },
                        }}
                        >
                    <h2 className="text-center md:text-xl lg:text-2xl font-bold select-all">Figma</h2>
                    </motion.div>
                    </motion.li>
                    <motion.li key={1} className="item bg-secondary py-1 lg:py-3 px-1 md:px-7 lg:px-10 rounded-xl shadow-2xl flex flex-col items-center justify-center w-1/2 md:w-fit" variants={item} >
                    <svg viewBox="0 0 48 48" version="1.1" width="125" height="125" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Trello-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-200.000000, -760.000000)" fill="#E2DDFD"> <path d="M206,769 L206,796 C206,797.6575 207.3425,799 209,799 L218,799 C219.6575,799 221,797.6575 221,796 L221,769 C221,767.3425 219.6575,766 218,766 L209,766 C207.3425,766 206,767.3425 206,769 L206,769 Z M227,769 L227,784 C227,785.6575 228.3425,787 230,787 L239,787 C240.6575,787 242,785.6575 242,784 L242,769 C242,767.3425 240.6575,766 239,766 L230,766 C228.3425,766 227,767.3425 227,769 L227,769 Z M206,760 C202.6865,760 200,762.688 200,766 L200,802 C200,805.3135 202.688,808 206,808 L242,808 C245.3135,808 248,805.312 248,802 L248,766 C248,762.6865 245.312,760 242,760 L206,760 Z" id="Trello"> </path> </g> </g> </g></svg>
                    <motion.div
                        className="box cursor-default"
                        initial={{ opacity: 0, scale: 1 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 0.6,
                            duration: 0.5,
                            ease: "linear",
                            scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001,                            
                            },
                        }}
                        >
                    <h2 className="text-center md:text-xl lg:text-2xl font-bold select-all">Trello </h2>
                    </motion.div>
                    </motion.li>
                </motion.ul>

           
          </div>

        </div>
        </div>
    )
}

