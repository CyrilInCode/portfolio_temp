import { motion } from "framer-motion"
import Image from 'next/image'


export default function ProjectsComponent() {

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
        <div id="projects" className="px-4 lg:px-20 w-full mt-12 pt-6">
             <div className="w-full row-auto cursor-default">
                    <h1 className="text-6xl text-center font-extrabold text-secondary select-none">Projects</h1>
                </div>

            <div className="flex flex-col mt-16 gap-28">

                <div id="courroux" className="flex flex-col lg:flex-row items-center w-full gap-10 lg:gap-0">
                    <div className="flex-1 font-bold text-xl w-full">
                        <div className="flex">
                            <motion.h2
                                className="box cursor-default text-4xl text-secondary select-all w-auto"
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    ease: [0, 0.71, 0.2, 1.01],
                                    scale: {
                                    type: "spring",
                                    damping: 5,
                                    stiffness: 100,
                                    }
                                }}
                            >
                            Courroux
                            </motion.h2>
                        </div>
                        <p className="italic text-sm">University project</p>
                        <p className="mt-7 lg:max-w-2xl w-full select-none">           
                            A full-stack application enabling the creation of schedules and student tracking, 
                            our platform boasts a range of features. Drafting, copy-pasting, automation – all 
                            these functionalities are integrated into our application for optimal user comfort.
                        </p>
                        <br/>
                        <p>Number of hours spent on the project : 200 hours</p>
                        <br/>
                        <p>Number of team members: 5 student developers</p>
                        <motion.ul
                            className="flex flex-row gap-2 mt-3 select-none"
                            variants={container}
                            initial="hidden"
                            whileInView="visible"
                        >
                        <ul className="flex flex-wrap gap-2 mt-3 select-none w-full">
                            <motion.li key={0} className="item bg-secondary rounded-2xl pt-2 pb-1 font-extrabold text-lg px-4" variants={item} >

                            Angular
                            </motion.li>
                            <motion.li key={1} className="item bg-secondary rounded-2xl pt-2 pb-1 font-extrabold text-lg px-4" variants={item} >
                                Flask
                            </motion.li>
                            <motion.li key={2} className="item bg-secondary rounded-2xl pt-2 pb-1 font-extrabold text-lg px-4" variants={item} >
                                TypeScript
                            </motion.li>
                            <motion.li key={3} className="item bg-secondary rounded-2xl pt-2 pb-1 font-extrabold text-lg px-4" variants={item} >
                                Tailwind
                            </motion.li>

                            <motion.li key={4} className="item bg-secondary rounded-2xl pt-2 pb-1 font-extrabold text-lg px-4" variants={item} >
                                Figma
                            </motion.li>

                        </ul>
                        </motion.ul>
                        <motion.div
                        className="box mt-5 flex flex-row gap-3"
                        initial={{ opacity: 0, scale: 1 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 0.5,
                            duration: 0.2,
                            ease: "linear",
                            scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001,                            
                            },
                        }}
                        >
                        {/* <div className="mt-5 flex flex-row gap-3"> */}
                                <motion.a
                                    whileHover={{ scale: 1.1 }}
                                    onHoverStart={e => {}}
                                    onHoverEnd={e => {}}
                                    href="https://github.com/DUT-Info-Montreuil/SAE_5.A-Courroux"
                                    // target="_blank"
                                    className="flex flex-row gap-2 items-center bg-tertiary cursor-pointer rounded-md px-3 py-2 hover:bg-secondary"
                                >
                                <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.96424 2.68571C10.0668 2.42931 9.94209 2.13833 9.6857 2.03577C9.4293 1.93322 9.13832 2.05792 9.03576 2.31432L5.03576 12.3143C4.9332 12.5707 5.05791 12.8617 5.3143 12.9642C5.5707 13.0668 5.86168 12.9421 5.96424 12.6857L9.96424 2.68571ZM3.85355 5.14646C4.04882 5.34172 4.04882 5.6583 3.85355 5.85356L2.20711 7.50001L3.85355 9.14646C4.04882 9.34172 4.04882 9.6583 3.85355 9.85356C3.65829 10.0488 3.34171 10.0488 3.14645 9.85356L1.14645 7.85356C0.951184 7.6583 0.951184 7.34172 1.14645 7.14646L3.14645 5.14646C3.34171 4.9512 3.65829 4.9512 3.85355 5.14646ZM11.1464 5.14646C11.3417 4.9512 11.6583 4.9512 11.8536 5.14646L13.8536 7.14646C14.0488 7.34172 14.0488 7.6583 13.8536 7.85356L11.8536 9.85356C11.6583 10.0488 11.3417 10.0488 11.1464 9.85356C10.9512 9.6583 10.9512 9.34172 11.1464 9.14646L12.7929 7.50001L11.1464 5.85356C10.9512 5.6583 10.9512 5.34172 11.1464 5.14646Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                                <span className="text-lg p-0 m-0 mt-2">View Code</span>
                            </motion.a>
                            {/* <motion.a
                                whileHover={{ scale: 1.1 }}
                                onHoverStart={e => {}}
                                onHoverEnd={e => {}}
                                href="https://courroux.org/"
                                target="_blank"
                                className="flex flex-row gap-2 items-center bg-tertiary cursor-not-allowed rounded-md px-3 py-2 hover:bg-secondary"
                            > */}
                            <a className="flex flex-row gap-2 items-center bg-secondary cursor-not-allowed rounded-md px-3 py-2">

                                <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                                <span className="text-lg p-0 m-0 mt-2">Live Demo</span>
                                </a>
                            {/* </motion.a> */}
                        {/* </div> */}
                        </motion.div>
                    </div>
                    <div className="flex-1 ">
                        <motion.div
                                className="box cursor-default text-4xl text-secondary select-all w-auto"
                                initial={{ opacity: 0, scale: 1 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    delay:0.7,
                                    duration: 2,
                                    ease: "linear",
                                    scale: {
                                    type: "spring",
                                    damping: 5,
                                    stiffness: 100,
                                    }
                                }}
                            >
                        <Image src={'/courroux.png'} alt="Picture of the author" width={700} height={700} className="border border-primary rounded-md" />
                        </motion.div>
                    </div>


                </div>




                <div id="tiktokuploader" className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-0">
                <div className="flex-1 items-center justify-center text-center">
                        <motion.div
                                className="box cursor-default text-4xl text-secondary select-all w-auto"
                                initial={{ opacity: 0, scale: 1 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    delay:0.7,
                                    duration: 2,
                                    ease: "linear",
                                    scale: {
                                    type: "spring",
                                    damping: 5,
                                    stiffness: 100,
                                    }
                                }}
                            >
                        <Image src={'/tiktok_uploader.png'} alt="Picture of the author" width={700} height={700} className="border border-primary rounded-md" />
                        {/* <h1 className=" text-[300px]">?</h1> */}
                        </motion.div>
                    </div>
                    <div className="flex-1 font-bold text-xl w-full">
                        <div className="flex w-full">
                            <motion.h2
                                className="box cursor-default text-4xl text-secondary select-all w-auto"
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    ease: [0, 0.71, 0.2, 1.01],
                                    scale: {
                                    type: "spring",
                                    damping: 5,
                                    stiffness: 100,
                                    }
                                }}
                            >
                            Tiktok Uploader 
                            </motion.h2>
                        </div>
                        <p className="italic text-sm">Personal project</p>
                        <p className="mt-7 max-w-2xl select-none">           
                        A full-stack application that facilitates the automatic retrieval of trending videos, 
                        conversion to the appropriate format, and translation for TikTok. 
                        This comprehensive solution streamlines and enhances the multimedia content creation process on the platform.
                        </p>
                        <br/>
                        <p>Number of hours spent on the project : 100 hours</p>
                        <br/>
                        <p>Number of team members : 2</p>
                        <motion.ul
                            className="flex flex-row gap-2 mt-3 select-none"
                            variants={container}
                            initial="hidden"
                            whileInView="visible"
                        >
                        <ul className="flex flex-wrap gap-2 mt-3 select-none">
                            <motion.li key={0} className="item bg-secondary rounded-2xl pt-2 pb-1 font-extrabold text-lg px-4" variants={item} >
                                NextJs
                            </motion.li>
                            <motion.li key={1} className="item bg-secondary rounded-2xl pt-2 pb-1 font-extrabold text-lg px-4" variants={item} >
                                Flask
                            </motion.li>
                            <motion.li key={2} className="item bg-secondary rounded-2xl pt-2 pb-1 font-extrabold text-lg px-4" variants={item} >
                                Python
                            </motion.li>
                            <motion.li key={3} className="item bg-secondary rounded-2xl pt-2 pb-1 font-extrabold text-lg px-4" variants={item} >
                                TypeScript
                            </motion.li>
                            <motion.li key={4} className="item bg-secondary rounded-2xl pt-2 pb-1 font-extrabold text-lg px-4" variants={item} >
                                Tailwind
                            </motion.li>
                            <motion.li key={5} className="item bg-secondary rounded-2xl pt-2 pb-1 font-extrabold text-lg px-4" variants={item} >
                                Figma
                            </motion.li>

                        </ul>
                        </motion.ul>
                        <motion.div
                        className="box mt-5 flex flex-row gap-3"
                        initial={{ opacity: 0, scale: 1 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 0.5,
                            duration: 0.2,
                            ease: "linear",
                            scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001,                            
                            },
                        }}
                        >
                        {/* <div className="mt-5 flex flex-row gap-3"> */}
                                <a
                                    className="flex flex-row gap-2 items-center cursor-not-allowed rounded-md px-3 py-2 bg-secondary select-none"
                                >
                                <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.96424 2.68571C10.0668 2.42931 9.94209 2.13833 9.6857 2.03577C9.4293 1.93322 9.13832 2.05792 9.03576 2.31432L5.03576 12.3143C4.9332 12.5707 5.05791 12.8617 5.3143 12.9642C5.5707 13.0668 5.86168 12.9421 5.96424 12.6857L9.96424 2.68571ZM3.85355 5.14646C4.04882 5.34172 4.04882 5.6583 3.85355 5.85356L2.20711 7.50001L3.85355 9.14646C4.04882 9.34172 4.04882 9.6583 3.85355 9.85356C3.65829 10.0488 3.34171 10.0488 3.14645 9.85356L1.14645 7.85356C0.951184 7.6583 0.951184 7.34172 1.14645 7.14646L3.14645 5.14646C3.34171 4.9512 3.65829 4.9512 3.85355 5.14646ZM11.1464 5.14646C11.3417 4.9512 11.6583 4.9512 11.8536 5.14646L13.8536 7.14646C14.0488 7.34172 14.0488 7.6583 13.8536 7.85356L11.8536 9.85356C11.6583 10.0488 11.3417 10.0488 11.1464 9.85356C10.9512 9.6583 10.9512 9.34172 11.1464 9.14646L12.7929 7.50001L11.1464 5.85356C10.9512 5.6583 10.9512 5.34172 11.1464 5.14646Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                                <span className="text-lg p-0 m-0 mt-2">View Code</span>
                                {/* <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 4.63601C5 3.76031 5.24219 3.1054 5.64323 2.67357C6.03934 2.24705 6.64582 1.9783 7.5014 1.9783C8.35745 1.9783 8.96306 2.24652 9.35823 2.67208C9.75838 3.10299 10 3.75708 10 4.63325V5.99999H5V4.63601ZM4 5.99999V4.63601C4 3.58148 4.29339 2.65754 4.91049 1.99307C5.53252 1.32329 6.42675 0.978302 7.5014 0.978302C8.57583 0.978302 9.46952 1.32233 10.091 1.99162C10.7076 2.65557 11 3.57896 11 4.63325V5.99999H12C12.5523 5.99999 13 6.44771 13 6.99999V13C13 13.5523 12.5523 14 12 14H3C2.44772 14 2 13.5523 2 13V6.99999C2 6.44771 2.44772 5.99999 3 5.99999H4ZM3 6.99999H12V13H3V6.99999Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg> */}
                                </a>

                                <a
                                    className="flex flex-row gap-2 items-center cursor-not-allowed rounded-md px-3 py-2 bg-secondary select-none"
                                >
                                <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                                <span className="text-lg p-0 m-0 mt-2">Live Demo</span>
                                {/* <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 4.63601C5 3.76031 5.24219 3.1054 5.64323 2.67357C6.03934 2.24705 6.64582 1.9783 7.5014 1.9783C8.35745 1.9783 8.96306 2.24652 9.35823 2.67208C9.75838 3.10299 10 3.75708 10 4.63325V5.99999H5V4.63601ZM4 5.99999V4.63601C4 3.58148 4.29339 2.65754 4.91049 1.99307C5.53252 1.32329 6.42675 0.978302 7.5014 0.978302C8.57583 0.978302 9.46952 1.32233 10.091 1.99162C10.7076 2.65557 11 3.57896 11 4.63325V5.99999H12C12.5523 5.99999 13 6.44771 13 6.99999V13C13 13.5523 12.5523 14 12 14H3C2.44772 14 2 13.5523 2 13V6.99999C2 6.44771 2.44772 5.99999 3 5.99999H4ZM3 6.99999H12V13H3V6.99999Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg> */}
                            </a>
                        {/* </div> */}
                        </motion.div>
                    </div>
                    


                </div>

            </div>
                
         

        </div>
    )
}

