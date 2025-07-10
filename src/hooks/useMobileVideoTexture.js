import { useEffect, useRef, useState } from 'react';
import { useVideoTexture, useTexture } from '@react-three/drei';
import { useMobileDetection } from './useMobileDetection';

export const useMobileVideoTexture = (src, fallbackImage = null) => {
  const deviceInfo = useMobileDetection();
  const [shouldUseVideo, setShouldUseVideo] = useState(false); // Start with false for mobile
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef(null);
  
  // Determine if we should use video based on device capabilities
  useEffect(() => {
    // On mobile devices, default to static images to avoid loading issues
    if (deviceInfo.isMobile || deviceInfo.isTablet) {
      setShouldUseVideo(false);
      setIsLoading(false);
      return;
    }
    
    // Only use video on desktop
    setShouldUseVideo(true);
  }, [deviceInfo]);
  
  // Use video texture only if device supports it and we've determined it should use video
  const videoTexture = useVideoTexture(shouldUseVideo ? src : null, {
    muted: true,
    loop: true,
    playsInline: true,
    autoPlay: true,
  });
  
  // Always load fallback image
  const fallbackTexture = useTexture(fallbackImage || '/assets/project-logo1.png');

  useEffect(() => {
    if (shouldUseVideo && videoTexture) {
      const video = videoTexture?.source?.data;
      if (video && video instanceof HTMLVideoElement) {
        videoRef.current = video;
        
        // Set mobile-specific attributes
        video.setAttribute('playsinline', true);
        video.setAttribute('muted', true);
        video.setAttribute('autoplay', true);
        video.setAttribute('loop', true);
        
        // iOS Safari specific handling
        if (deviceInfo.isIOS && deviceInfo.isSafari) {
          video.muted = true;
          video.defaultMuted = true;
          
          // Force playsinline for iOS Safari
          video.setAttribute('webkit-playsinline', true);
          video.setAttribute('playsinline', true);
        }
        
        // Error handling
        const handleError = () => {
          console.warn('Video failed to load, using fallback');
          setHasError(true);
          setShouldUseVideo(false);
          setIsLoading(false);
        };
        
        const handleCanPlay = () => {
          setIsLoading(false);
          setHasError(false);
        };
        
        video.addEventListener('error', handleError);
        video.addEventListener('canplaythrough', handleCanPlay);
        
        // Cleanup
        return () => {
          video.removeEventListener('error', handleError);
          video.removeEventListener('canplaythrough', handleCanPlay);
        };
      }
    } else {
      // Not using video, mark as loaded
      setIsLoading(false);
    }
  }, [shouldUseVideo, videoTexture, deviceInfo]);

  // Return appropriate texture or fallback
  return {
    texture: shouldUseVideo && !hasError ? videoTexture : fallbackTexture,
    isLoading,
    hasError,
    shouldUseVideo,
    deviceInfo,
  };
};