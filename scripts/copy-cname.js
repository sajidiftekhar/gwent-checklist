import fs from 'fs';
import path from 'path';

const src = path.resolve('CNAME');
const dest = path.resolve('dist', 'CNAME');

if (!fs.existsSync(src)) {
    console.error('CNAME file not found');
    process.exit(1);
}

fs.copyFileSync(src, dest);
console.log('✅ CNAME file copied to dist/');