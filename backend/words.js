import fs from 'fs';

const data = fs.readFileSync('./txt/Oxford 5000.txt', 'utf-8');
export const words = data.split('\n').map(w => w.trim()).filter(Boolean);