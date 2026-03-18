const fs = require('fs');
const filePath = 'src/components/LandingPageTemplate.tsx';
const buf = fs.readFileSync(filePath);
const index = 12077;
const portion = buf.subarray(Math.max(0, index - 20), index + 20);
console.log('Hex:', portion.toString('hex'));
console.log('Latin1:', portion.toString('latin1'));
console.log('UTF8:', portion.toString('utf8'));
