import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';

import { myProjects } from '../constants/index.js';
import CanvasLoader from '../components/Loading.jsx';
import DemoComputer from '../components/DemoComputer.jsx';
import MobileProjectDisplay from '../components/MobileProjectDisplay.jsx';
import { useMobileDetection } from '../hooks/useMobileDetection.js';

const Projects = () => {
  const deviceInfo = useMobileDetection();

  useGSAP(() => {
    gsap.fromTo(`.project-card`, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power2.inOut' });
  }, []);

  return (
    <section className="c-space my-20" id="work">
      <p className="head-text">My Selected Work</p>

      <div className="mt-12 flex flex-col gap-8">
        {myProjects.map((project, index) => (
          <div key={index} className="project-card grid lg:grid-cols-2 grid-cols-1 gap-5 w-full">
            <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200 rounded-xl">
              <div className="absolute top-0 right-0">
                <img src={project.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
              </div>

              <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={project.logoStyle}>
                <img className="w-10 h-10 shadow-sm" src={project.logo} alt="logo" />
              </div>

              <div className="flex flex-col gap-5 text-white-600 my-5">
                <p className="text-white text-2xl font-semibold">{project.title}</p>
                <p>{project.desc}</p>
                <p>{project.subdesc}</p>
              </div>

              <div className="flex items-center justify-between flex-wrap gap-5">
                <div className="flex items-center gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <div key={tagIndex} className="tech-logo">
                      <img src={tag.path} alt={tag.name} />
                    </div>
                  ))}
                </div>

                <a
                  className="flex items-center gap-2 cursor-pointer text-white-600 hover:text-white transition-colors"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer">
                  <p>View on GitHub</p>
                  <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full relative">
              {/* Mobile: Show simple 2D preview */}
              {deviceInfo.isMobile ? (
                <MobileProjectDisplay texture={project.texture} project={project} />
              ) : (
                /* Desktop: Show 3D Canvas */
                <Canvas
                  camera={{ position: [0, 0, 5], fov: 75 }}
                  style={{ width: '100%', height: '100%' }}
                >
                  <ambientLight intensity={Math.PI} />
                  <directionalLight position={[10, 10, 5]} intensity={1} />
                  <Center>
                    <Suspense fallback={<CanvasLoader />}>
                      <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                        <DemoComputer texture={project.texture} />
                      </group>
                    </Suspense>
                  </Center>
                  <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
                </Canvas>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
