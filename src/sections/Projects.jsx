import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Suspense, useRef, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Center, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';

import { filterCategories } from '../constants/index.js';
import CanvasLoader from '../components/Loading.jsx';
import DemoComputer from '../components/DemoComputer.jsx';
import useProjectUrlState from '../hooks/useProjectUrlState.js';

const CameraController = ({ isDesktop, targetRotation }) => {
  const cameraRef = useRef();
  const currentRotation = useRef({ x: 0, y: -0.1 });

  useFrame(() => {
    if (cameraRef.current && isDesktop) {
      currentRotation.current.x += (targetRotation.x - currentRotation.current.x) * 0.05;
      currentRotation.current.y += (targetRotation.y - currentRotation.current.y) * 0.05;
      
      cameraRef.current.position.x = Math.sin(currentRotation.current.y) * 30;
      cameraRef.current.position.y = currentRotation.current.x * 5;
      cameraRef.current.position.z = Math.cos(currentRotation.current.y) * 30;
      cameraRef.current.lookAt(0, 0, 0);
    }
  });

  return <PerspectiveCamera makeDefault position={[0, 0, 30]} ref={cameraRef} />;
};

const Projects = () => {
  const {
    activeFilter,
    selectedProject,
    selectedProjectIndex,
    filteredProjects,
    setFilter,
    setProject,
  } = useProjectUrlState();

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const getCameraRotation = useCallback((index, total) => {
    if (!isDesktop) return { x: 0, y: -0.1 };
    
    const angle = (index / Math.max(total, 1)) * Math.PI * 0.5 - Math.PI * 0.25;
    return { 
      x: (index % 3 - 1) * 0.1, 
      y: angle 
    };
  }, [isDesktop]);

  const targetRotation = getCameraRotation(selectedProjectIndex, filteredProjects.length);

  const handleNavigation = (direction) => {
    if (filteredProjects.length === 0) return;
    
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    let newIndex;
    
    if (direction === 'previous') {
      newIndex = currentIndex === 0 ? filteredProjects.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === filteredProjects.length - 1 ? 0 : currentIndex + 1;
    }
    
    setProject(filteredProjects[newIndex].id);
  };

  useGSAP(() => {
    if (!selectedProject) return;
    
    const tl = gsap.timeline();
    
    tl.fromTo(`.project-content`, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
    )
    .fromTo(`.animatedText`, 
      { opacity: 0, y: 10 }, 
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out' },
      '-=0.3'
    )
    .fromTo(`.tech-logo`, 
      { opacity: 0, scale: 0.8 }, 
      { opacity: 1, scale: 1, duration: 0.4, stagger: 0.1, ease: 'back.out(1.7)' },
      '-=0.4'
    );
    
    return () => tl.kill();
  }, [selectedProject.id, activeFilter]);

  if (!selectedProject || filteredProjects.length === 0) {
    return (
      <section className="c-space my-20">
        <p className="head-text">My Selected Work</p>
        <p className="text-white-600 mt-8 text-center">暂无符合筛选条件的项目</p>
      </section>
    );
  }

  return (
    <section className="c-space my-20" id="work">
      <p className="head-text">My Selected Work</p>
      
      <div className="flex flex-wrap gap-3 mt-8 mb-4">
        {filterCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setFilter(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeFilter === category.id
                ? 'bg-white text-black shadow-lg'
                : 'bg-black-300 text-white-600 hover:bg-black-400'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="text-white-500 text-sm mb-8">
        显示 {filteredProjects.length} 个项目
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-4 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200 project-content">
          <div className="absolute top-0 right-0">
            <img 
              src={selectedProject.spotlight} 
              alt="spotlight" 
              className="w-full h-96 object-cover rounded-xl transition-opacity duration-500"
              key={`spotlight-${selectedProject.id}`}
            />
          </div>

          <div 
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg transition-all duration-500" 
            style={selectedProject.logoStyle}
          >
            <img 
              className="w-10 h-10 shadow-sm" 
              src={selectedProject.logo} 
              alt="logo" 
            />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">
              {selectedProject.title}
            </p>

            <p className="animatedText">{selectedProject.desc}</p>
            <p className="animatedText">{selectedProject.subdesc}</p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {selectedProject.tags.map((tag, index) => (
                <div key={`${tag.id}-${selectedProject.id}`} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>

            <a
              className="flex items-center gap-2 cursor-pointer text-white-600 hover:text-white transition-colors"
              href={selectedProject.href}
              target="_blank"
              rel="noreferrer"
            >
              <p>Check Live Site</p>
              <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
            </a>
          </div>

          <div className="flex justify-between items-center mt-7">
            <button 
              className="arrow-btn" 
              onClick={() => handleNavigation('previous')}
              disabled={filteredProjects.length <= 1}
            >
              <img src="/assets/left-arrow.png" alt="left arrow" />
            </button>

            <div className="flex gap-2">
              {filteredProjects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => setProject(project.id)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    project.id === selectedProject.id
                      ? 'bg-white w-6'
                      : 'bg-white-300 hover:bg-white-400'
                  }`}
                  aria-label={`查看项目 ${index + 1}`}
                />
              ))}
            </div>

            <button 
              className="arrow-btn" 
              onClick={() => handleNavigation('next')}
              disabled={filteredProjects.length <= 1}
            >
              <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <CameraController 
              isDesktop={isDesktop} 
              targetRotation={targetRotation}
            />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer 
                    texture={selectedProject.texture} 
                    key={`computer-${selectedProject.id}`}
                  />
                </group>
              </Suspense>
            </Center>
            {!isDesktop && <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />}
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;