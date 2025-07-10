import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

export const useMobileDetection = () => {
  const [deviceInfo, setDeviceInfo] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isIOS: false,
    isAndroid: false,
    isSafari: false,
    isChrome: false,
    supportsVideoTexture: true,
  });

  const isMobileQuery = useMediaQuery({ maxWidth: 768 });
  const isTabletQuery = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isSmallQuery = useMediaQuery({ maxWidth: 440 });

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    // Detect mobile devices
    const isMobile = isMobileQuery || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    const isTablet = isTabletQuery && !isMobile;
    const isDesktop = !isMobile && !isTablet;
    
    // Detect specific platforms
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    const isAndroid = /Android/i.test(userAgent);
    
    // Detect browsers
    const isSafari = /Safari/.test(userAgent) && !/Chrome/.test(userAgent);
    const isChrome = /Chrome/.test(userAgent);
    
    // Determine video texture support
    let supportsVideoTexture = true;
    
    // iOS Safari has known issues with video textures
    if (isIOS && isSafari) {
      supportsVideoTexture = false;
    }
    
    // Some Android devices have performance issues with video textures
    if (isAndroid && isSmallQuery) {
      supportsVideoTexture = false;
    }
    
    setDeviceInfo({
      isMobile,
      isTablet,
      isDesktop,
      isIOS,
      isAndroid,
      isSafari,
      isChrome,
      supportsVideoTexture,
    });
  }, [isMobileQuery, isTabletQuery, isSmallQuery]);

  return deviceInfo;
};