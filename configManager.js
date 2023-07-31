// configManager.js
import fs from 'fs';
import path from 'path';

const configFile = path.join(__dirname, './serviceAccountKey.json');

function loadServiceAccountKey() {
    try {
        const serviceAccountKey = fs.readFileSync(configFile, 'utf8');
        return JSON.parse(serviceAccountKey);
    } catch (error) {
        console.error('Error loading serviceAccountKey.json:', error);
        return null;
    }
}

const serviceAccount = loadServiceAccountKey();

export { serviceAccount }; // Use export instead of module.exports
