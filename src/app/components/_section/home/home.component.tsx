import Image from 'next/image'
import { motion } from "framer-motion";
import './home.css'


export default function HomeComponent() {

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.15,
        staggerChildren: 0.1
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
        <div className="flex flex-col text-lg min-h-screen w-full items-center justify-center overflow-hidden" >



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
              src={'/portfolio_temp/favicon.png'}
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
                  href='#experience'
                  className='hover:text-tertiary hover:font-extrabold'
              >
                <motion.li key={0} className="item" variants={item} >Experiences</motion.li>
              </motion.a>
              <motion.a
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={e => {}}
                  onHoverEnd={e => {}}
                  href='#education'
                  className='hover:text-tertiary hover:font-extrabold'
              >
                <motion.li key={1} className="item" variants={item} >Education</motion.li>
              </motion.a>
              <motion.a
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={e => {}}
                  onHoverEnd={e => {}}
                  href='/skills'
                  className='hover:text-tertiary hover:font-extrabold'
              >
                <motion.li key={2} className="item" variants={item} >Skills</motion.li>
              </motion.a>
              <motion.a
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={e => {}}
                  onHoverEnd={e => {}}
                  href='#projects'
                  className='hover:text-tertiary hover:font-extrabold'
              >
                <motion.li key={3} className="item" variants={item} >Projects</motion.li>
              </motion.a>

              <motion.a
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={e => {}}
                  onHoverEnd={e => {}}
                  href='#contact'
                  className='hover:text-tertiary hover:font-extrabold'
              >
                <motion.li key={4} className="item" variants={item} >Contact</motion.li>
              </motion.a>
            </motion.ul>
          </div>
        </nav>
      <div className='flex-1 flex mt-10 lg:mt-0 lg:flex-row flex-col justify-center items-center w-full h-full'>

        <div className='md:flex-1 w-full flex  justify-center '>
        <div className='hidden xl:block w-1/12'></div>

          <div className='overflow-hidden'>
          <h1 className=" text-5xl min-[400px]:text-7xl md:text-8xl font-extrabold cursor-default select-none">
            Cyril
            <span className="block text-secondary">GROSJEAN</span>
          </h1>
          <div className='absolute'>
            <motion.div
            className="box cursor-default"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001
              }
            }}
            >
              <p className=" text-2xl min-[400px]:text-3xl indent-8 select-none">Fullstack Developer</p>
            </motion.div> 
              <div className='ms-8 mt-1'> 
                <motion.ul
                  className="flex flex-row gap-4 absolute"
                  variants={container}
                  initial="hidden"
                  whileInView="visible"
                >
                  <motion.a
                    whileHover={{ scale: 1.3 }}
                    onHoverStart={e => {}}
                    onHoverEnd={e => {}}
                    href='https://github.com/CyrilInCode'
                    target='_blank'
                  >
                  <motion.li key={0} className="item" variants={item} >
                  
                    <svg width="27" height="27" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                  </motion.li>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.3 }}
                    onHoverStart={e => {}}
                    onHoverEnd={e => {}}
                    href='https://www.linkedin.com/in/cyril-grosjean-7a8ab4231/'
                    target='_blank'
                  >
                  <motion.li key={1} className="item" variants={item} >
                    <svg width="27" height="27" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                  </motion.li>
                  </motion.a>


                  {/* <motion.a
                    whileHover={{ scale: 1.3 }}
                    onHoverStart={e => {}}
                    onHoverEnd={e => {}}
                    href=''
                    target='_blank'
                  >
                  <motion.li key={2} className="item" variants={item} >
                      <svg width="27" height="27" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M5.07451 1.82584C5.03267 1.81926 4.99014 1.81825 4.94803 1.82284C4.10683 1.91446 2.82673 2.36828 2.07115 2.77808C2.02106 2.80525 1.97621 2.84112 1.93869 2.88402C1.62502 3.24266 1.34046 3.82836 1.11706 4.38186C0.887447 4.95076 0.697293 5.55032 0.588937 5.98354C0.236232 7.39369 0.042502 9.08728 0.0174948 10.6925C0.0162429 10.7729 0.0351883 10.8523 0.0725931 10.9234C0.373679 11.496 1.02015 12.027 1.66809 12.4152C2.32332 12.8078 3.08732 13.1182 3.70385 13.1778C3.85335 13.1922 4.00098 13.1358 4.10282 13.0255C4.2572 12.8581 4.5193 12.4676 4.71745 12.1643C4.80739 12.0267 4.89157 11.8953 4.95845 11.7901C5.62023 11.9106 6.45043 11.9801 7.50002 11.9801C8.54844 11.9801 9.37796 11.9107 10.0394 11.7905C10.1062 11.8957 10.1903 12.0269 10.2801 12.1643C10.4783 12.4676 10.7404 12.8581 10.8947 13.0255C10.9966 13.1358 11.1442 13.1922 11.2937 13.1778C11.9102 13.1182 12.6742 12.8078 13.3295 12.4152C13.9774 12.027 14.6239 11.496 14.925 10.9234C14.9624 10.8523 14.9813 10.7729 14.9801 10.6925C14.9551 9.08728 14.7613 7.39369 14.4086 5.98354C14.3003 5.55032 14.1101 4.95076 13.8805 4.38186C13.6571 3.82836 13.3725 3.24266 13.0589 2.88402C13.0214 2.84112 12.9765 2.80525 12.9264 2.77808C12.1708 2.36828 10.8907 1.91446 10.0495 1.82284C10.0074 1.81825 9.96489 1.81926 9.92305 1.82584C9.71676 1.85825 9.5391 1.96458 9.40809 2.06355C9.26977 2.16804 9.1413 2.29668 9.0304 2.42682C8.86968 2.61544 8.71437 2.84488 8.61428 3.06225C8.27237 3.03501 7.90138 3.02 7.5 3.02C7.0977 3.02 6.72593 3.03508 6.38337 3.06244C6.28328 2.84501 6.12792 2.61549 5.96716 2.42682C5.85626 2.29668 5.72778 2.16804 5.58947 2.06355C5.45846 1.96458 5.2808 1.85825 5.07451 1.82584ZM11.0181 11.5382C11.0395 11.5713 11.0615 11.6051 11.0838 11.6392C11.2169 11.843 11.3487 12.0385 11.4508 12.1809C11.8475 12.0916 12.352 11.8818 12.8361 11.5917C13.3795 11.2661 13.8098 10.8918 14.0177 10.5739C13.9852 9.06758 13.7993 7.50369 13.4773 6.21648C13.38 5.82759 13.2038 5.27021 12.9903 4.74117C12.7893 4.24326 12.5753 3.82162 12.388 3.5792C11.7376 3.24219 10.7129 2.88582 10.0454 2.78987C10.0308 2.79839 10.0113 2.81102 9.98675 2.82955C9.91863 2.881 9.84018 2.95666 9.76111 3.04945C9.71959 3.09817 9.68166 3.1471 9.64768 3.19449C9.953 3.25031 10.2253 3.3171 10.4662 3.39123C11.1499 3.6016 11.6428 3.89039 11.884 4.212C12.0431 4.42408 12.0001 4.72494 11.788 4.884C11.5759 5.04306 11.2751 5.00008 11.116 4.788C11.0572 4.70961 10.8001 4.4984 10.1838 4.30877C9.58933 4.12585 8.71356 3.98 7.5 3.98C6.28644 3.98 5.41067 4.12585 4.81616 4.30877C4.19988 4.4984 3.94279 4.70961 3.884 4.788C3.72494 5.00008 3.42408 5.04306 3.212 4.884C2.99992 4.72494 2.95694 4.42408 3.116 4.212C3.35721 3.89039 3.85011 3.6016 4.53383 3.39123C4.77418 3.31727 5.04571 3.25062 5.35016 3.19488C5.31611 3.14738 5.27808 3.09831 5.23645 3.04945C5.15738 2.95666 5.07893 2.881 5.01081 2.82955C4.98628 2.81102 4.96674 2.79839 4.95217 2.78987C4.28464 2.88582 3.25999 3.24219 2.60954 3.5792C2.42226 3.82162 2.20825 4.24326 2.00729 4.74117C1.79376 5.27021 1.61752 5.82759 1.52025 6.21648C1.19829 7.50369 1.01236 9.06758 0.97986 10.5739C1.18772 10.8918 1.61807 11.2661 2.16148 11.5917C2.64557 11.8818 3.15003 12.0916 3.5468 12.1809C3.64885 12.0385 3.78065 11.843 3.9138 11.6392C3.93626 11.6048 3.95838 11.5708 3.97996 11.5375C3.19521 11.2591 2.77361 10.8758 2.50064 10.4664C2.35359 10.2458 2.4132 9.94778 2.63377 9.80074C2.85435 9.65369 3.15236 9.71329 3.29941 9.93387C3.56077 10.3259 4.24355 11.0201 7.50002 11.0201C10.7565 11.0201 11.4392 10.326 11.7006 9.93386C11.8477 9.71329 12.1457 9.65369 12.3663 9.80074C12.5869 9.94779 12.6465 10.2458 12.4994 10.4664C12.2262 10.8762 11.8041 11.2598 11.0181 11.5382ZM4.08049 7.01221C4.32412 6.74984 4.65476 6.60162 5.00007 6.59998C5.34538 6.60162 5.67603 6.74984 5.91966 7.01221C6.16329 7.27459 6.30007 7.62974 6.30007 7.99998C6.30007 8.37021 6.16329 8.72536 5.91966 8.98774C5.67603 9.25011 5.34538 9.39833 5.00007 9.39998C4.65476 9.39833 4.32412 9.25011 4.08049 8.98774C3.83685 8.72536 3.70007 8.37021 3.70007 7.99998C3.70007 7.62974 3.83685 7.27459 4.08049 7.01221ZM9.99885 6.59998C9.65354 6.60162 9.3229 6.74984 9.07926 7.01221C8.83563 7.27459 8.69885 7.62974 8.69885 7.99998C8.69885 8.37021 8.83563 8.72536 9.07926 8.98774C9.3229 9.25011 9.65354 9.39833 9.99885 9.39998C10.3442 9.39833 10.6748 9.25011 10.9184 8.98774C11.1621 8.72536 11.2989 8.37021 11.2989 7.99998C11.2989 7.62974 11.1621 7.27459 10.9184 7.01221C10.6748 6.74984 10.3442 6.60162 9.99885 6.59998Z" fill="currentColor"></path></svg>
                  </motion.li>
                  </motion.a> */}

                  <motion.a
                    whileHover={{ scale: 1.3 }}
                    onHoverStart={e => {}}
                    onHoverEnd={e => {}}
                    href='mailto:contact@cgrosjean.fr'
                    target='_blank'
                  >
                  <motion.li key={2} className="item" variants={item} >
                    <svg width="27" height="27" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 2C0.447715 2 0 2.44772 0 3V12C0 12.5523 0.447715 13 1 13H14C14.5523 13 15 12.5523 15 12V3C15 2.44772 14.5523 2 14 2H1ZM1 3L14 3V3.92494C13.9174 3.92486 13.8338 3.94751 13.7589 3.99505L7.5 7.96703L1.24112 3.99505C1.16621 3.94751 1.0826 3.92486 1 3.92494V3ZM1 4.90797V12H14V4.90797L7.74112 8.87995C7.59394 8.97335 7.40606 8.97335 7.25888 8.87995L1 4.90797Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                  </motion.li>
                  </motion.a>
                </motion.ul>
              </div>
          </div>
          </div>
        </div>
        <div className='flex-1 flex items-center justify-center lg:relative w-full md:w-3/4'>
          {/* <Image
            src="/me2.png"
            alt="Picture of the author"
            width={500}
            height={500}
            className='absolute  filter-me'
          />
          <Image
            src="/me_ia.png"
            alt="Picture of the author"
            width={500}
            height={500}
            className='absolute  filter-me-ia'
          /> */}

          {/* <Image
            src="/test.png"
            alt="Picture of the author"
            width={1159}
            height={700}
            className='xl:w-fit w-4/5 sm:w-3/5 md:w-1/2 lg:w-full max-[100px]:w-1/3'
          /> */}
          <Image
            src={'/portfolio_temp/me_final.png'}
            alt="Picture of the author"
            width={1105}
            height={886}
            className='lg:absolute lg:-z-10 lg:-left-10 '
          />
          
          </div>
          {/* <div className='hidden xl:block w-1/12'></div> */}
          {/* <Image
            src={me}
            // layout='fixed'
            alt="Picture of the author"
            width={576}
            height={768}

            className='absolute -z-10 '
          /> */}
      </div>
      
    </div>
    )
}