import { useMobileDetection } from '../hooks/useMobileDetection';
import { generateFallbackImage } from '../utils/projectFallbacks';

const MobileProjectDisplay = ({ texture, project }) => {
  const deviceInfo = useMobileDetection();
  const fallbackImage = generateFallbackImage(texture);

  // For mobile, show a simple 2D preview instead of 3D
  if (deviceInfo.isMobile) {
    return (
      <div className="flex items-center justify-center h-full bg-gradient-to-br from-black-300 to-black-200 rounded-lg border border-black-300 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
        </div>
        
        {/* Project preview */}
        <div className="relative z-10 text-center p-6">
          <div className="w-24 h-24 mx-auto mb-4 rounded-xl overflow-hidden border-2 border-black-300 bg-black-200">
            <img 
              src={fallbackImage} 
              alt="Project preview" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = '/assets/project-logo1.png';
              }}
            />
          </div>
          
          <p className="text-white-600 text-sm mb-2 font-medium">
            Project Preview
          </p>
          
          <p className="text-white-500 text-xs">
            View on desktop for interactive 3D demo
          </p>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/20 rounded-full blur-sm"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500/20 rounded-full blur-sm"></div>
        </div>
      </div>
    );
  }

  return null; // Let the 3D Canvas handle desktop
};

export default MobileProjectDisplay;