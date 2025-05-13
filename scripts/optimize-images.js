// scripts/optimize-images.js
import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const exts = ['.jpg', '.jpeg', '.png'];

async function processDir(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            await processDir(fullPath);
        } else {
            const ext = path.extname(entry.name).toLowerCase();
            if (exts.includes(ext)) {
                const outPath = fullPath.replace(ext, '.webp');
                await sharp(fullPath)
                    .webp({ quality: 80 })
                    .toFile(outPath);
                console.log(`✅ Converted ${fullPath} → ${outPath}`);
            }
        }
    }
}

async function main() {
    const root = process.cwd();
    await Promise.all([
        processDir(path.join(root, 'src/assets')),
        processDir(path.join(root, 'public/assets'))
    ]);
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});
