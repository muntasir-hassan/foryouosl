const fs = require('fs');
const path = require('path');

// Get the environment variable set by Vercel
const allowedCountry = process.env.ALLOWED_COUNTRY || 'UNKNOWN';

// Path to your script.js file
const scriptPath = path.join(__dirname, 'script.js');

// Read the content of script.js
let scriptContent = fs.readFileSync(scriptPath, 'utf8');

// Replace the placeholder with the actual environment variable value
scriptContent = scriptContent.replace('__ALLOWED_COUNTRY__', allowedCountry);

// Write the updated content back to script.js
fs.writeFileSync(scriptPath, scriptContent);

console.log('Placeholder replaced with ALLOWED_COUNTRY:', allowedCountry);
