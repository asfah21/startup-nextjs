const fs = require('fs');
const path = require('path');

function processDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      processDir(full);
    } else if (full.endsWith('.tsx') || full.endsWith('.ts')) {
      let content = fs.readFileSync(full, 'utf8');
      // Replace only paths that are clearly image URLs inside /images/
      let newContent = content.replace(/\/images\/([a-zA-Z0-9_\-\/]+)\.jpg/g, '/images/$1.webp');
      newContent = newContent.replace(/\/images\/([a-zA-Z0-9_\-\/]+)\.png/g, '/images/$1.webp');
      if (content !== newContent) {
        fs.writeFileSync(full, newContent, 'utf8');
        console.log('Updated:', full);
      }
    }
  });
}

processDir(path.join(__dirname, 'src'));
