# Project Demo Video Replacement Guide

This guide explains how to replace the default demo videos in the "My Selected Work" section with your actual project content.

## Current Video Setup

- **Location**: "My Selected Work" section displays videos on 3D computer screens
- **Video Files**: `/public/textures/project/project1.mp4` through `project4.mp4`
- **Component**: `src/components/DemoComputer.jsx`
- **Display**: Videos loop automatically on interactive 3D computer models
- **Integration**: Each project in `src/constants/index.js` has a `texture` property pointing to its video

## Video Files to Replace

### Project 1: AutoApply - AI Job Application SaaS
- **File**: `/public/textures/project/project1.mp4`
- **Current**: Generic demo video
- **Replace With**: AutoApply platform demo, dashboard metrics, job application process

### Project 2: OpenRLHF Fork - Scalable RLHF Framework
- **File**: `/public/textures/project/project2.mp4`
- **Current**: Generic demo video
- **Replace With**: Training dashboards, performance graphs, model comparisons

### Project 3: ArchUnit TypeScript - Architecture Testing
- **File**: `/public/textures/project/project3.mp4`
- **Current**: Generic demo video
- **Replace With**: Code analysis results, dependency graphs, test outputs

### Project 4: Domain-Specific GPT-2 Fine-Tuning
- **File**: `/public/textures/project/project4.mp4`
- **Current**: Generic demo video
- **Replace With**: Training progress, text generation examples, model comparisons

## Video Requirements

### Technical Specifications
- **Format**: MP4 (H.264 codec recommended)
- **Resolution**: 1920x1080 or 1280x720 (16:9 aspect ratio works best)
- **Duration**: 10-30 seconds (loops automatically)
- **File Size**: Keep under 10MB each for good web performance
- **Frame Rate**: 30fps recommended
- **Audio**: Not required (videos play without sound)

### Content Guidelines
- **Show Real Functionality**: Display actual project features, not mockups
- **Clear Visuals**: High contrast, readable text, smooth animations
- **Loop Seamlessly**: Ensure first and last frames connect smoothly
- **Focus on Key Features**: Highlight main project capabilities
- **Professional Quality**: Clean, polished screen recordings

## Content Creation Ideas

### AutoApply Video Content
- **Dashboard Overview**: Show user analytics, success rates, application tracking
- **Job Application Process**: Demonstrate automated form filling
- **AI Detection**: Visualize YOLOv8 form detection in action
- **Results Metrics**: Display $480K ARR, 10K+ users, 78K+ applications
- **Multi-agent System**: Show GPT-4 and Claude-3 API integration

### OpenRLHF Video Content
- **Training Dashboard**: Real-time loss curves, convergence graphs
- **Performance Metrics**: 15% memory reduction, 23% faster convergence
- **Multi-GPU Setup**: Show distributed training across 8x A100 clusters
- **DPO/PPO Comparison**: Before/after training pipeline results
- **Code Examples**: Brief code snippets with syntax highlighting

### ArchUnit Video Content
- **Dependency Analysis**: Show circular dependency detection
- **Architecture Validation**: Live testing of code structure rules
- **Pattern Matching**: Demonstrate glob/regex pattern matching
- **GitHub Integration**: Show the 400+ stars, community adoption
- **Testing Framework**: Jest/Mocha integration examples

### GPT-2 Video Content
- **Training Progress**: Show loss curves, ROUGE score improvements
- **Text Generation**: Live aerospace paper summarization demo
- **Tokenization Process**: Visualize domain-specific vocabulary
- **Model Comparison**: Before/after fine-tuning results
- **Technical Metrics**: 12% ROUGE improvement, 4 GPU setup

## Recording Tools

### Screen Recording Software
- **macOS**: QuickTime Player, Screenshot (Cmd+Shift+5)
- **Windows**: OBS Studio, Bandicam, Camtasia
- **Cross-Platform**: OBS Studio (free), Loom, ScreenFlow

### Video Editing Tools
- **Basic**: iMovie (macOS), Movie Maker (Windows)
- **Advanced**: Adobe Premiere Pro, Final Cut Pro, DaVinci Resolve
- **Online**: Canva, Kapwing, ClipChamp

### Optimization Tools
- **HandBrake**: Free video compression
- **FFmpeg**: Command-line video processing
- **Online**: CloudConvert, Zamzar

## Step-by-Step Replacement Process

### Step 1: Create Your Videos
1. **Plan Content**: Decide what to show for each project
2. **Set Up Recording**: Use screen recording software
3. **Record in High Quality**: 1080p or 720p, 30fps
4. **Keep It Short**: 10-30 seconds per video
5. **Edit if Needed**: Trim, add transitions, optimize

