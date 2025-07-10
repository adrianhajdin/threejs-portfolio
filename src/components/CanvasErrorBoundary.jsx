import React from 'react';
import { useMobileDetection } from '../hooks/useMobileDetection';

class CanvasErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Canvas Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <CanvasErrorFallback error={this.state.error} />;
    }

    return this.props.children;
  }
}

const CanvasErrorFallback = ({ error }) => {
  const deviceInfo = useMobileDetection();
  
  return (
    <div className="flex items-center justify-center h-full bg-black-200 rounded-lg border border-black-300">
      <div className="text-center p-8">
        <div className="w-16 h-16 mx-auto mb-4 bg-black-300 rounded-lg flex items-center justify-center">
          <svg className="w-8 h-8 text-white-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">
          {deviceInfo.isMobile ? 'Mobile 3D View Unavailable' : '3D View Error'}
        </h3>
        <p className="text-white-600 text-sm mb-4">
          {deviceInfo.isMobile 
            ? 'Your device may not support 3D graphics. Please try on desktop for the full experience.'
            : 'Unable to load 3D content. Please refresh the page or try a different browser.'
          }
        </p>
        <button 
          onClick={() => window.location.reload()} 
          className="btn text-sm px-4 py-2"
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default CanvasErrorBoundary;