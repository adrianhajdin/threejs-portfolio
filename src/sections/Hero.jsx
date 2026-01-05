import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaChevronDown } from 'react-icons/fa';

import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.js';
import { HackerRoom } from '../components/HackerRoom.jsx';
import { ParticlesBackground } from '../components/ParticlesBackground';
import Typewriter from '../components/Typewriter';

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);


  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/Mrpradhanji' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/merohitsingh/' },
  ];

  return (
    <section className="min-h-screen w-full flex flex-col relative overflow-hidden" id="home">
      {/* Social Links */}
      <div className="fixed left-8 bottom-1/2 transform translate-y-1/2 z-20 hidden md:flex flex-col gap-6">
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white text-2xl transition-colors duration-300"
            whileHover={{ y: -3, scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {social.icon}
          </motion.a>
        ))}
        <div className="h-24 w-px bg-white/20 mx-auto mt-4"></div>
      </div>

      <div className="w-full mx-auto flex flex-col justify-center items-center h-full relative z-10 px-4">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 mt-20">
              <Typewriter text="Hi, I'm Rohit" className="text-white" />
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-300 mb-8">
              I&apos;m a <span className="text-blue-400">
                <Typewriter 
                  texts={['Developer', 'Designer', 'Problem Solver']} 
                  delay={100}
                />
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              Crafting exceptional digital experiences with modern web technologies
              and creative solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
           
          </motion.div>
        </div>
      </div>

      {/* 3D Background */}
      <div className="w-full h-full absolute inset-0 -z-0 mt-16">
        <Canvas>
          <Suspense fallback={<CanvasLoader />}>
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={0.5} />
            
            <HeroCamera isMobile={isMobile}>
              <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Rings position={sizes.ringPosition} />
              <Cube position={sizes.cubePosition} />
              <ParticlesBackground />
            </HeroCamera>
          </Suspense>
        </Canvas>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <p className="text-sm text-gray-400 mb-2">Scroll Down</p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <FaChevronDown className="text-white/60 text-xl" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
