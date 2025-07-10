import { Canvas } from '@react-three/fiber';
import { useMobileDetection } from '../hooks/useMobileDetection';
import { useEffect, useState } from 'react';

const MobileOptimizedCanvas = ({ children, fallback, ...props }) => {
  const deviceInfo = useMobileDetection();
  const [webglSupported, setWebglSupported] = useState(true);
  const [canvasError, setCanvasError] = useState(false);

  useEffect(() => {
    // Check WebGL support
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
    if (!gl) {
      console.warn('WebGL not supported');
      setWebglSupported(false);
      return;
    }

    // Check for mobile-specific WebGL issues
    if (deviceInfo.isMobile) {
      try {
        const extension = gl.getExtension('WEBGL_lose_context');
        if (extension) {
          // Test context stability
          const testBuffer = gl.createBuffer();
          if (!testBuffer) {
            throw new Error('WebGL context unstable');
          }
          gl.deleteBuffer(testBuffer);
        }
      } catch (error) {
        console.warn('Mobile WebGL context issues:', error);
        setWebglSupported(false);
      }
    }

    // Cleanup
    if (gl.getExtension('WEBGL_lose_context')) {
      gl.getExtension('WEBGL_lose_context').loseContext();
    }
  }, [deviceInfo.isMobile]);

  // Mobile-specific Canvas configuration
  const getMobileCanvasProps = () => {
    const baseProps = {
      style: { 
        width: '100%', 
        height: '100%',
        display: 'block',
        touchAction: 'none' // Prevent mobile scroll interference
      },
      onCreated: (state) => {
        // Mobile performance optimizations
        state.gl.setSize(state.size.width, state.size.height);
        state.gl.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio on mobile
        
        // Mobile-specific renderer settings
        if (deviceInfo.isMobile) {
          state.gl.physicallyCorrectLights = false;
          state.gl.powerPreference = 'low-power';
        }
        
        // Force a render to ensure Canvas initializes
        state.gl.render(state.scene, state.camera);
      },
      onError: (error) => {
        console.error('Canvas error:', error);
        setCanvasError(true);
      }
    };

    if (deviceInfo.isMobile) {
      return {
        ...baseProps,
        dpr: Math.min(window.devicePixelRatio, 2), // Limit DPI on mobile
        performance: { min: 0.1, max: 0.8 }, // Conservative performance settings
        gl: {
          antialias: false, // Disable antialiasing on mobile for performance
          alpha: true,
          powerPreference: 'low-power',
          failIfMajorPerformanceCaveat: false
        }
      };
    }

    return baseProps;
  };

  // Show fallback if WebGL is not supported or Canvas errored
  if (!webglSupported || canvasError) {
    return fallback || (
      <div className="flex items-center justify-center h-full bg-black-200 rounded-lg border border-black-300">
        <div className="text-center p-4">
          <div className="w-12 h-12 mx-auto mb-3 bg-black-300 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-white-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-white-600 text-sm">
            {deviceInfo.isMobile ? 'Mobile 3D not supported' : '3D content unavailable'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <Canvas {...getMobileCanvasProps()} {...props}>
      {children}
    </Canvas>
  );
};

export default MobileOptimizedCanvas;