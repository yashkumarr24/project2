const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const imageFiles = [
  'jeep-hero.webp',
  'logo.webp',
  'car service.webp',
  'ac service.webp',
  'dent and paint.webp',
  'car washing and spa.webp',
  'tyres.webp',
  'Batteries.webp',
  'Detailing Services.webp',
  'Car Inspections.webp',
  'Windshield & Lights.webp',
  'Suspension & Fitments.webp',
  'mechanical work.webp',
  'Insurance Claims.webp',
  'engine work.webp',
  'car accessories.webp',
  'model.webp'
];

async function optimizeImages() {
  console.log('🚀 Starting image optimization...');
  
  for (const filename of imageFiles) {
    const inputPath = path.join(publicDir, filename);
    const outputPath = path.join(publicDir, `optimized-${filename}`);
    
    if (fs.existsSync(inputPath)) {
      try {
        const stats = fs.statSync(inputPath);
        const originalSize = stats.size;
        
        await sharp(inputPath)
          .webp({ 
            quality: 85,
            effort: 6,
            lossless: false
          })
          .resize(1920, 1080, { 
            fit: 'cover',
            withoutEnlargement: true 
          })
          .toFile(outputPath);
        
        const newStats = fs.statSync(outputPath);
        const newSize = newStats.size;
        const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
        
        console.log(`✅ ${filename}: ${(originalSize/1024/1024).toFixed(2)}MB → ${(newSize/1024/1024).toFixed(2)}MB (${savings}% savings)`);
        
        // Replace original with optimized version
        fs.renameSync(outputPath, inputPath);
        
      } catch (error) {
        console.log(`❌ Error optimizing ${filename}:`, error.message);
      }
    } else {
      console.log(`⚠️  File not found: ${filename}`);
    }
  }
  
  console.log('🎉 Image optimization complete!');
}

// Generate responsive images
async function generateResponsiveImages() {
  console.log('📱 Generating responsive images...');
  
  const heroImage = path.join(publicDir, 'jeep-hero.webp');
  
  if (fs.existsSync(heroImage)) {
    const sizes = [
      { width: 480, suffix: '-mobile' },
      { width: 768, suffix: '-tablet' },
      { width: 1200, suffix: '-desktop' },
      { width: 1920, suffix: '-xl' }
    ];
    
    for (const size of sizes) {
      const outputPath = path.join(publicDir, `jeep-hero${size.suffix}.webp`);
      
      await sharp(heroImage)
        .resize(size.width, null, { 
          withoutEnlargement: true,
          fit: 'cover'
        })
        .webp({ quality: 85, effort: 6 })
        .toFile(outputPath);
      
      console.log(`✅ Generated: jeep-hero${size.suffix}.webp (${size.width}px)`);
    }
  }
  
  console.log('📱 Responsive images generated!');
}

// Run optimization
optimizeImages()
  .then(() => generateResponsiveImages())
  .catch(console.error);
