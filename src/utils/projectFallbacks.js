// Project fallback images mapping
export const projectFallbacks = {
  '/textures/project/project1.mp4': '/assets/project-logo1.png',
  '/textures/project/project2.mp4': '/assets/project-logo2.png', 
  '/textures/project/project3.mp4': '/assets/project-logo3.png',
  '/textures/project/project4.mp4': '/assets/project-logo4.png',
  '/textures/project/project5.mp4': '/assets/project-logo5.png',
};

// Generate fallback image path from video path
export const generateFallbackImage = (videoPath) => {
  if (!videoPath) return '/assets/project-logo1.png';
  
  // Use mapping first
  if (projectFallbacks[videoPath]) {
    return projectFallbacks[videoPath];
  }
  
  // Fallback to pattern matching
  const matches = videoPath.match(/project(\d+)\.mp4/);
  if (matches && matches[1]) {
    return `/assets/project-logo${matches[1]}.png`;
  }
  
  return '/assets/project-logo1.png';
};

// Alternative static screenshots (if you want to create dedicated screenshots)
export const projectScreenshots = {
  '/textures/project/project1.mp4': '/assets/screenshots/autoapply-screenshot.png',
  '/textures/project/project2.mp4': '/assets/screenshots/openrlhf-screenshot.png',
  '/textures/project/project3.mp4': '/assets/screenshots/archunit-screenshot.png',
  '/textures/project/project4.mp4': '/assets/screenshots/gpt2-screenshot.png',
  '/textures/project/project5.mp4': '/assets/screenshots/project5-screenshot.png',
};