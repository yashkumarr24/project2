const fs = require('fs');
const sharp = require('sharp');

async function generateInlineHeroImage() {
  try {
    // Generate ultra-compressed hero image for inlining
    const buffer = await sharp('public/jeep-hero.webp')
      .resize(1920, 1080, { fit: 'cover' })
      .webp({ quality: 60, effort: 6 })
      .toBuffer();
    
    const base64 = buffer.toString('base64');
    const dataUri = `data:image/webp;base64,${base64}`;
    
    console.log(`📊 Inline image size: ${(buffer.length / 1024).toFixed(2)}KB`);
    
    // Write to a JS file for import
    const jsContent = `export const inlineHeroImage = "${dataUri}";`;
    fs.writeFileSync('src/assets/inlineHeroImage.js', jsContent);
    
    console.log('✅ Inline hero image generated successfully!');
    
  } catch (error) {
    console.error('❌ Error generating inline image:', error);
  }
}

generateInlineHeroImage();
