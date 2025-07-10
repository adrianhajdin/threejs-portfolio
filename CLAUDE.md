# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server (runs on http://localhost:5173)
- `npm run build` - Build production version
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Architecture

This is a React + Three.js portfolio website built with Vite. The site showcases an interactive 3D experience with sections for hero, about, projects, publications, work experience, and contact.

### Key Technologies
- **React 18** - UI framework
- **Three.js + React Three Fiber** - 3D graphics and animations
- **React Three Drei** - Helper utilities for Three.js
- **GSAP** - Animations and transitions
- **Tailwind CSS** - Styling framework
- **EmailJS** - Contact form functionality
- **Leva** - 3D development controls (hidden in production)

### Core Structure

**Main App Flow**: `App.jsx` renders sections in order: Navbar → Hero → About → Projects → Publications → WorkExperience → Contact → Footer

**3D Scene Architecture**:
- `Hero.jsx` contains the main 3D canvas with interactive elements
- `HeroCamera.jsx` handles camera controls and mouse interactions
- `HackerRoom.jsx` is the main 3D room model
- Floating 3D elements: `Cube.jsx`, `Rings.jsx`, tech logos (`PythonLogo.jsx`, `PyTorchLogo.jsx`, etc.)
- `calculateSizes()` in `constants/index.js` handles responsive positioning

**Data Management**:
- `src/constants/index.js` contains all static data (projects, publications, work experience, navigation)
- Responsive breakpoints handled via `react-responsive` hooks

**Component Pattern**:
- 3D components in `/components` directory
- Page sections in `/sections` directory
- Shared utilities in `/hooks` directory
- All 3D models stored in `/public/models`
- Textures and assets in `/public/textures` and `/public/assets`

### Email Configuration

The contact form and newsletter subscription use EmailJS. Environment variables needed:
- `VITE_EMAILJS_SERVICE_ID` - EmailJS service ID
- `VITE_EMAILJS_TEMPLATE_ID` - Template ID for contact form
- `VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID` - Template ID for newsletter subscriptions
- `VITE_EMAILJS_PUBLIC_KEY` - EmailJS public key

**Important**: Use `VITE_` prefix for environment variables in Vite (not `REACT_APP_`)

For detailed setup instructions, see `EMAILJS_SETUP.md`

### 3D Model Loading

Models are loaded from `/public/models` using `useGLTF` hook. Key models:
- `hacker-room.glb` - Main desk/room scene
- `computer.glb` - Interactive computer for projects
- `cube.glb`, `react.glb` - Floating elements
- Animation files in `/models/animations/`

### Performance Considerations

- All 3D models are preloaded using `useGLTF.preload()`
- Responsive sizing calculated once and passed to components
- Suspense boundaries with custom loading components
- Media queries determine render complexity based on device

### Deployment

#### Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel project settings:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
3. Deploy using `npm run build`
4. Test contact form and newsletter functionality after deployment

#### Local Development with EmailJS
Create `.env.local` file with EmailJS environment variables for local testing.
Never commit this file to version control.