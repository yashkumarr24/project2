// Script to create a passport-style placeholder image
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function createPassportPlaceholder() {
  console.log('🖼️ Creating passport-style placeholder image...');
  
  const width = 400;
  const height = 500; // 4:5 ratio for passport style
  
  // Create a professional placeholder with initials
  const placeholders = [
    { name: 'Ram Lal Lohar', initials: 'RL', color: '#1e3a8a' },
    { name: 'Ganesji', initials: 'GJ', color: '#059669' },
    { name: 'Yash Kumar', initials: 'YK', color: '#dc2626' }
  ];
  
  for (const person of placeholders) {
    try {
      // Create SVG with initials
      const svg = `
        <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:${person.color};stop-opacity:0.8" />
              <stop offset="100%" style="stop-color:${person.color};stop-opacity:1" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grad)"/>
          <circle cx="${width/2}" cy="${height/2 - 30}" r="80" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>
          <text x="${width/2}" y="${height/2 - 20}" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="48" font-weight="bold">${person.initials}</text>
          <text x="${width/2}" y="${height/2 + 60}" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="16" font-weight="500">${person.name}</text>
          <text x="${width/2}" y="${height/2 + 80}" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-family="Arial, sans-serif" font-size="12">AUTOMOTIVE EXPERT</text>
        </svg>
      `;
      
      const outputPath = path.join(__dirname, 'public', `team-${person.initials.toLowerCase()}.webp`);
      
      await sharp(Buffer.from(svg))
        .webp({ quality: 90 })
        .toFile(outputPath);
      
      console.log(`✅ Created: team-${person.initials.toLowerCase()}.webp`);
      
    } catch (error) {
      console.error(`❌ Error creating placeholder for ${person.name}:`, error.message);
    }
  }
  
  // Create a generic team placeholder
  const genericSvg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="genericGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#6b7280;stop-opacity:0.8" />
          <stop offset="100%" style="stop-color:#374151;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#genericGrad)"/>
      <circle cx="${width/2}" cy="${height/2 - 30}" r="80" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
      <circle cx="${width/2}" cy="${height/2 - 50}" r="25" fill="rgba(255,255,255,0.3)"/>
      <path d="M ${width/2 - 40} ${height/2 + 10} Q ${width/2} ${height/2 - 10} ${width/2 + 40} ${height/2 + 10} L ${width/2 + 30} ${height/2 + 40} L ${width/2 - 30} ${height/2 + 40} Z" fill="rgba(255,255,255,0.3)"/>
      <text x="${width/2}" y="${height/2 + 70}" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="14" font-weight="500">TEAM MEMBER</text>
    </svg>
  `;
  
  try {
    const genericOutputPath = path.join(__dirname, 'public', 'team-placeholder.webp');
    
    await sharp(Buffer.from(genericSvg))
      .webp({ quality: 90 })
      .toFile(genericOutputPath);
    
    console.log('✅ Created: team-placeholder.webp');
  } catch (error) {
    console.error('❌ Error creating generic placeholder:', error.message);
  }
  
  console.log('🎉 Passport-style placeholders created successfully!');
}

// Run the function
createPassportPlaceholder().catch(console.error);
