import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useState, useRef } from 'react';
import { FaReact, FaNodeJs, FaJs, FaCss3Alt, FaHtml5, FaGithub, FaServer, FaPalette, FaTools } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiExpress, SiRedux, SiNextdotjs, SiGraphql, SiDocker, SiJest, SiGit, SiFigma, SiAdobexd } from 'react-icons/si';
import { TbBrandThreejs } from 'react-icons/tb';

// Memoize skill items to prevent unnecessary re-renders
const SkillItem = ({ skill, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 border border-gray-700/50 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-gray-700/50 rounded-xl">
          {skill.icon}
        </div>
        <div className="text-right">
          <span className="text-sm text-blue-400 font-medium">
            {skill.level >= 90 ? 'Expert' : skill.level >= 75 ? 'Advanced' : skill.level >= 60 ? 'Intermediate' : 'Beginner'}
          </span>
          <p className="text-xs text-gray-400">{skill.years}</p>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-white mb-3">{skill.name}</h3>
      
      <div className="mb-2 flex justify-between text-sm text-gray-400">
        <span>Proficiency</span>
        <span>{skill.level}%</span>
      </div>
      
      <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
        <motion.div 
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 0.8, delay: 0.2 + (index * 0.03) }}
        />
      </div>
    </motion.div>
  );
};

const skillCategories = [
  { id: 'frontend', name: 'Frontend', icon: <FaPalette className="mr-2" /> },
  { id: 'backend', name: 'Backend', icon: <FaServer className="mr-2" /> },
  { id: 'tools', name: 'Tools & Other', icon: <FaTools className="mr-2" /> }
];

const skills = {
  frontend: [
    { name: 'React', icon: <FaReact className="text-4xl text-blue-400" />, level: 90, years: '4+ years' },
    { name: 'Next.js', icon: <SiNextdotjs className="text-4xl text-gray-100" />, level: 85, years: '3 years' },
    { name: 'TypeScript', icon: <SiTypescript className="text-4xl text-blue-500" />, level: 85, years: '3 years' },
    { name: 'JavaScript', icon: <FaJs className="text-4xl text-yellow-400" />, level: 90, years: '5+ years' },
    { name: 'Redux', icon: <SiRedux className="text-4xl text-purple-500" />, level: 85, years: '3 years' },
    { name: 'HTML5', icon: <FaHtml5 className="text-4xl text-orange-500" />, level: 95, years: '5+ years' },
    { name: 'CSS3', icon: <FaCss3Alt className="text-4xl text-blue-500" />, level: 90, years: '5+ years' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-4xl text-cyan-400" />, level: 90, years: '3 years' },
    { name: 'Three.js', icon: <TbBrandThreejs className="text-4xl text-white" />, level: 75, years: '2 years' },
  ],
  backend: [
    { name: 'Node.js', icon: <FaNodeJs className="text-4xl text-green-500" />, level: 85, years: '4 years' },
    { name: 'Express', icon: <SiExpress className="text-4xl text-gray-400" />, level: 80, years: '3 years' },
    { name: 'MongoDB', icon: <SiMongodb className="text-4xl text-green-500" />, level: 80, years: '3 years' },
    { name: 'GraphQL', icon: <SiGraphql className="text-4xl text-pink-500" />, level: 75, years: '2 years' },
    { name: 'REST APIs', icon: <FaServer className="text-4xl text-blue-300" />, level: 85, years: '4 years' },
  ],
  tools: [
    { name: 'Git/GitHub', icon: <FaGithub className="text-4xl text-gray-100" />, level: 85, years: '4 years' },
    { name: 'Docker', icon: <SiDocker className="text-4xl text-blue-400" />, level: 70, years: '2 years' },
    { name: 'Jest', icon: <SiJest className="text-4xl text-red-400" />, level: 80, years: '3 years' },
    { name: 'Git', icon: <SiGit className="text-4xl text-orange-500" />, level: 85, years: '4 years' },
    { name: 'Figma', icon: <SiFigma className="text-4xl text-purple-400" />, level: 75, years: '2 years' },
    { name: 'Adobe XD', icon: <SiAdobexd className="text-4xl text-pink-500" />, level: 70, years: '2 years' },
  ]
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  // Throttle tab switching to prevent rapid re-renders
  const handleTabChange = (category) => {
    if (activeCategory !== category) {
      setActiveCategory(category);
    }
  };

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 font-medium text-lg mb-2 inline-block">MY EXPERTISE</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Here&apos;s a showcase of my technical skills and the tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleTabChange(category.id)}
              className={`px-6 py-3 rounded-full font-medium flex items-center transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700/50'
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skills[activeCategory].map((skill, index) => (
              <SkillItem key={skill.name} skill={skill} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Additional Info */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl p-8 text-center border border-blue-500/20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Continuously Learning</h3>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Technology never stands still, and neither do I. I&apos;m always exploring new tools and frameworks to stay at the cutting edge of web development.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
