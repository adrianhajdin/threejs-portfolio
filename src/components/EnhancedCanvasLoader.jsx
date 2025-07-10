import { Html, useProgress } from '@react-three/drei';
import { useState, useEffect } from 'react';
import { useMobileDetection } from '../hooks/useMobileDetection';

const EnhancedCanvasLoader = ({ timeout = 10000, onTimeout }) => {
  const { progress } = useProgress();
  const [isTimedOut, setIsTimedOut] = useState(false);
  const deviceInfo = useMobileDetection();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setIsTimedOut(true);
        onTimeout?.();
      }
    }, timeout);

    return () => clearTimeout(timer);
  }, [progress, timeout, onTimeout]);

  if (isTimedOut) {
    return (
      <Html
        as="div"
        center
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: '20px',
          textAlign: 'center',
        }}>
        <div className="w-12 h-12 mb-4 bg-black-300 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-white-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <p className="text-white-600 text-sm mb-3">
          {deviceInfo.isMobile 
            ? 'Loading is taking longer than expected on mobile'
            : 'Loading timeout - please refresh to try again'
          }
        </p>
        <button 
          onClick={() => window.location.reload()} 
          className="px-4 py-2 bg-black-300 text-white-600 rounded text-sm hover:bg-black-500 transition-colors"
        >
          Retry
        </button>
      </Html>
    );
  }

  return (
    <Html
      as="div"
      center
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: deviceInfo.isMobile ? 12 : 14,
          color: '#F1F1F1',
          fontWeight: 800,
          marginTop: 40,
        }}>
        {progress !== 0 ? `${progress.toFixed(2)}%` : 'Loading...'}
      </p>
      {deviceInfo.isMobile && (
        <p
          style={{
            fontSize: 10,
            color: '#AFB0B6',
            marginTop: 10,
            textAlign: 'center',
          }}>
          Loading 3D content...
        </p>
      )}
    </Html>
  );
};

export default EnhancedCanvasLoader;