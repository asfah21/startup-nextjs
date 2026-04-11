const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

function processDirectory(directory) {
  if (!fs.existsSync(directory)) return;
  const items = fs.readdirSync(directory);
  items.forEach(item => {
    const fullPath = path.join(directory, item);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.jpg') || fullPath.endsWith('.png') || fullPath.endsWith('.jpeg')) {
      const outputPath = fullPath.replace(/\.(jpg|png|jpeg)$/i, '.webp');
      // Only process if output doesn't exist
      if (!fs.existsSync(outputPath)) {
        sharp(fullPath)
          .webp({ quality: 80 })
          .toFile(outputPath)
          .then(() => console.log('Converted:', fullPath))
          .catch(err => console.error('Error on', fullPath, err));
      }
    }
  });
}

processDirectory(path.join(__dirname, 'public/images'));