### Step 2: Optimize Videos
1. **Compress**: Use HandBrake or similar tool
2. **Check Size**: Ensure each video is under 10MB
3. **Test Playback**: Verify videos play smoothly
4. **Ensure Loop**: First and last frames should connect

### Step 3: Replace Files
1. **Backup Originals**: Copy current videos to backup folder
2. **Replace Files**: 
   - Replace `project1.mp4` with AutoApply video
   - Replace `project2.mp4` with OpenRLHF video
   - Replace `project3.mp4` with ArchUnit video
   - Replace `project4.mp4` with GPT-2 video
3. **Keep Same Names**: Don't change filenames, just replace content

### Step 4: Test
1. **Start Dev Server**: Run `npm run dev`
2. **Navigate to Projects**: Go to "My Selected Work" section
3. **Check All Videos**: Verify each project displays correctly
4. **Test Interactions**: Hover over projects, check video loops
5. **Check Console**: Look for any loading errors

## File Structure
```
public/
├── textures/
    ├── project/
    │   ├── project1.mp4    <- AutoApply demo
    │   ├── project2.mp4    <- OpenRLHF demo
    │   ├── project3.mp4    <- ArchUnit demo
    │   ├── project4.mp4    <- GPT-2 demo
    │   └── project5.mp4    <- (unused, can be removed)
```

## Troubleshooting

### Video Not Playing
1. **Check Format**: Ensure MP4 with H.264 codec
2. **Check Size**: Large files may cause loading issues
3. **Browser Console**: Look for error messages
4. **Try Different Browser**: Test in Chrome, Firefox, Safari

### Poor Performance
1. **Reduce File Size**: Compress videos further
2. **Lower Resolution**: Use 720p instead of 1080p
3. **Shorter Duration**: Trim to 10-15 seconds
4. **Check Network**: Slow connections may struggle

### Video Quality Issues
1. **Increase Bitrate**: Higher quality encoding
2. **Check Source**: Ensure original recording is high quality
3. **Avoid Upscaling**: Don't increase resolution of low-quality source
4. **Test on Different Devices**: Mobile vs desktop performance

### Loop Issues
1. **Match First/Last Frame**: Ensure seamless loop
2. **Add Fade Transition**: Smooth transition between end and start
3. **Check Video Length**: Very short videos may loop too quickly

## Advanced Customization

### Adding 3D Elements
If you want to enhance the demos with 3D visualizations:
- **AutoApply**: Floating job application forms, animated success metrics
- **OpenRLHF**: Neural network node visualizations, GPU cluster representations
- **ArchUnit**: Interactive dependency trees, architecture layer displays
- **GPT-2**: Transformer architecture visualization, token flow animations

### Custom Video Textures
You can also use the videos as textures on other 3D objects:
```jsx
// Example: Use video on a different 3D shape
const videoTexture = useVideoTexture('/textures/project/project1.mp4');
```

### Dynamic Video Switching
For interactive demos, videos can be switched based on user interaction:
```jsx
// Example: Switch videos based on hover state
const currentVideo = isHovered ? '/textures/project/demo.mp4' : '/textures/project/idle.mp4';
```

## Testing Checklist
- [ ] All 4 videos replaced with actual project content
- [ ] Videos load without errors
- [ ] Videos loop seamlessly
- [ ] File sizes are optimized (under 10MB each)
- [ ] Videos display correctly on 3D computer screens
- [ ] No console errors
- [ ] Performance is acceptable across devices
- [ ] Videos are relevant to their respective projects

## Performance Tips
- **Preload Important Videos**: Videos are automatically preloaded
- **Use Video Compression**: H.264 codec with appropriate bitrate
- **Test on Mobile**: Ensure videos work on different devices
- **Monitor Network Usage**: Large videos may impact loading times

## Need Help?
If you encounter issues:
1. Check browser console for errors
2. Verify video format is MP4 with H.264 codec
3. Test with a simple, small video first
4. Consider using online video converters
5. Check that file names match exactly
6. Ensure videos are in the correct directory

## Alternative Approaches

### Image Sequences
Instead of video, you can use image sequences:
- Convert video to image frames
- Use `useTexture` with animated sprite sheets
- Better for simple animations

### GIF Support
While not recommended for performance, GIFs can work:
- Convert to MP4 for better compression
- Use online GIF to MP4 converters

### Interactive Demos
For more advanced demos, consider:
- Embedded iframes showing live applications
- Interactive WebGL demos
- Real-time API demonstrations