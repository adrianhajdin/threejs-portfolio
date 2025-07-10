can# 3D Character Replacement Guide

This guide explains how to replace the default 3D character in the Work Experience section with your own avatar.

## Current Character Setup

- **Location**: Work Experience section displays a 3D human character
- **Model File**: `/public/models/animations/developer.glb`
- **Component**: `src/components/Developer.jsx`
- **Animations**: 4 animations (idle, salute, clapping, victory)
- **Animation Files**: Located in `/public/models/animations/` folder

## Option 1: ReadyPlayerMe (Recommended)

### Step 1: Create Your Avatar
1. **Direct URL**: https://readyplayer.me/avatar
2. **Alternative**: Go to https://readyplayer.me/ → Click "Try it now" → Create account
3. **Choose Creation Method**:
   - **From Photo**: Upload a clear photo of yourself
   - **From Scratch**: Build manually using their editor
4. **Customize**: Adjust hair, clothing, accessories, facial features
5. **Download**: Export as GLB format

### Step 2: Replace the Model
1. **Rename** your downloaded file to `developer.glb`
2. **Replace** the existing file at `/public/models/animations/developer.glb`
3. **Keep** all animation files (idle.fbx, salute.fbx, clapping.fbx, victory.fbx)

### Step 3: Test
1. Run `npm run dev`
2. Navigate to Work Experience section
3. Hover over different work experiences to test animations
4. Check that the model loads without errors

## Option 2: VRoid Studio (Most Customizable)

### Step 1: Create Avatar
1. **Download**: https://vroid.com/en/studio
2. **Create**: Anime-style avatar from scratch
3. **Export**: As VRM format
4. **Convert**: Use online converter to GLB format

### Step 2: Replace Model
- Follow same steps as Option 1, Step 2

## Option 3: Mixamo + Adobe

### Step 1: Create Character
1. **Visit**: https://www.mixamo.com/
2. **Create Account**: Adobe account required
3. **Choose Character**: Select base character or upload custom
4. **Customize**: Appearance and clothing
5. **Download**: As GLB format

### Step 2: Replace Model
- Follow same steps as Option 1, Step 2

## Alternative Options

### VRChat Integration
- **URL**: https://hub.vrcav.com/
- **Process**: Create Avatar → Select Ready Player Me
- Often has photo upload feature when main site doesn't

### Free Model Sources
- **Sketchfab**: Search for "human character GLB"
- **Mixamo**: Free characters with animations
- **OpenGameArt**: Free 3D models

## Troubleshooting

### If Animations Don't Work
1. **Check Console**: Look for errors in browser dev tools
2. **Bone Structure**: Ensure your model has similar bone names
3. **Retarget Animations**: Use Blender to retarget animations to your model

### If Model is Wrong Size
1. **Scale**: Adjust `scale={3}` in `src/sections/Experience.jsx:26`
2. **Position**: Modify `position-y={-3}` in `src/sections/Experience.jsx:26`

### If Materials Look Wrong
Update material references in `src/components/Developer.jsx`:
- `Wolf3D_Hair` - Hair material
- `Wolf3D_Skin` - Skin material
- `Wolf3D_Body` - Body material
- `Wolf3D_Outfit_Top/Bottom` - Clothing materials

### Animation Issues
The model expects these bone names for animations:
- Hips (root bone)
- Standard humanoid bone structure
- If bones don't match, animations won't work properly

## Technical Details

### Model Requirements
- **Format**: GLB/GLTF
- **Rigged**: Must have skeleton for animations
- **Bone Structure**: Humanoid bone names compatible with existing animations
- **Size**: Keep under 10MB for good performance

### Animation Files
- **idle.fbx**: Default standing pose
- **salute.fbx**: Saluting gesture
- **clapping.fbx**: Clapping hands
- **victory.fbx**: Victory pose

### Component Structure
```jsx
// src/components/Developer.jsx
const Developer = ({ animationName = 'idle', ...props }) => {
  // Loads model and animations
  // Switches between animations based on work experience hover
}
```

### Usage in Experience Section
```jsx
// src/sections/Experience.jsx
<Developer position-y={-3} scale={3} animationName={animationName} />
```

## File Structure
```
public/
├── models/
    ├── animations/
    │   ├── developer.glb      <- Replace this file
    │   ├── idle.fbx          <- Keep these
    │   ├── salute.fbx        <- Keep these
    │   ├── clapping.fbx      <- Keep these
    │   └── victory.fbx       <- Keep these
```

## Testing Checklist
- [ ] Model loads without errors
- [ ] All 4 animations work (idle, salute, clapping, victory)
- [ ] Hover interactions trigger animations
- [ ] Model is properly scaled and positioned
- [ ] No console errors
- [ ] Performance is acceptable

## Need Help?
If you encounter issues:
1. Check browser console for errors
2. Ensure model format is GLB
3. Verify bone structure matches expected format
4. Test with a simple model first
5. Consider using Blender for model adjustments