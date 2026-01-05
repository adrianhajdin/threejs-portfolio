export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'SwaLay+ – Music Distribution Platform',
    desc: 'A full-stack music distribution platform that allows artists and labels to upload tracks, manage albums, and distribute music across multiple streaming platforms through a centralized dashboard.',
    subdesc:
      'Built with MERN stack and AWS, I developed responsive UIs, REST APIs, and database integrations supporting thousands of active users. Features include track/album management, audio previews, and label-specific workflows.',
    href: 'https://app.swalayplus.in/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    spotlight: '/assets/spotlight1.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'Node.js', path: '/src/logos/Node.js.png' },
      { id: 3, name: 'MongoDB', path: '/src/logos/MongoDB.png' },
      { id: 4, name: 'AWS', path: '/src/logos/AWS.png' },
    ],
  },
  {
    title: 'Album & Track Management',
    desc: 'A feature-rich module allowing users to create albums, upload and preview audio tracks, and manage metadata efficiently.',
    subdesc:
      'Implemented Zod validation, real-time error handling with toast notifications, and audio previews to ensure accurate uploads and seamless user experience.',
    href: '#',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    spotlight: '/assets/spotlight3.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'Zod', path: '/src/logos/zod.png' },
      { id: 3, name: 'Tailwind CSS', path: '/assets/tailwindcss.png' },
      { id: 4, name: 'MongoDB', path: '/src/logos/MongoDB.png' },
    ],
  },
  {
    title: 'Decentralized Voting System',
    desc: 'Blockchain-based voting application ensuring secure, transparent, and tamper-proof digital elections.',
    subdesc:
      'Built using Ethereum, Truffle, Ganache, and Node.js, featuring admin-controlled elections, voter registration, real-time vote counting, and result visualization.',
    href: '#',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    spotlight: '/assets/spotlight4.png',
    tags: [
      { id: 1, name: 'Blockchain', path: '/src/logos/blockchain.png' },
      { id: 2, name: 'Ethereum', path: '/src/logos/etheruem.png' },
      { id: 3, name: 'Node.js', path: '/src/logos/Node.js.png' },
      { id: 4, name: 'Solidity', path: '/src/logos/Solidity.png' },
    ],
  },
  {
    title: 'Virtual Mouse – OpenCV',
    desc: 'A computer vision system that allows users to control mouse movements and actions with hand gestures using a webcam.',
    subdesc:
      'Implemented real-time hand tracking and gesture recognition with Python, OpenCV, and MediaPipe. Enabled smooth cursor movement, clicks, and scrolling with optimized accuracy.',
    href: '#',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    spotlight: '/assets/spotlight5.png',
    tags: [
      { id: 1, name: 'Python', path: '/src/logos/Python.png' },
      { id: 2, name: 'OpenCV', path: '/src/logos/OpenCV.png' },
      { id: 3, name: 'MediaPipe', path: '/src/logos/mediapipe.png' },
      { id: 4, name: 'Computer Vision', path: '/src/logos/ai-eye.png' },
    ],
  },
  {
    title: 'RTASK – Task Management App',
    desc: 'A full-stack task management application that lets users organize, track, and prioritize tasks efficiently with a modern UI.',
    subdesc:
      'Features secure authentication, task categorization, deadlines, dark mode UI, and email-based password recovery using JWT and Resend. Built with React, Node.js, Express, MongoDB, and Tailwind CSS.',
    href: 'https://task-manager-nine-hazel.vercel.app',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo6.png',
    spotlight: '/assets/spotlight6.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'Node.js', path: '/src/logos/Node.js.png' },
      { id: 3, name: 'MongoDB', path: '/src/logos/MongoDB.png' },
      { id: 4, name: 'JWT', path: '/src/logos/jwt.png' },
      { id: 5, name: 'Tailwind CSS', path: '/assets/tailwindcss.png' },
    ],
  },
  {
    title: 'Wallet Fintech Backend',
    desc: 'A production-grade fintech wallet backend designed to handle secure, concurrent money transfers with strong data consistency.',
    subdesc:
      'Implemented ACID transactions, row-level locks, idempotent APIs, and immutable ledger architecture using Node.js, Express, PostgreSQL, and Docker for race-condition–free, duplicate-safe payments.',
    href: 'https://github.com/Mrpradhanji/wallet-fintech-backend',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo7.png',
    spotlight: '/assets/spotlight7.png',
    tags: [
      { id: 1, name: 'Node.js', path: '/src/logos/Node.js.png' },
      { id: 2, name: 'PostgreSQL', path: '/src/logos/PostgresSQL.png' },
      { id: 3, name: 'Express.js', path: '/src/logos/Express.png' },
      { id: 4, name: 'Docker', path: '/src/logos/Docker.png' },
      { id: 5, name: 'Fintech', path: '/src/logos/fintech.png' },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Plantusmedia',
    pos: 'Software Developer – Full Stack',
    duration: 'June 2025 – Present',
    title:
      'Worked on multiple production-grade full-stack applications. Built a cloud-based image review platform enabling users to upload, preview, and approve images, with approved assets automatically shared with clients to eliminate manual workflows. Developed a clothing brand e-commerce platform with secure authentication, role-based access, product management, cart and checkout flow, and admin dashboard, deployed on AWS with S3 storage. Also maintained and modernized internal websites and legacy systems by fixing bugs, improving UI performance, refactoring outdated codebases, and ensuring smooth production deployments.',
    icon: '/src/logos/plantus.png',
    animation: 'victory',
    tech: [
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'React', icon: '/assets/react.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Angular.js', icon: 'src/logos/angular.png' },
      { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
      { name: 'TypeScript', icon: '/assets/typescript.png' },
      { name: 'Docker', icon: '/src/logos/docker.png' },
    ],
  },
  {
    id: 2,
    name: 'Fortheye',
    pos: 'Frontend Developer – Intern',
    duration: 'Oct 2024 – Dec 2024',
    title:
      'Worked on a Thailand-based client project, managing product modules and converting Figma mobile app designs into functional, responsive UI using React and React Native. Contributed to backend development and PostgreSQL integration, and supported CI/CD pipelines using Jenkins to streamline deployments and improve delivery efficiency.',
    icon: '/src/logos/fortheye.jpg',
    animation: 'clapping',
    tech: [
      { name: 'React', icon: '/assets/react.svg' },
      { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
      { name: 'Figma', icon: '/assets/figma.svg' },
    ],
  },
  {
    id: 3,
    name: 'SwaLay',
    pos: 'Assistant Web Developer – Intern',
    duration: 'April 2024 – Sep 2024',
    title:
      'Modernized the SwaLay platform using Next.js and Tailwind CSS. Implemented Resend email API for transactional email workflows, integrated Razorpay for secure payments, and designed MongoDB schemas for efficient data management. Developed and tested REST APIs using Postman, contributed to frontend–backend integration, and gained hands-on experience in full-stack development.',
    icon: '/src/logos/swalay.jpg',
    animation: 'salute',
    tech: [
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'React', icon: '/assets/react.svg' },
      { name: 'Tailwind CSS', icon: '/assets/tailwindcss.png' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'Razorpay', icon: 'https://razorpay.com/favicon.png' },
      { name: 'Resend', icon: 'https://resend.com/favicon.ico' },
    ],
  },
];
